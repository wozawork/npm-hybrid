import logo from './logo.svg';
import './App.css';

import { useEffect, useState } from "react";
import AccountPage from "./accountPage";
import {
  flushBioCatchService,
  pauseBioCatchService,
  resumeBioCatchService,
  startBioCatchService,
} from "./BioCatchService";

function App() {
  const [showAccountPage, setShowAccountPage] = useState(false);

  useEffect(() => {
    startBioCatchService();
  }, []);

  const handleResume = () => {
    console.log("Resuming BioCatch SDK...");
    resumeBioCatchService();
  };

  const handlePause = () => {
    console.log("Pausing BioCatch SDK...");
    pauseBioCatchService();
  };

  const handleFlush = () => {
    console.log("Flushing BioCatch SDK...");
    flushBioCatchService();
  };

  const handleAccountPage = () => {
    setShowAccountPage(true);
  };

  //BioCatchSDK.pause();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={handleFlush}>Flush SDK</button>
        <button onClick={handlePause}>Pause BioCatch SDK</button>
        <button onClick={handleResume}>Resume Collection SDK</button>
        <button onClick={handleAccountPage}>Open Account Page</button>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>
      </header>
      {showAccountPage && <AccountPage />}
    </div>
  );
}

export default App;
