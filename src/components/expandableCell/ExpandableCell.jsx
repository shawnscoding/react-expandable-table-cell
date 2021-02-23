import React from 'react'
import styles from './expandable_cell.module.css'
import PropTypes from 'prop-types'

const detectValueType = (value, type, columnId) => {
  if (type === 'number' && typeof value === 'number') return { val: value }
  if (type === 'number' && typeof value !== 'number') {
    console.error(
      `Wrong value type. initialValue should be ${type} in column id: ${columnId}`
    )
    return { val: '', error: true }
  }
  if (typeof value === 'string') return { val: value }
  if (typeof value !== 'string') {
    console.error(
      `Wrong value type. initialValue should be text in column id: ${columnId}`
    )
    return { val: '', error: true }
  }
  return { val: '', error: true }
}

const ExpandableCellComponent = React.memo(
  ({
    initialValue,
    rowId,
    onBlur,
    onChange,
    columnId,
    maxWidth,
    maxHeight,
    // can be seperated to other component
    expandOnOneClick,
    type,
    readOnly
  }) => {
    const [disabled, setDisabled] = React.useState(readOnly)
    const { val, error } = detectValueType(initialValue, type, columnId)
    const [value, setValue] = React.useState(val)
    const [mode, setMode] = React.useState('default')

    const [styleState, setStyle] = React.useState({})

    React.useEffect(() => {
      if (error) setDisabled(true)
    }, [error])

    React.useEffect(() => {
      window.onscroll = () => {
        const x = tdRef.current.getBoundingClientRect().x
        const y = tdRef.current.getBoundingClientRect().y
        setStyle((prev) => ({
          ...prev,
          left: x - 1,
          top: y - 1
        }))
      }
    }, [styleState])

    const _resetValue = () => {
      setValue(val)
    }

    const _onBlur = () => {
      setMode('default')
      setStyle({})
      if (onBlur) onBlur({ columnId, rowId, value, resetValue: _resetValue })
    }

    const _onChange = async (e) => {
      // console.log('called')
      const { value } = e.target
      if (type === 'number') {
        const num = Number(value)
        const isNum = isNaN(num)
        // console.log('isNum', isNum)
        // console.log('typeof ', typeof num)
        // console.log('value ', num)
        if (!isNum) {
          e.target.parentNode.dataset.value = num
          setValue(num)
          if (onChange) {
            await onChange({ columnId, rowId, value, resetValue: _resetValue })
          }
        }
      } else {
        e.target.parentNode.dataset.value = value
        setValue(value)
        if (onChange) {
          await onChange({ columnId, rowId, value, resetValue: _resetValue })
        }
      }
    }

    const onFocus = () => {
      if (expandOnOneClick) setEditMode()
      else setFocusMode()
    }

    const setFocusMode = () => {
      setMode('focus')
      const width = tdRef.current.getBoundingClientRect().width
      const height = tdRef.current.getBoundingClientRect().height
      const x = tdRef.current.getBoundingClientRect().x
      const y = tdRef.current.getBoundingClientRect().y

      setStyle({
        left: x,
        top: y,
        width: width + 1,
        height: height + 1
      })
    }

    const onDoubleClick = () => {
      if (expandOnOneClick) return
      setEditMode()
    }
    const setEditMode = () => {
      setMode('edit')

      const x = tdRef.current.getBoundingClientRect().x
      const y = tdRef.current.getBoundingClientRect().y

      setStyle({
        left: x,
        top: y,
        maxWidth: maxWidth !== null ? maxWidth : 'none',
        maxHeight: maxHeight !== null ? maxHeight : 'none'
      })
    }

    const tdRef = React.useRef(null)
    return (
      <td role='cell' className={styles.td} ref={tdRef}>
        <label
          data-value={mode === 'edit' ? value : ''}
          className={
            mode === 'focus'
              ? styles['expandable-cell--focus']
              : mode === 'edit'
              ? styles['expandable-cell--edit']
              : styles['expandable-cell']
          }
          style={styleState}
        >
          <textarea
            style={maxHeight !== undefined ? { maxHeight: maxHeight } : {}}
            onDoubleClick={!disabled ? onDoubleClick : () => {}}
            readOnly={mode === 'default'}
            onFocus={!disabled ? onFocus : () => {}}
            value={value}
            className={
              mode === 'focus'
                ? styles['textarea--focus']
                : mode === 'edit'
                ? styles['textarea--edit']
                : styles.textarea
            }
            onChange={!disabled ? _onChange : () => {}}
            onBlur={!disabled ? _onBlur : () => {}}
          />
        </label>
      </td>
    )
  }
)

ExpandableCellComponent.defaultProps = {
  onBlur: undefined,
  onChange: undefined,
  expandOnOneClick: false,
  maxWidth: null,
  maxHeight: null,
  type: 'text',
  readOnly: false
}

ExpandableCellComponent.propTypes = {
  initialValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  rowId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  columnId: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  type: PropTypes.oneOf(['text', 'number']).isRequired,
  expandOnOneClick: PropTypes.bool,
  readOnly: PropTypes.bool
}

export default ExpandableCellComponent
