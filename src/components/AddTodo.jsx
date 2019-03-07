import React, { useState, useEffect, useContext } from 'react';
import TodosContext from '../context';

const AddTodo = () => {
  const [todoText, setTodoText] = useState('');
  const {
    state: { currentlyEditing },
    dispatch
  } = useContext(TodosContext);

  useEffect(() => {
    if (currentlyEditing.text) {
      setTodoText(currentlyEditing.text);
    } else {
      setTodoText('');
    }
  }, [currentlyEditing]);

  const handleSubmit = e => {
    e.preventDefault();
    if (currentlyEditing.text) {
      dispatch({ type: 'UPDATE_TODO', text: todoText });
    } else {
      dispatch({ type: 'ADD_TODO', text: todoText });
    }
    setTodoText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={e => setTodoText(e.target.value)}
        value={todoText}
        placeholder="Add todo..."
      />
      <button>
        <img src="https://icon.now.sh/add/eeeeee" alt="Edit" />
      </button>
    </form>
  );
};

export default AddTodo;
