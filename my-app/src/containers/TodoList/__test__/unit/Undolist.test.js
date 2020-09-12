import React from 'react'
// mount集成测试 全渲染；  shallow 单元测试 当前组件渲染
import UndoList from '../../components/Undolist'
import { findTestWrapper } from '../../../../util/testUtils.js'
import { shallow, mount } from 'enzyme'

describe('Undolist组件', () => {
  it(' Header组件包括 一个input', () => {
    const wrapper = shallow(<UndoList list={[]} />)
    const w = findTestWrapper(wrapper, 'count')
    const listItems = findTestWrapper(wrapper, 'list-item')
    expect(w.text()).toEqual('0')
    expect(listItems.length).toEqual(0)
  })

  it(' 未完成列表当数据有内容时 count 数目显示数据长度 列表不为空', () => {
    const listData = [
      { value: 'TDD', status: 'div' },
      { value: 'danyuanceshi', status: 'div' },
    ]
    const wrapper = shallow(<UndoList list={listData} />)
    const w = findTestWrapper(wrapper, 'count')
    const listItems = findTestWrapper(wrapper, 'list-item')
    expect(w.text()).toEqual('2')
    expect(listItems.length).toEqual(2)
  })
  it(' 未完成列表当数据有内容时 count 数目显示数据长度 列表不为空,删除 会调用删除方法', () => {
    const listData = [
      { value: 'TDD', status: 'div' },
      { value: 'danyuanceshi', status: 'div' },
    ]
    const fn = jest.fn()
    const wrapper = shallow(<UndoList deleteItem={fn} list={listData} />)
    const deleteItems = findTestWrapper(wrapper, 'delete-item')
    deleteItems.at(1).simulate('click', {
      stopPropagation: () => {},
    })
    expect(fn).toHaveBeenLastCalledWith(1)
  })
  // mount
  it(' 某一项点击时 触发 onchangeStatus', () => {
    const listData = [
      { value: 'TDD', status: 'div' },
      { value: 'danyuanceshi', status: 'div' },
    ]
    const fn = jest.fn()
    const index = 1
    const wrapper = shallow(<UndoList changeStatus={fn} list={listData} />)
    const deleteItems = findTestWrapper(wrapper, 'list-item')
    deleteItems.at(index).simulate('click')
    expect(fn).toHaveBeenLastCalledWith(index)
  })
  // mount
  it(' 某一项点击时 input 触发 onchange,展示输入框', () => {
    const listData = [
      { value: 'TDD', status: 'input' },
      { value: 'danyuanceshi', status: 'div' },
    ]
    const wrapper = shallow(<UndoList list={listData} />)
    const inputItems = findTestWrapper(wrapper, 'input')
    expect(inputItems.length).toBe(1)
  })

  it(' 某一项input失去焦点时，触发handleBlur方法 ', () => {
    const listData = [
      { value: 'TDD', status: 'input' },
      { value: 'danyuanceshi', status: 'div' },
    ]
    const fn = jest.fn()
    const index = 1
    const wrapper = shallow(<UndoList list={listData} handleBlur={fn} />)
    const inputItems = findTestWrapper(wrapper, 'input')
    inputItems.simulate('blur')
    expect(fn).toHaveBeenLastCalledWith(0)
  })
  it(' 某一项input onchange时，触发valueChange方法 ', () => {
    const listData = [
      { value: 'TDD', status: 'input' },
      { value: 'danyuanceshi', status: 'div' },
    ]
    const fn = jest.fn()
    const index = 1
    const wrapper = shallow(<UndoList list={listData} valueChange={fn} />)
    const inputItems = findTestWrapper(wrapper, 'input')
    inputItems.simulate('change', {
      target: { value: '学习' },
    })
    expect(fn).toHaveBeenLastCalledWith(0, '学习')
  })
})
