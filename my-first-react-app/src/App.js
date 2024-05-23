import logo from './logo.svg';
import './App.css';
import Greeting from './components/Greeting';
import CurrentTime from './components/CurrentTime';
import EventCard from './components/EventCard';
import Greeting_name from './components/Greeting_name';
import Counter from './components/Counter';
import MessageList from './components/MessageList';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2 className="App-title">Hello World</h2>
        <Greeting />
        <CurrentTime />
        <EventCard
          title="Concert"
          date="01.05.2024"
          time="19:00"
          location="Moscow"
           />
        <EventCard
          title="Sport"
          date="06.05.2024"
          time="11:00"
          location="Samara"
           />
           <Greeting_name name="Alex" />
           <Greeting_name name="Ivan" />
           <Greeting_name name="Oleg" />
           <Greeting_name name="Sergey" />
           <Greeting_name name="Andrey" />
           <Counter />
           <MessageList />
      </header>
    </div>
  );
}

export default App;
