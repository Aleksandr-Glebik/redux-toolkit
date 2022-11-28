import React from 'react'

interface InputFieldPropsType {
    text: string,
    setText: (str: string) => void,
    addTodo: () => void,
}

const InputField: React.FC<InputFieldPropsType> = ({text, setText, addTodo}) => {

    return (
        <label>
            <input value={text} onChange={e => setText(e.target.value)} />
            <button onClick={addTodo}>Add todo</button>
        </label>
    )
}

export default InputField