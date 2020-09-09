import React, { useState } from 'react'
const Header = (props) => {
  const [currentValue, setValue] = useState('')
  const handleKeyUp = (e) => {
    if (e.keyCode === 13 && currentValue) {
      props.addUndoItem(currentValue) // 父组件 方法调用
      setValue('')
    }
  }
  return (
    <div>
      <input
        value={currentValue}
        data-test="input"
        onChange={(v) => {
          setValue(v.target.value)
        }}
        onKeyUp={(e) => handleKeyUp(e)}
      />
    </div>
  )
}
export default Header
