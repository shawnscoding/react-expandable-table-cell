import React from 'react'
import styles from './expandable_cell.module.css'

const ExpandableCellComponent = ({
  initialValue,
  rowId,
  updateMyData,
  columnId
}) => {
  const [value, setValue] = React.useState(initialValue)
  const [mode, setMode] = React.useState(null)

  const [styleState, setStyle] = React.useState({})

  React.useEffect(() => {
    window.onscroll = () => {
      console.log('caelled')
      const x = tdRef.current.getBoundingClientRect().x
      const y = tdRef.current.getBoundingClientRect().y
      console.log('x , y', x, y)
      setStyle((prev) => ({
        ...prev,
        left: x - 1,
        top: y - 1
      }))
    }
  }, [styleState])

  const onBlur = () => {
    setMode(null)
    setStyle({})
    updateMyData(columnId, rowId, value)
  }

  React.useEffect(() => {
    setValue(initialValue)
  }, [initialValue])

  const onChange = (e) => {
    const { value } = e.target
    e.target.parentNode.dataset.value = value
    setValue(value)
  }

  const onFocus = () => {
    setMode('focus')
    const width = tdRef.current.getBoundingClientRect().width
    const height = tdRef.current.getBoundingClientRect().height
    const x = tdRef.current.getBoundingClientRect().x
    const y = tdRef.current.getBoundingClientRect().y

    setStyle({
      left: x - 1,
      top: y - 1,
      width: width + 1,
      height: height + 1
    })
  }

  const onDoubleClick = () => {
    setMode('edit')
    const x = tdRef.current.getBoundingClientRect().x
    const y = tdRef.current.getBoundingClientRect().y

    setStyle({
      left: x - 1,
      top: y - 1
    })
  }
  const tdRef = React.useRef(null)
  return (
    <td role='cell' className={styles.global} ref={tdRef}>
      <label
        data-value={mode === 'edit' ? value : ''}
        className={
          mode === 'focus'
            ? styles['expandable-label--focus']
            : mode === 'edit'
            ? styles['expandable-label--edit']
            : styles['expandable-label']
        }
        style={styleState}
      >
        <textarea
          type=''
          onDoubleClick={onDoubleClick}
          readOnly={mode !== 'edit'}
          onFocus={onFocus}
          value={value}
          className={
            mode === 'focus'
              ? styles['textarea--selected']
              : mode === 'edit'
              ? styles['textarea--selected']
              : styles['textarea']
          }
          onChange={onChange}
          onBlur={onBlur}
        />
      </label>
    </td>
  )
}

export default ExpandableCellComponent
