import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
// mount集成测试 全渲染；  shallow 单元测试 当前组件渲染
import TodoList, { useUndoList } from '../../index.js'
import { renderHook, act } from '@testing-library/react-hooks'
import Enzyme, { shallow, mount } from 'enzyme'
Enzyme.configure({
  adapter: new Adapter(),
})
it(' TodoList组件包括 一个UndoList', () => {
  const { result } = renderHook(() => useUndoList())
  expect(result.current.undoList).toEqual([])

  //expect(w.).toBe(1)
})

// it(' TodoList组件包括  增加UndoList内容的方法', () => {
//   const { result } = renderHook(() => useUndoList())
//   const wrapper = shallow(<TodoList />)
//   const Header = wrapper.find('Header')
//   console.log(Header.prop('addUndoItem'), result.current.addUndoItem)
//   //组件的实例方法
//   expect(Header.prop('addUndoItem')).toEqual(result.current.addUndoItem)
//   //expect(w.).toBe(1)
// })

it(' 当header 回车时,  UndoList新增内容', () => {
  //解耦
  const wrapper = shallow(<TodoList />)

  const { result } = renderHook(() => useUndoList())
  act(() => {
    result.current.addUndoItem('学习几把毛')
  })
  expect(result.current.undoList.length).toBe(1)
})
