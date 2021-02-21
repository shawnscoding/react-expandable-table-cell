# react-expandable-table-cell

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/react-expandable-table-cell.svg)](https://www.npmjs.com/package/react-expandable-table-cell) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-expandable-table-cell
```

## Usage

```jsx
import React from 'react'
import styles from './styles.module.css'
import './index.css'
import ExpandableCell from 'react-expandable-table-cell'
import 'react-expandable-table-cell/dist/index.css'

const columns = [
  { label: 'Name', accessor: 'name' },
  { label: 'Email', accessor: 'email' },
  { label: 'Department', accessor: 'department' },
  { label: 'Job Title', accessor: 'jobTitle' },
  { label: 'Address', accessor: 'address' },
  { label: 'Age', accessor: 'age', type: 'number' }
  // if default type is 'text'
]

const myData = [
  {
    name: 'Shawn',
    email: 'test11@test.com',
    department: 'Web Developerment',
    age: 25,
    jobTitle: 'Full-stack developer',
    address: 'ABC street, Some City in the USA',
    id: '1'
  },
  {
    name: 'Josh',
    email: 'test12@test.com',
    department: 'Web Developerment',
    age: 25,
    jobTitle: 'Front-end developer',
    address: 'ABC street, Some City in the UK',
    id: '2'
  },
  {
    name: 'Michelle',
    email: 'test13@test.com',
    department: 'Web Developerment',
    age: 25,
    jobTitle: 'Back-end developer',
    address: 'ABC street, Some City in South Korea',
    id: '3'
  }
]

const Table = () => {
  const [data, setData] = React.useState(myData)
  const onChange = (args) => {
    // this is optional, expandable table cell internally updates the value when value change
  }

  const onBlur = (args) => {
    const { columnId, rowId, value, resetValue } = args
    console.log(columnId, rowId, value)
    const validationFailed = false
    // 1. you can reset to previous value, if your validation fails.
    if (validationFailed) return resetValue()

    // 2. otherwise, api call...
    // 3. update state...
    setData((prevState) => {
      return prevState.map((row) =>
        row.id === rowId ? { ...row, [columnId]: value } : { ...row }
      )
    })
    // onblur
  }

  return (
    <div className={styles.global}>
      <table role='table'>
        <thead>
          <tr role='row'>
            {columns.map((column) => (
              <th role='columnheader' key={column.accessor}>
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr role='row' key={row.id}>
              {columns.map((column) => {
                let initialValue = row[column.accessor]
                return (
                  <React.Fragment key={column.accessor}>
                    <ExpandableCell
                      rowId={row.id}
                      columnId={column.accessor}
                      initialValue={initialValue}
                      onBlur={onBlur}
                      editOnOneClick={false}
                      stylesOnEdit={{ maxWidth: 400 }}
                      type={column.type}
                    />
                  </React.Fragment>
                )
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table
```

## License

MIT © [shawnscoding](https://github.com/shawnscoding)
