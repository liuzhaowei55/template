import React, { ReactElement } from 'react';
import { MobXProviderContext, observer } from 'mobx-react';
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import logo from './logo.svg';
import './App.css';
import { FormattedMessage, useIntl } from 'react-intl';
import { App as AppConfig } from '../models/App';

const App = (): ReactElement => {
  const { app } = React.useContext(MobXProviderContext) as { app: AppConfig };
  const intl = useIntl();

  const changeLanguage = (event: SelectChangeEvent) => {
    app.setLocale(event.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img
          src={logo}
          className="App-logo"
          alt={intl.formatMessage({ id: 'alt', defaultMessage: 'aaa' })}
        />
        <p>
          Edit <code>src/pages/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <FormControl sx={{ mt: 2 }}>
          <InputLabel id="language-select-id">
            <FormattedMessage id="multiLanguage" />
          </InputLabel>
          <Select
            labelId="language-select-id"
            label={intl.formatMessage({ id: 'language-select-id' })}
            value={app.locale}
            onChange={changeLanguage}
            sx={{ width: 200 }}
          >
            <MenuItem value="zh-CN">简体中文</MenuItem>
            <MenuItem value="en">English</MenuItem>
          </Select>
        </FormControl>
      </header>
    </div>
  );
};

export default observer(App);
