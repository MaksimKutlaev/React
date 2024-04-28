import logo from './logo.svg';
import './App.css';
import Message from './components/Message';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Message
        title="заметка1"
        textMessage="lorem1 ipsum dolor sit amet, con" />
        <Message
        title="заметка2"
        textMessage="lorem2 ipsum dolor sit amet, con" />
        <Message
        title="заметка3"
        textMessage="lorem3 ipsum dolor sit amet, con" />
      </header>
    </div>
  );
}

export default App;
