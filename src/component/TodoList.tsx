import React from 'react'
import TodoItem from "./TodoItem.tsx"
import { useAppSelector } from "../hook.ts"

const TodoList: React.FC = () => {
    const todos = useAppSelector(state => state.todos.list)

    return (
        <ul>
            {todos.map(todo => (
                <TodoItem key={todo.id}
                          {...todo}
            />))}
        </ul>
    )
}

export default TodoList
