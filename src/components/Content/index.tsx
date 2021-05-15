import React from "react";
import styles from "./Content.module.scss";
import { Switch, Route } from "react-router-dom";

const Content: React.FC = () => (
  <div className={styles.Content} data-testid="Content">
    <Switch>
      <Route path="/about">
        <div>About</div>
      </Route>
      <Route path="/feedback">
        <div>Feedback</div>
      </Route>
      <Route path="/">
        <div>No content</div>
      </Route>
    </Switch>
  </div>
);

export default Content;
