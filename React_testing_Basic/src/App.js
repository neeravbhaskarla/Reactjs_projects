import logo from './logo.svg';
import './App.css';
import Greetings from './components/Greetings'
import Async from './components/Async';

function App() {
  return (
    <div className="App">
      <Greetings/>
      <Async/>
    </div>
  );
}

export default App;
