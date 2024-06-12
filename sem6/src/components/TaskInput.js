import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../actions/actions';

const TaskInput = () => {
    const [description, setDescription] = useState('');
    const dispath = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!description.trim()) return;
        dispath(addTask(description));
        setDescription('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={description} onChange={(event) => setDescription(event.target.value)} />
            <button type="submit">Add Task</button>
        </form>
    );
};

export default TaskInput;