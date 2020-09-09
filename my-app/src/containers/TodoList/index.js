import React, { useState, useCallback } from 'react'
import Header from './components/Header.js'
export const useUndoList = () => {
  const [undoList, setUndoList] = useState([])

  const addUndoItem = useCallback(
    (value) => {
      console.log(undoList, '121221')
      setUndoList([...undoList, value])
    },
    [undoList]
  )

  return { undoList, addUndoItem }
}
const TodoList = () => {
  const { addUndoItem, undoList } = useUndoList()
  return (
    <div>
      <Header addUndoItem={addUndoItem} />
      {undoList.map((item, index) => {
        return <div key={index}>{item}</div>
      })}
    </div>
  )
}

export default TodoList
