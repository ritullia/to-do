import React from 'react';
import { useState } from 'react';
import Form from './Form';
import Todo from './Todo';

function TodoList() {
    const [toDo, setToDo] = useState([]); // susikuriam state'us

    // sukuriam nauja funkcija addToDo uzduoties ivedimui

    const addToDo = (todos) => {
        if (!todos.text || /^\s*$/.test(todos.text)) {
            return;
        }

        const newToDo = [todos, ...toDo];

        setToDo(newToDo);
    };

    const removeTodo = (id) => {
        const removeArr = [...toDo].filter((todo) => todo.id !== id);

        setToDo(removeArr);
    };

    const updateTodo = (todoId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return;
        }

        setToDo((prev) =>
            prev.map((item) => (item.id === todoId ? newValue : item))
        );
    };

    const completeTodo = (id) => {
        let updatedTodo = toDo.map((todos) => {
            if (todos.id === id) {
                todos.isComplete = !todos.isComplete;
            }
            return todos;
        });
        setToDo(updatedTodo);
    };

    return (
        <div>
            <h1>Plan for Today?</h1>
            <Form onSubmit={addToDo}></Form>
            <Todo
                todos={toDo}
                completeTodo={completeTodo}
                removeTodo={removeTodo}
                updateTodo={updateTodo}
            />
        </div>
    );
}

export default TodoList;
