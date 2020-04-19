import rootReducer from './reducers';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { v4 as uuid } from 'uuid';

const initialState = {
  todos: [
    {
      id: uuid(),
      task: 'Learn React',
      completed: true
    },
    {
      id: uuid(),
      task: 'Learn Ruby',
      completed: true
    },
    {
      id: uuid(),
      task: 'Learn GraphQL',
      completed: true
    },
    {
      id: uuid(),
      task: 'Learn FireBase',
      completed: false
    },
  ],
  filters: 'ALL'
}

export default () => {
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(logger)
  );
  return store;
}

