import actions from './actions'

const initialState = {
  id: '',
  task: '',
  completed: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.ADD_TODO:
      return state.concat({
        task: action.task,
        id: action.id,
        completed: false
      })
    case actions.MARK_COMPLETED:
      return state.map(todo => {
        if (todo.id === action.id) {
          return { ...todo, completed: true}
        }
        return todo
      });
    case actions.MARK_UNCOMPLETED:
      return state.map(todo => {
        if (todo.id === action.id) {
          return { ...todo, completed: false}
        }
        return todo
      });
    default:
      return state;
  }
}
