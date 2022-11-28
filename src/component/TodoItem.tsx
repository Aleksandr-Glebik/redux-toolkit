import React from 'react';
import { useAppDispatch } from "../hook.ts"
import { deleteTodo, toggleStatus} from "../store/todoSlice.ts"

interface TodoItemPropsType {
    id: string,
    title: string,
    completed: boolean,
}

const TodoItem: React.FC<TodoItemPropsType> = ({id, completed, title }) => {
    const dispatch = useAppDispatch()

    return (
        <li>
            <input type={'checkbox'}
                   checked={completed}
                   onChange={() => dispatch(toggleStatus(id))
            }/>
            <span>{title}</span>
            <span className='delete'
                  onClick={() => dispatch(deleteTodo(id))}
            >
              &times;
            </span>
        </li>
    )
}

export default TodoItem