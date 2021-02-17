import React from 'react'
import styles from './expandable_input.module.css'

const ExpandableInputComponent = ({
  initialValue,
  onBlur,
  onChange,
  name,
  id,
  readOnly
}) => {
  const [value, setValue] = React.useState(initialValue)

  const _onBlur = () => {
    onBlur({ value, name, id })
  }

  const _onChange = (e) => {
    const { value, name, id } = e.target
    console.log(value, name, id)
    e.target.parentNode.dataset.value = value
    setValue(value)
    onChange({ value, name, id })
  }

  return (
    <label data-value={value} className={styles['expandable-label']}>
      <textarea
        type=''
        readOnly={readOnly}
        name={name}
        id={id}
        value={value}
        className={styles['textarea']}
        onChange={_onChange}
        onBlur={_onBlur}
      />
    </label>
  )
}

export default ExpandableInputComponent
