import React from 'react';
import { useState, useEffect, useRef } from 'react';

function Form(props) {
    const [input, setInput] = useState('');

    const inputRef = useRef(null);

    useEffect(() => inputRef.current.focus());

    const handleChange = (e) => {
        setInput(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input,
        });
        setInput('');
    };

    return (
        <form className="form-todo" onSubmit={handleSubmit}>
            <input
                className="input-todo"
                type="text"
                placeholder="Add a todo"
                onChange={handleChange}
                value={input}
                name="text"
                ref={inputRef}
            ></input>
            <button className="todo-button">Add</button>
        </form>
    );
}

export default Form;
