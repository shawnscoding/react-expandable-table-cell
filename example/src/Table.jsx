import React from 'react'
import styles from './styles.module.css'
import './index.css'
import { ExpandableCell } from 'react-expandable-table-cell'
import 'react-expandable-table-cell/dist/index.css'

const columns = [
  { label: 'Name', id: 'name' },
  { label: 'Email', id: 'email' },
  { label: 'Department', id: 'department' },
  { label: 'Age', id: 'age' },
  { label: 'Job Title', id: 'jobTitle' },
  { label: 'Address', id: 'address' },
  { label: 'hi', id: 'hi' },
  { label: 'i', id: 'i' },
  { label: 'am', id: 'am' },
  { label: 'shawn', id: 'shawn' },
  { label: 'nice', id: 'nice' },
  { label: 'to', id: 'to' },
  { label: 'meet', id: 'meet' },
  { label: 'you', id: 'you' }
]

// const data = [
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

const myData = [
  {
    name: 'Shawn',
    email: 'test11@test.com',
    department:
      'Web Developerment opsdkapodsk poaskd opasdkpodask poasdk posdkpokewq ,sadkmdpo',
    age: '25',
    jobTitle: 'Full-stack developer',
    address: 'ABC street',
    hi: 'ABC street',
    i: 'ABC street',
    am: 'ABC street',
    shawn: 'ABC street',
    nice: 'ABC street',
    to: 'ABC street',
    meet: 'ABC street',
    you: 'ABC street',
    id: '1'
  },

  {
    name: 'Shawn',
    email: 'test11@test.com',
    department:
      'Web Developerment opsdkapodsk poaskd opasdkpodask poasdk posdkpokewq ,sadkmdpo',
    age: '25',
    jobTitle: 'Full-stack developer',
    address: 'ABC street',
    hi: 'ABC street',
    i: 'ABC street',
    am: 'ABC street',
    shawn: 'ABC street',
    nice: 'ABC street',
    to: 'ABC street',
    meet: 'ABC street',
    you: 'ABC street',
    id: '2'
  },

  {
    name: 'Shawn',
    email: 'test11@test.com',
    department:
      'Web Developerment opsdkapodsk poaskd opasdkpodask poasdk posdkpokewq ,sadkmdpo',
    age: '25',
    jobTitle: 'Full-stack developer',
    address: 'ABC street',
    hi: 'ABC street',
    i: 'ABC street',
    am: 'ABC street',
    shawn: 'ABC street',
    nice: 'ABC street',
    to: 'ABC street',
    meet: 'ABC street',
    you: 'ABC street',
    id: '3'
  }
]

const Table = () => {
  const [data, setData] = React.useState(myData)
  const updateMyData = (columnId, rowId, value) => {
    console.log(columnId, rowId, value)
    setData((prevState) => {
      return prevState.map((row) =>
        row.id === rowId ? { ...row, [columnId]: value } : { ...row }
      )
    })
  }

  return (
    <div className={styles.global}>
      <span>
        <table role='table'>
          <thead>
            <tr role='row'>
              {columns.map((column) => (
                <th role='columnheader' key={column.id}>
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr role='row' key={row.id}>
                {columns.map((column) => {
                  let initialValue = row[column.id]
                  return (
                    <React.Fragment key={column.id}>
                      <ExpandableCell
                        rowId={row.id}
                        columnId={column.id}
                        initialValue={initialValue}
                        updateMyData={updateMyData}
                      />
                    </React.Fragment>
                  )
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </span>
      <span>ddddddddddd</span>
      <span>ddddddddddd</span>
      <span>ddddddddddd</span>
      <span>ddddddddddd</span>
      <span>ddddddddddd</span>
      <span>ddddddddddd</span>
      <span>ddddddddddd</span>
      <span>ddddddddddd</span>
      <span>ddddddddddd</span>
      <span>ddddddddddd</span>
      <span>ddddddddddd</span>
      <span>ddddddddddd</span>
      <span>ddddddddddd</span>
      <span>ddddddddddd</span>
      <span>ddddddddddd</span>
      <span>ddddddddddd</span>
      <span>ddddddddddd</span>
      <span>ddddddddddd</span>
      <span>ddddddddddd</span>
      <span>ddddddddddd</span>
      <span>ddddddddddd</span>
      <span>ddddddddddd</span>
      <span>ddddddddddd</span>
      <span>ddddddddddd</span>
      <span>ddddddddddd</span>
      <span>ddddddddddd</span>
      <span>ddddddddddd</span>
      <span>ddddddddddd</span>
      <span>ddddddddddd</span>
      <span>ddddddddddd</span>
      <span>ddddddddddd</span>
      <span>ddddddddddd</span>
    </div>
  )
}

export default Table
