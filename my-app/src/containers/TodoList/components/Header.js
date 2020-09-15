import React, { useState } from 'react'
import { connect } from 'react-redux'
import { actions } from '../store'
const Header = (props) => {
  // const [currentValue, setValue] = useState(props.value)
  const handleKeyUp = (e) => {
    if (e.keyCode === 13 && props.value) {
      props.addUndoItem(props.value) // 父组件 方法调用
      // setValue('')
      props.handleInputChange('')
    }
  }
  return (
    <div className="header">
      孙家奇的TodoList
      <input
        className="header-input"
        value={props.value}
        data-test="header-input"
        onChange={(v) => {
          props.handleInputChange(v.target.value)
        }}
        onKeyUp={(e) => handleKeyUp(e)}
      />
    </div>
  )
}
const mapState = (state) => {
  return {
    value: state.todo.inputValue,
  }
}
const mapDispatch = (dispatch) => ({
  handleInputChange(value) {
    dispatch(actions.changeInputValue(value))
  },
})
export default connect(mapState, mapDispatch)(Header)
