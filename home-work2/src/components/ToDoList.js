import React, {useState} from 'react';

function ToDoList() {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');
    
    const handleChange = (event) => {
        setNewTodo(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (newTodo === '') return;
        setTodos([...todos, newTodo]);
        setNewTodo('');
    }

    const handleDelete = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
        setNewTodo('');
    }

    return ( 
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={newTodo} onChange={handleChange} />
                <button type="submit">Add</button>
                <button onClick={() => handleDelete(todos.length - 1)}>Delete</button>
                <button onClick={() => setTodos([])}>Clear</button>
                <ul>
                    {todos.map((todo, index) => {
                        return <li key={index}>{todo}</li>
                    })}
                </ul>
            </form>
        </div>
    );
}

export default ToDoList;