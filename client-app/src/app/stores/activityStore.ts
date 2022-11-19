import { makeAutoObservable, observable } from "mobx";

export default class ActivityStore {
  title = "Hello From React Developer";

  constructor() {
    makeAutoObservable(this);
  }

  // Action
  setTitle = () => {
    this.title = this.title + "!";
  };
}
