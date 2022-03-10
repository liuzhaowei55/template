import { makeAutoObservable } from 'mobx';

export class App {
  locale: string | undefined;

  constructor() {
    makeAutoObservable(this);
    this.locale = localStorage.getItem('locale') || 'zh-CN';
  }

  setLocale(locale: string) {
    this.locale = locale;
    localStorage.setItem('locale', locale);
  }
}
