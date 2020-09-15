const initState = {
  inputValue: '',
}
export default (state = initState, action) => {
  console.log(action, 'action')
  switch (action.type) {
    case 'CHAHGE_VALUE':
      return { inputValue: action.value }
    default:
      return state
  }
}
