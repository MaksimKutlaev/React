import './App.css';
import CommentList from './components/Comments';
import Counter from './components/Counter';
import TextInput from './components/TextInput';
import ToDoList from './components/ToDoList';

function App() {
  return (
    <div className="App">
      {/* <Counter />
      <TextInput />
      <ToDoList /> */}
      <CommentList />
    </div>
  );
}

export default App;
