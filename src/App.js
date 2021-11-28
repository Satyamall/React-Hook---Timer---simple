
import './App.css';
import Timer from './Timer/Timer';

function App() {
  return (
    <div className="App">
      <h1>Simple Timer</h1>
      <Timer initial={1} final={20}/>
    </div>
  );
}

export default App;
