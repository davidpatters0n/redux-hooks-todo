import { createSelector, createStructuredSelector } from 'reselect';

const allTodos = (state) => state.todos;
const filters = (state) => state.filters;

const filteredTodos = createSelector(
  allTodos,
  filters,
  (todos, filters) => {
    return todos.filter((t) => {
      if (filters === 'ALL') return true;
      if (t.completed && filters === 'COMPLETED') return true;
      if (!t.completed && filters === 'UNCOMPLETED') return true;
      return false;
    });
  }
);

export default createStructuredSelector({
  allTodos,
  filteredTodos
})
