import React, { useState } from 'react'
const UndoList = (props) => {
  const { list, deleteItem, changeStatus, handleBlur, valueChange } = props
  return (
    <div className="undo-list">
      UndoList
      <div data-test="count" className="undo-list-count">
        {list.length}
      </div>
      <ul>
        {list.map((item, index) => {
          return (
            <li
              className="listli"
              data-test="list-item"
              key={index}
              onClick={() => {
                changeStatus(index)
              }}
            >
              <div>
                {item.status === 'div' ? (
                  item.value
                ) : (
                  <input
                    data-test="input"
                    value={item.value}
                    onChange={(e) => valueChange(index, e.target.value)}
                    onBlur={() => handleBlur(index)}
                  />
                )}
              </div>
              <span
                className="delete"
                data-test="delete-item"
                onClick={(e) => {
                  e.stopPropagation()
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
