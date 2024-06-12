import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import store from './store/store';

function App() {
  return (
    <Provider store={store}>
      <div>
        <TaskInput />
        <TaskList />
      </div>
    </Provider>
  );
}

export default App;
