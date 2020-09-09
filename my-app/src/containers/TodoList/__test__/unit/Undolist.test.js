import React from 'react'
// mount集成测试 全渲染；  shallow 单元测试 当前组件渲染
import UndoList from '../../components/Undolist'
import { findTestWrapper } from '../../../../util/testUtils.js'
import { shallow, mount } from 'enzyme'

it(' Header组件包括 一个input', () => {
  const wrapper = shallow(<UndoList list={[]} />)
  const w = findTestWrapper(wrapper, 'count')
  const listItems = findTestWrapper(wrapper, 'list-item')
  expect(w.text()).toEqual('0')
  expect(listItems.length).toEqual(0)
})

it(' 未完成列表当数据有内容时 count 数目显示数据长度 列表不为空', () => {
  const listData = ['TDD', 'danyuanceshi']
  const wrapper = shallow(<UndoList list={listData} />)
  const w = findTestWrapper(wrapper, 'count')
  const listItems = findTestWrapper(wrapper, 'list-item')
  expect(w.text()).toEqual('2')
  expect(listItems.length).toEqual(2)
})
it(' 未完成列表当数据有内容时 count 数目显示数据长度 列表不为空,删除 会调用删除方法', () => {
  const listData = ['TDD', 'danyuanceshi']
  const fn = jest.fn()
  const wrapper = shallow(<UndoList deleteItem={fn} list={listData} />)
  const deleteItems = findTestWrapper(wrapper, 'delete-item')
  deleteItems.at(1).simulate('click')
  expect(fn).toHaveBeenLastCalledWith(1)
})
