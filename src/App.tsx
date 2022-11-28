import React, { useState, useEffect } from 'react';
import './App.css';

import TodoList from './component/TodoList.tsx';
import InputField from './component/InputField.tsx';

import {useAppDispatch, useAppSelector} from './hook.ts'
import {addNewTodo, fetchTodos} from './store/todoSlice.ts'

function App() {
  const [text, setText] = useState('')
  const dispatch = useAppDispatch()
  const {loading, error} = useAppSelector(state => state.todos)

  const addTask = () => {
    dispatch(addNewTodo(text))
    setText('')
  }

  useEffect( () => {
    dispatch(fetchTodos())
  }, [dispatch])

  return (
    <div className="App">
      <InputField text={text}
                  setText={setText}
                  addTodo={addTask}
      />

      {loading && <h3>Loading...</h3>}
      {error && <h3>An error occured: {error}</h3>}
      <TodoList />
    </div>
  );
}

export default App;
