import { Auth } from './Auth';
import { App } from './App';

const stores = {
  app: new App(),
  auth: new Auth(),
};

export default stores;
