import React, { useState, useCallback } from 'react'
import Header from './components/Header.js'
import './style.css'
import UndoList from './components/Undolist.js'
export const useUndoList = () => {
  const [undoList, setUndoList] = useState([])

  const addUndoItem = useCallback(
    (value) => {
      console.log(undoList, '121221')
      setUndoList([...undoList, value])
    },
    [undoList]
  )
  const deleteUndoItem = useCallback(
    (xindex) => {
      console.log(undoList, '121221')
      const undoListCurrent = undoList.filter((item, index) => index !== xindex)
      setUndoList([...undoListCurrent])
    },
    [undoList]
  )
  return { undoList, addUndoItem, deleteUndoItem }
}
const TodoList = () => {
  const { addUndoItem, undoList, deleteUndoItem } = useUndoList()
  return (
    <div>
      <Header addUndoItem={addUndoItem} />
      <UndoList
        list={undoList}
        data-test="UndoList"
        deleteItem={deleteUndoItem}
      />
      {/* {undoList.map((item, index) => {
        return <div key={index}>{item}</div>
      })} */}
    </div>
  )
}

export default TodoList
