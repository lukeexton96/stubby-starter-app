import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [userInfo, setUserInfo] = useState('');

  useEffect(() => {
    fetch('http://localhost:8882/api/getInfo')
        .then(response => response.json())
        .then(data => setUserInfo(data))
        .catch(error => console.log(error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p> User Info: {userInfo.name} </p>
        <img src={userInfo.profile_image} />
      </header>
    </div>
  );
}

export default App;
