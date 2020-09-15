import React from 'react'
// mount集成测试 全渲染；  shallow 单元测试 当前组件渲染
import TodoList, { useUndoList } from '../../index.js'
import { renderHook, act } from '@testing-library/react-hooks'
import { shallow, mount } from 'enzyme'
import { findTestWrapper } from '../../../../util/testUtils.js'
import { Provider } from 'react-redux'
import store from '../../../../store/createStore.js'
beforeEach(() => {
  jest.useFakeTimers()
})
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
it(`
  1.用户打开页面
  2.返回接口数据 5秒后 返回数据
`, (done) => {
  const wrapper = mount(
    <Provider store={store}>
      <TodoList />
    </Provider>
  )
  jest.runAllTimers() //加快时间
  expect(setTimeout).toHaveBeenCalledTimes(1)
  process.nextTick(() => {
    // 类似于settimeout
    wrapper.update()
    console.log(wrapper.debug()) //

    const listE = findTestWrapper(wrapper, 'list-item')
    expect(listE.length).toBe(1)
    done()
  })
})
