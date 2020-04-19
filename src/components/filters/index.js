import React from 'react';
import { useDispatch } from 'react-redux';
import actions from '../../modules/filters/actions';

// Material UI
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

export default () => {
  const dispatch = useDispatch();

  const handleShowAll = () => {
    dispatch({type: actions.SHOW_ALL})
  }

  const handleShowCompleted = () => {
    dispatch({ type: actions.SHOW_COMPLETED });
  }

  const handleShowUncompleted = () => {
    dispatch({ type: actions.SHOW_UNCOMPLETED });
  }

  return (
    <React.Fragment>
      <ButtonGroup size="large" color="primary">
        <Button onClick={handleShowAll}>Show All</Button>
        <Button onClick={handleShowCompleted}>Show Completed</Button>
        <Button onClick={handleShowUncompleted}>Show Uncompleted</Button>
      </ButtonGroup>
    </React.Fragment>
  );
}
