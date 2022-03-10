import { createContext } from 'react';
import Auth from './Auth';
import App from './App';
import { types } from 'mobx-state-tree';

const RootStore = types.model({
  app: App,
  auth: Auth,
});

export const RootStoreContext = createContext(RootStore.create());

export const rootStore = RootStore.create({
  app: App.create({
    locale: localStorage.getItem('locale') || 'zh-CN',
  }),
  auth: Auth.create(),
});
