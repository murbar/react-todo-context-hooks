import React, { useContext, useReducer } from 'react';
import TodosContext from './context';
import todosReducer from './reducer';
import TodoList from './components/TodoList';
import './App.css';
import AddTodo from './components/AddTodo';

const App = () => {
  const initialState = useContext(TodosContext);
  const [state, dispatch] = useReducer(todosReducer, initialState);

  const title = state.todos.length > 0 ? `${state.todos.length} to-dos` : 'Nothing to-do';

  return (
    <TodosContext.Provider value={{ state, dispatch }}>
      <main>
        <h1>{title}</h1>
        <AddTodo />
        <TodoList />
      </main>
    </TodosContext.Provider>
  );
};

export default App;
