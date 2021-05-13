import { createContext, useContext } from "react";
import { observer } from "mobx-react-lite";
import cn from "classnames";
import { store } from "./store";

import Header from "./components/Header";

import styles from "./app.module.scss";

const TimerContext = createContext(store);
function App() {
  const store = useContext(TimerContext);
  console.log(store.theme, "store.theme");
  return (
    <div className={styles.wrapper}>
      <header className={cn(styles.box, styles.header, styles[store.theme])}>
        <Header />
      </header>
      {store && store.isMenuVisible && (
        <nav className={cn(styles.box, styles.sidebar, styles[store.theme])}>
          Sidebar
        </nav>
      )}
      <main className={cn(styles.box, styles.content, styles[store.theme])}>
        Content
      </main>
      <footer className={cn(styles.box, styles.footer, styles[store.theme])}>
        Footer
      </footer>
    </div>
  );
}

export default observer(App);
