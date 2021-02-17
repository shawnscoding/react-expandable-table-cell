import React from 'react'
import ExpandableCellComponent from './components/expandableCell/ExpandableCell'
import ExpandableInputComponent from './components/expandableInput/ExpandableInput'

export const ExpandableCell = ({
  initialValue,
  rowId,
  updateMyData,
  columnId
}) => {
  return (
    <ExpandableCellComponent
      initialValue={initialValue}
      rowId={rowId}
      updateMyData={updateMyData}
      columnId={columnId}
    />
  )
}

export const ExpandableInput = ({
  initialValue,
  onBlur,
  onChange,
  name,
  id,
  readOnly
}) => {
  return (
    <ExpandableInputComponent
      readOnly={readOnly}
      initialValue={initialValue}
      name={name}
      id={id}
      onBlur={onBlur}
      onChange={onChange}
    />
  )
}
