import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
// mount集成测试 全渲染；  shallow 单元测试 当前组件渲染
import Header from '../../components/Header'

import Enzyme, { shallow, mount } from 'enzyme'
Enzyme.configure({
  adapter: new Adapter(),
})
//用快照测试 真偷懒啊
it(' Header渲染样式', () => {
  const wrapper = shallow(<Header />)

  expect(wrapper).toMatchSnapshot()
})
it(' Header组件包括 一个input', () => {
  const wrapper = shallow(<Header />)
  const w = wrapper.find('[data-test="input"]')
  expect(w.length).toBe(1)
})

it(' Header组件包括 初始化应该为空', () => {
  const wrapper = shallow(<Header />)
  const w = wrapper.find('[data-test="input"]')
  expect(w.prop('value')).toEqual('')
})

it(' Header组件 input 框内容，当用户输入时，会跟随变化', () => {
  const wrapper = mount(<Header />)
  const w = wrapper.find('[data-test="input"]')
  const i = '今天要学习 Jest'
  w.simulate('change', {
    target: {
      value: '今天要学习 Jest',
    },
  })
  //hook 用个定时器 集成测试 dom
  const n = wrapper.find('[data-test="input"]')
  expect(n.prop('value')).toEqual('今天要学习 Jest')
  // setTimeout(() => {
  //   expect(w.prop('value')).toEqual('今天要学习 Jest')
  // }, 0)
})

it('Header 组件 input输入 回车时，如果input 无内容 无操作', () => {
  const fn = jest.fn()
  const wrapper = shallow(<Header addUndoItem={fn} />)
  const inputElem = wrapper.find("[data-test='input']")
  inputElem.simulate('keyUp', {
    keyCode: 13,
  })
  expect(fn).not.toHaveBeenCalled()
})

it('Header 组件 input输入 回车时，如果input 有内容 函数被调用', () => {
  const fn = jest.fn()
  const wrapper = shallow(<Header addUndoItem={fn} />)
  const w = wrapper.find('[data-test="input"]')
  const i = '今天要学习 Jest'
  w.simulate('change', {
    target: {
      value: '今天要学习 Jest',
    },
  })
  //重新再找一次dom
  const inputElem = wrapper.find("[data-test='input']")
  // inputElem.prop('value', '学习React')
  inputElem.simulate('keyUp', {
    keyCode: 13,
  })
  expect(fn).toHaveBeenCalled()
})
it('Header 组件 input输入 回车时，如果input 有内容 函数被调用,清除', () => {
  const fn = jest.fn()
  const wrapper = shallow(<Header addUndoItem={fn} />)
  const w = wrapper.find('[data-test="input"]')
  const i = '今天要学习 Jest'
  w.simulate('change', {
    target: {
      value: '今天要学习 Jest',
    },
  })
  //重新再找一次dom
  const inputElem = wrapper.find("[data-test='input']")
  // inputElem.prop('value', '学习React')
  inputElem.simulate('keyUp', {
    keyCode: 13,
  })
  const inputElemss = wrapper.find('[data-test="input"]')
  expect(inputElemss.prop('value')).toBe('')
})
