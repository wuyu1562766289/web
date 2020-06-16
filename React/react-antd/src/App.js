import React from 'react';
import logo from './logo.svg';
import './App.css';
import HockPage from './pages/HocPage';
import FormPage from './pages/FormPage';
import DialogPage from './pages/DialogPage';
import ReduxPage from './pages/ReduxPage';
import MyReduxPage from './pages/MyReduxPage';
// import FormPageDecorators from './pages/FormPageDecorators';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
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
      </header> */}
      {/* <HockPage /> */}

      {/* <FormPage /> */}
      {/* <FormPageDecorators /> */}

      {/* <DialogPage /> */}

      {/* <ReduxPage /> */}

      <MyReduxPage />
    </div>
  );
}

export default App;
