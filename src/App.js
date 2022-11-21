import './App.css';
import { useState, useEffect } from 'react';

import TodoList from './component/TodoList';
import InputField from './component/InputField';

import {useDispatch, useSelector} from 'react-redux'
import {addTodo, fetchTodos} from './store/todoSlice'

function App() {
  const [text, setText] = useState('')
  const dispatch = useDispatch()
  const {status, error} = useSelector(state => state.todos)

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

      {status === 'loading' && <h3>Loading...</h3>}
      {error && <h3>An error occured: {error}</h3>}
      <TodoList />
    </div>
  );
}

export default App;
