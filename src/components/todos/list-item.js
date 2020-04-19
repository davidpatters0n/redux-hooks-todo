import React from 'react';
import { useDispatch } from 'react-redux';
import action from '../../modules/todos/actions';

import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Checkbox from '@material-ui/core/Checkbox';

export default ({ todo }) => {
  const dispatch = useDispatch();

  const handleOnChange = () => {
    const actionType = todo.completed ? action.MARK_UNCOMPLETED : action.MARK_COMPLETED;
    dispatch({ type: actionType, id: todo.id})
  }
  const labelId = `checkbox-list-secondary-label-${todo.id}`;
  return (
    <React.Fragment>
      <ListItemText id={labelId} primary={todo.task} />
      <ListItemSecondaryAction>
        <Checkbox
          edge="end"
          onChange={handleOnChange}
          checked={todo.completed}
          inputProps={{ 'aria-labelledby': labelId }}
        />
      </ListItemSecondaryAction>

    </React.Fragment>
  );
}
