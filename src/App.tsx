import { useContext } from "react";
import { observer } from "mobx-react-lite";
import cn from "classnames";
import { StoreContext } from "./store";

import Header from "components/Header";
import Sidebar from "components/Sidebar";

import styles from "./app.module.scss";

function App({ store }: any) {
  // const store = useContext(StoreContext);
  return (
    <div className={styles.wrapper}>
      <header className={cn(styles.box, styles.header, styles[store.theme])}>
        <Header store={store} />
      </header>
      {store && store.isMenuVisible && (
        <nav className={cn(styles.box, styles.sidebar, styles[store.theme])}>
          <Sidebar store={store} />
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
