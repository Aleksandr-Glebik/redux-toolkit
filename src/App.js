import './App.css';
import { useState, useEffect } from 'react';

import TodoList from './component/TodoList';
import InputField from './component/InputField';

import {useDispatch} from 'react-redux'
import {addTodo, fetchTodos} from './store/todoSlice'

function App() {
  const [text, setText] = useState('')
  const dispatch = useDispatch()

  const addTask = () => {
    dispatch(addTodo({text}))
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
      <TodoList />
    </div>
  );
}

export default App;
