import React,{ ReactElement } from 'react';
import { MobXProviderContext, observer } from 'mobx-react';
import { Button } from '@mui/material';
import logo from './logo.svg';
import './App.css';

const App = (): ReactElement => {
  const { timer } = React.useContext(MobXProviderContext);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button onClick={() => timer.increase()}>Seconds passed: {timer.secondsPassed}</Button>
      </header>
    </div>
  );
}


export default observer(App);