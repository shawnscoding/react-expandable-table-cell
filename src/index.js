import React from 'react'
import ExpandableCellComponent from './components/expandableCell/ExpandableCell'

const ExpandableCell = ({
  initialValue,
  rowId,
  onChange,
  onBlur,
  columnId,
  editOnOneClick,
  stylesOnEdit,
  type,
  readOnly
}) => {
  const { maxHeight, maxWidth } = stylesOnEdit
  return (
    <ExpandableCellComponent
      initialValue={initialValue}
      rowId={rowId}
      onChange={onChange}
      onBlur={onBlur}
      columnId={columnId}
      editOnOneClick={editOnOneClick}
      maxWidth={maxWidth}
      maxHeight={maxHeight}
      type={type}
      readOnly={readOnly}
    />
  )
}

export default ExpandableCell
