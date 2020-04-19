import actions from './actions';

export default (state = 'ALL', action) => {
  switch (action.type) {
    case actions.SHOW_ALL:
      return 'ALL'
    case actions.SHOW_COMPLETED:
      return 'COMPLETED'
    case actions.SHOW_UNCOMPLETED:
      return 'UNCOMPLETED'
    default:
      return state
  }
}
