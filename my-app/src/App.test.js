import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import App from './App'
// mount集成测试 全渲染；  shallow 单元测试 当前组件渲染
import Enzyme, { mount } from 'enzyme'
Enzyme.configure({
  adapter: new Adapter(),
})

it('render without crashing', () => {
  const wrapper = mount(<App />)
  const w = wrapper.find('[data-test="container"]')
  //测试代码 解耦
  expect(w).toExist()
  // console.log(wrapper.debug())
  expect(w).toHaveProp('title', 'dell lee')
})
