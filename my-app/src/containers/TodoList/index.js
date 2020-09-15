import React, { useState, useCallback, useEffect } from 'react'
import Header from './components/Header.js'
import './style.css'
import UndoList from './components/Undolist.js'
import axios from 'axios'
export const useUndoList = () => {
  const [undoList, setUndoList] = useState([])
  const initList = useCallback(() => {
    // test 他会找 __mock__ 的数据
    setTimeout(() => {
      axios.get('/undoList.json').then((res) => {
        console.log(res, 'resxqxqxq')
        setUndoList(res.data)
      })
    }, 5000)
  }, [])
  const addUndoItem = useCallback(
    (value) => {
      console.log(undoList, '121221')
      setUndoList([...undoList, { value: value, status: 'div' }])
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
  const changeStatus = useCallback(
    (indexStatus) => {
      const newList = undoList.map((item, index) => {
        if (index === indexStatus) {
          return { ...item, status: 'input' }
        } else {
          return {
            ...item,
          }
        }
      })
      setUndoList([...newList])
      console.log('changeStatus' + indexStatus, undoList, newList)
    },
    [undoList]
  )
  const handleBlur = useCallback(
    (indexBlur) => {
      const newList = undoList.map((item, index) => {
        if (index === indexBlur) {
          return { ...item, status: 'div' }
        } else {
          return {
            ...item,
          }
        }
      })
      setUndoList([...newList])
    },
    [undoList]
  )
  const valueChange = useCallback(
    (indexBlur, text) => {
      const newList = undoList.map((item, index) => {
        if (index === indexBlur) {
          return { value: text, status: 'input' }
        } else {
          return {
            ...item,
          }
        }
      })
      setUndoList([...newList])
    },
    [undoList]
  )
  return {
    undoList,
    addUndoItem,
    deleteUndoItem,
    changeStatus,
    handleBlur,
    valueChange,
    initList,
  }
}
const TodoList = () => {
  const {
    addUndoItem,
    undoList,
    deleteUndoItem,
    changeStatus,
    handleBlur,
    valueChange,
    initList,
  } = useUndoList()
  useEffect(() => {
    initList()
  }, [initList])

  return (
    <div>
      <Header addUndoItem={addUndoItem} />
      <UndoList
        list={undoList}
        data-test="UndoList"
        deleteItem={deleteUndoItem}
        changeStatus={changeStatus}
        handleBlur={handleBlur}
        valueChange={valueChange}
      />
      {/* {undoList.map((item, index) => {
        return <div key={index}>{item}</div>
      })} */}
    </div>
  )
}

export default TodoList
