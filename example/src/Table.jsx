import React from 'react'
import styles from './styles.module.css'
import './index.css'
import ExpandableCell from 'react-expandable-table-cell'
import 'react-expandable-table-cell/dist/index.css'

// const columns = [
//   { label: 'Name', id: 'name' },
//   { label: 'Email', id: 'email' },
//   { label: 'Department', id: 'department' }
//   // { label: 'Age', id: 'age' },
//   // { label: 'Job Title', id: 'jobTitle' },
//   // { label: 'Address', id: 'address' },
//   // { label: 'hi', id: 'hi' },
//   // { label: 'i', id: 'i' },
//   // { label: 'am', id: 'am' },
//   // { label: 'shawn', id: 'shawn' },
//   // { label: 'nice', id: 'nice' },
//   // { label: 'to', id: 'to' },
//   // { label: 'meet', id: 'meet' },
//   // { label: 'you', id: 'you' }
// ]

// const myData = [
//   {
//     name: 'Shawn',
//     email: 'test11@test.com',
//     department: 'Web Developerment',
//     age: '25',
//     jobTitle: 'Full-stack developer',
//     address: 'ABC street',
//     id: '1'
//   },
//   {
//     name: 'Josh',
//     email: 'test12@test.com',
//     department: 'Web Developerment',
//     age: '25',
//     jobTitle: 'Front-end developer',
//     address: 'ABC street',
//     id: '2'
//   },
//   {
//     name: 'Michelle',
//     email: 'test13@test.com',
//     department: 'Web Developerment',
//     age: '25',
//     jobTitle: 'Back-end developer',
//     address: 'ABC street',
//     id: '3'
//   }
// ]

// const myData = [
//   {
//     name: 'Shawn',
//     email: 'test11@test.com',
//     department:
//       'Web Developerment opsdkapodsk poaskd opasdkpodask poasdk posdkpokewq ,sadkmdpo',
//     age: '25',
//     jobTitle: 'Full-stack developer',
//     address: 'ABC street',
//     hi: 'ABC street',
//     i: 'ABC street',
//     am: 'ABC street',
//     shawn: 'ABC street',
//     nice: 'ABC street',
//     to: 'ABC street',
//     meet: 'ABC street',
//     you: 'ABC street',
//     id: '1'
//   },

//   {
//     name: 'Shawn',
//     email: 'test11@test.com',
//     department:
//       'Web Developerment opsdkapodsk poaskd opasdkpodask poasdk posdkpokewq ,sadkmdpo',
//     age: '25',
//     jobTitle: 'Full-stack developer',
//     address: 'ABC street',
//     hi: 'ABC street',
//     i: 'ABC street',
//     am: 'ABC street',
//     shawn: 'ABC street',
//     nice: 'ABC street',
//     to: 'ABC street',
//     meet: 'ABC street',
//     you: 'ABC street',
//     id: '2'
//   },

//   {
//     name: 'Shawn',
//     email: 'test11@test.com',
//     department:
//       'Web Developerment opsdkapodsk poaskd opasdkpodask poasdk posdkpokewq ,sadkmdpo',
//     age: '25',
//     jobTitle: 'Full-stack developer',
//     address: 'ABC street',
//     hi: 'ABC street',
//     i: 'ABC street',
//     am: 'ABC street',
//     shawn: 'ABC street',
//     nice: 'ABC street',
//     to: 'ABC street',
//     meet: 'ABC street',
//     you: 'ABC street',
//     id: '3'
//   }
// ]

const columns = [
  { label: 'Name', accessor: 'name' },
  { label: 'Email', accessor: 'email' },
  { label: 'Department', accessor: 'department' },
  { label: 'Job Title', accessor: 'jobTitle' },
  { label: 'Address', accessor: 'address' }
]

const myData = [
  {
    name: 'Shawn',
    email: 'test11@test.com',
    department: 'Web Developerment',
    age: '25',
    jobTitle: 'Full-stack developer',
    address: 'ABC street, Some City in the USA',
    id: '1'
  },
  {
    name: 'Josh',
    email: 'test12@test.com',
    department: 'Web Developerment',
    age: '25',
    jobTitle: 'Front-end developer',
    address: 'ABC street, Some City in the UK',
    id: '2'
  },
  {
    name: 'Michelle',
    email: 'test13@test.com',
    department: 'Web Developerment',
    age: '25',
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
    // 1. validate, if fails, reset to previous value
    if (validationFailed) return resetValue()

    // 2. api call...
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
                    {/* key shouldn't be props to ExpandableCell Component  */}
                    <ExpandableCell
                      rowId={row.id}
                      columnId={column.accessor}
                      initialValue={initialValue}
                      onBlur={onBlur}
                      onChange={onChange}
                      stylesOnEdit={{ maxWidth: 400 }}
                      // expandOnOneClick={true}
                      type={column.type}
                      readOnly={column.readOnly}
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
