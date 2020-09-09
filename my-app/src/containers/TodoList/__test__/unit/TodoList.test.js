import React from 'react'
// mount集成测试 全渲染；  shallow 单元测试 当前组件渲染
import TodoList, { useUndoList } from '../../index.js'
import { renderHook, act } from '@testing-library/react-hooks'
import { shallow, mount } from 'enzyme'
import { findTestWrapper } from '../../../../util/testUtils.js'

it(' TodoList组件包括 一个UndoList', () => {
  const { result } = renderHook(() => useUndoList())
  expect(result.current.undoList).toEqual([])

  //expect(w.).toBe(1)
})
//单元测试
it(' TodoList组件包括  增加UndoList内容的方法', () => {
  const wrapper = shallow(<TodoList />)
  const Header = wrapper.find('Header')
  //组件的实例方法
  expect(Header.prop('addUndoItem')).toBeTruthy()
  //expect(w.).toBe(1)
})

it(' 当header 回车时,  UndoList新增内容', () => {
  //解耦
  const wrapper = shallow(<TodoList />)

  const { result } = renderHook(() => useUndoList())
  act(() => {
    result.current.addUndoItem('学习几把毛')
  })
  expect(result.current.undoList.length).toBe(1)
})

it(' TodoList 应该给 未完成列表 传递 list数据，以及daleteItem 方法', () => {
  const wrapper = shallow(<TodoList />)
  const w = findTestWrapper(wrapper, 'UndoList')
  expect(w.prop('list')).toBeTruthy()
  expect(w.prop('deleteItem')).toBeTruthy()
})
it(' deleteItem 方法,删除内容', () => {
  const wrapper = shallow(<TodoList />)

  const { result } = renderHook(() => useUndoList())
  act(() => {
    result.current.addUndoItem('学习几把毛')
  })
  act(() => {
    result.current.addUndoItem('学习几把毛2')
  })
  act(() => {
    result.current.deleteUndoItem(0)
  })
  expect(result.current.undoList).toEqual(['学习几把毛2'])
})
