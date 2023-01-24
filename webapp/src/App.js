import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [clicks, setClicks] = useState(0);

  function getClicksToday() {
    fetch("http://127.0.0.1:8000/api/clicks", {mode: "cors"})
    .then(res => res.json())
    .then((result) => {
      if(result.click_count)
        setClicks(result.click_count);
    });
  }

  function buttonClicked() {
    fetch("http://127.0.0.1:8000/api/clicked", {method: "POST", mode: "cors"})
    .then(res => res.json())
    .then((result) => {
      if(result.click_count)
        setClicks(result.click_count);
    });
  }

  useEffect(()=>{
    getClicksToday();
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <button className="Click-Me-Button" onClick={buttonClicked}>Click Me!</button>
        <div>This button was clicked {clicks} times today.</div>
      </header>
    </div>
  );
}

export default App;
