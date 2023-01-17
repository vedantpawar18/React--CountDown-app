import logo from './logo.svg';
import './App.css';
import CountDown from './Components/CountDown';
import Timesetting from './Components/Timesetting';
import { useState } from 'react';

function App() {
  const [hour, setHour]= useState(0)
  const [minutes, setMinutes]= useState(0)
  const [seconds, setSeconds]= useState(0)

  return (
    <div className="App">
      <Timesetting  setHour={setHour} setMinutes={setMinutes} setSeconds={setSeconds}/>
    <CountDown hours={hour} minutes={minutes} seconds={seconds}  />
    </div>
  );
}

export default App;
