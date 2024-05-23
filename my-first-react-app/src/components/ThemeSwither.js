import React from 'react';
import React, {useState} from 'react';

const TodoList = () => {
    const [todos, settodos] = useState('');
    const [newTodo, setNewTodo] = useState('');

    const addTodo = (event) => {
        event.preventDefault();
        if (newTodo === '') return;
        setTodos([...todos, newTodo]);
        setNewTodo('');
    }

    const handleInputChange = (event) => {
        setNewTodo(event.target.value);
    }

    return (
        <div>
            <form onSubmit={addTodo}>
                <input type="text" value={newTodo} onChange={(handleInputChange)} />
                <button type="submit">Add Todo</button>
            </form>
            <ul>
                {todos.map((todo, index) => {
                    return <li key={index}>{todo}</li>
                })}
            </ul>
        </div>
    )    
    };

    export default TodoList;