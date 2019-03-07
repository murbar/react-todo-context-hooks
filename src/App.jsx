import React, { useContext, useReducer } from 'react';
import TodosContext from './context';
import todosReducer from './reducer';
import TodoList from './components/TodoList';

const App = () => {
  const initialState = useContext(TodosContext);
  const [state, dispatch] = useReducer(todosReducer, initialState);

  return (
    <TodosContext.Provider value={{ state, dispatch }}>
      <h1>Todo list</h1>
      <TodoList />
    </TodosContext.Provider>
  );
};

export default App;
