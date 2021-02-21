import React from 'react'
import PropTypes from 'prop-types'
import ExpandableCellComponent from './components/expandableCell/ExpandableCell'

const ExpandableCell = ({
  initialValue,
  rowId,
  onChange,
  onBlur,
  columnId,
  expandOnOneClick,
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
      expandOnOneClick={expandOnOneClick}
      maxWidth={maxWidth}
      maxHeight={maxHeight}
      type={type}
      readOnly={readOnly}
    />
  )
}

ExpandableCell.defaultProps = {
  onBlur: undefined,
  onChange: undefined,
  expandOnOneClick: false,
  type: 'text',
  readOnly: false,
  stylesOnEdit: { maxWidth: null, maxHeight: null }
}

ExpandableCell.propTypes = {
  initialValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  rowId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  columnId: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  type: PropTypes.oneOf(['text', 'number']).isRequired,
  expandOnOneClick: PropTypes.bool,
  readOnly: PropTypes.bool,
  stylesOnEdit: PropTypes.object
}

export default ExpandableCell
