import { observer } from "mobx-react-lite";
import cn from "classnames";

import Header from "components/Header";
import Sidebar from "components/Sidebar";
import Content from "components/Content";
import { useStore } from "hooks/use-store";

import styles from "./app.module.scss";

function App() {
  const store = useStore();
  return (
    <div className={styles.wrapper}>
      <header className={cn(styles.box, styles.header, styles[store.theme])}>
        <Header />
      </header>
      {store && store.isMenuVisible && (
        <nav
          className={cn(
            styles.box_Sidebar,
            styles.sidebar,
            styles[store.theme]
          )}
        >
          <Sidebar />
        </nav>
      )}
      <main className={cn(styles.box, styles.content, styles[store.theme])}>
        <Content />
      </main>
      <footer className={cn(styles.box, styles.footer, styles[store.theme])}>
        Footer
      </footer>
    </div>
  );
}

export default observer(App);
