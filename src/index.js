import React from 'react'
import ExpandableCellComponent from './components/expandableCell/ExpandableCell'

const ExpandableCell = ({
  initialValue,
  rowId,
  onChange,
  onBlur,
  columnId,
  editOnOneClick
}) => {
  return (
    <ExpandableCellComponent
      initialValue={initialValue}
      rowId={rowId}
      onChange={onChange}
      onBlur={onBlur}
      columnId={columnId}
      editOnOneClick={editOnOneClick}
    />
  )
}

export default ExpandableCell
