import React from 'react';
import Todos from './components/todos';
import Filters from './components/filters';
import AddTodo from './components/add-todo';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Filters />
        <Todos />
        <AddTodo />
      </Container>
    </React.Fragment>
  );
}

export default App;
