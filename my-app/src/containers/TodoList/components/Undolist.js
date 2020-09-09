import React, { useState } from 'react'
const UndoList = (props) => {
  const { list, deleteItem } = props
  return (
    <div>
      UndoList
      <div data-test="count">{list.length}</div>
      <ul>
        {list.map((item, index) => {
          return (
            <li data-test="list-item" key={index}>
              {item}
              <span
                data-test="delete-item"
                onClick={() => {
                  deleteItem(index)
                }}
              >
                -
              </span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
export default UndoList
