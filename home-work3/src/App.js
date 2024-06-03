import './App.css';
import TemperatureConverter from './components/TemperatureConverter';
import TodoList from './components/TodoList';
import TodoList_fix from './components/TodoList_fix';

function App() {
  return (
    <div className="center">
      {/* <TemperatureConverter /> */}
      <TodoList_fix />
    </div>
  );
}

export default App;
