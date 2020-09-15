import { createStore, combineReducers } from 'redux'
import { reducer as todoReducer } from '../containers/TodoList/store'
const re = combineReducers({
  todo: todoReducer,
})
const store = createStore(
  re,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
export default store
