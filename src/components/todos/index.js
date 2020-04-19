import React from 'react';
import { useSelector } from 'react-redux';
import myTodosGetters from '../../modules/todos/getters';

// Components
import TodoListItem from './list-item';

// Material UI
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));


export default () => {
  // Material Set Up:

  const classes = useStyles();


  const todos = useSelector(myTodosGetters);
  return (
    <List dense className={classes.root}>
      {todos.filteredTodos.map((todo) => {
        return (
          <ListItem key={todo.id} button>
            <TodoListItem key={todo.id} todo={todo} />
          </ListItem>
        );
      })}
    </List>
  );
}
