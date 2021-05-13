import { makeObservable, observable, action } from "mobx";

export enum theme {
  light = "light",
  dark = "dark",
}

class Layout {
  isMenuVisible: boolean = true;
  theme: theme = theme.light;

  constructor() {
    makeObservable(this, {
      isMenuVisible: observable,
      theme: observable,
      setMenuVisible: action,
      setTheme: action,
    });
  }

  setMenuVisible(value: boolean) {
    this.isMenuVisible = value;
  }

  setTheme(value: theme) {
    this.theme = value;
  }
}

const store = new Layout();
export { store };
export default Layout;
