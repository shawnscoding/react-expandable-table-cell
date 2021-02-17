import React from 'react'
import styles from './expandable_cell.module.css'

const ExpandableCellComponent = ({
  initialValue,
  rowId,
  onBlur,
  onChange,
  columnId,
  editOnOneClick,
  maxWidth,
  maxHeight
}) => {
  const [value, setValue] = React.useState(initialValue)
  const [mode, setMode] = React.useState('default')

  const [styleState, setStyle] = React.useState({})

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

  const _onBlur = () => {
    setMode(null)
    setStyle({})
    if (onBlur) onBlur({ columnId, rowId, value })
  }

  const _onChange = (e) => {
    const { value } = e.target
    e.target.parentNode.dataset.value = value
    setValue(value)
    if (onChange) onChange({ columnId, rowId, value })
  }

  const onFocus = () => {
    if (editOnOneClick) setEditMode()
    else setFocusMode()
  }

  const setFocusMode = () => {
    setMode('focus')
    const width = tdRef.current.getBoundingClientRect().width
    const height = tdRef.current.getBoundingClientRect().height
    const x = tdRef.current.getBoundingClientRect().x
    const y = tdRef.current.getBoundingClientRect().y
    console.log(tdRef.current.getBoundingClientRect())

    setStyle({
      left: x,
      top: y,
      width: width + 1,
      height: height + 1
    })
  }

  const onDoubleClick = () => {
    if (editOnOneClick) return
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
    <td role='cell' className={styles.global} ref={tdRef}>
      {mode === '' ? (
        <span>{value}</span>
      ) : (
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
            type=''
            onDoubleClick={onDoubleClick}
            readOnly={mode !== 'edit'}
            onFocus={onFocus}
            value={value}
            className={
              mode === 'focus'
                ? styles['textarea--focus']
                : mode === 'edit'
                ? styles['textarea--edit']
                : styles.textarea
            }
            onChange={_onChange}
            onBlur={_onBlur}
          />
        </label>
      )}
    </td>
  )
}

ExpandableCellComponent.defaultProps = {
  onBlur: undefined,
  onChange: undefined,
  editOnOneClick: false,
  maxWidth: null,
  maxHeight: null
}

export default ExpandableCellComponent
