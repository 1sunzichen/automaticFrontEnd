import React from 'react'
// mount集成测试 全渲染；  shallow 单元测试 当前组件渲染
import TodoList, { useUndoList } from '../../index.js'
import { renderHook, act } from '@testing-library/react-hooks'
import { shallow, mount } from 'enzyme'
import { findTestWrapper } from '../../../../util/testUtils.js'
import { Provider } from 'react-redux'
import store from '../../../../store/createStore.js'
it(`
  1.Header 输入框输入内容
  2.回车
  3.列表中 展示用户 输入的内容项
`, () => {
  const wrapper = mount(
    <Provider store={store}>
      <TodoList />
    </Provider>
  )
  const iE = findTestWrapper(wrapper, 'header-input')
  const content = '1111'
  iE.simulate('change', {
    target: { value: content },
  })
  iE.simulate('keyUp', {
    keyCode: 13,
  })
  const listE = findTestWrapper(wrapper, 'list-item')
  expect(listE.length).toBe(1)
  expect(listE.text()).toContain(content)
})
