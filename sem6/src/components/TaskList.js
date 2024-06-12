import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeTask } from '../actions/actions';


const TaskList = () => {
    const tasks = useSelector(state=>state.tasks);
    const dispath = useDispatch();
    return (
        <ul>
            {tasks.map((task) => (
                <li key={task.id}>
                    <span>{task.description}</span>
                    <button onClick={() => dispath(removeTask(task.id))}>Remove</button>
                </li>
            ))}
        </ul>
    );
};

export default TaskList;