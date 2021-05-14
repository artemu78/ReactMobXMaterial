import { makeObservable, observable, action } from "mobx";
import { createContext } from "react";
export enum theme {
  light = "light",
  dark = "dark",
}

interface IPage {
  route?: string;
  title?: string;
}

class Layout {
  isMenuVisible: boolean = true;
  theme: theme = theme.light;
  currentPage: IPage = { title: "ok" };

  constructor() {
    makeObservable(this, {
      isMenuVisible: observable,
      theme: observable,
      currentPage: observable,
      setMenuVisible: action,
      setTheme: action,
      setCurrentPage: action,
    });
  }

  setMenuVisible(value: boolean) {
    this.isMenuVisible = value;
  }

  setTheme(value: theme) {
    this.theme = value;
  }

  setCurrentPage(value: IPage) {
    this.currentPage = value;
  }
}

const store = new Layout();
const StoreContext = createContext(store);
export { StoreContext, store };
export default Layout;
