import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import action from '../../modules/todos/actions';

// Material UI
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default () => {
  const classes = useStyles();
  const [task, setTask] = useState('');
  const dispatch = useDispatch();

  const handleOnChange = (event) => setTask(event.target.value)
  const handleOnSubmit = (event) => {
    event.preventDefault();

    if (task) {
      dispatch({
        type: action.ADD_TODO,
        id: uuid(),
        task: task
      });
      setTask('');
    }
  }

  return (
    <form className={classes.root} noValidate autoComplete="off" onSubmit={handleOnSubmit}>
      <TextField id="standard-basic" label="Task" onChange={handleOnChange} value={task} />
      <Button variant="contained" color="primary" type="submit"> Add Todo</Button>
    </form>
  )
}
