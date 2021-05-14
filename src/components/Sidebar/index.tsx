import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import MenuList from "@material-ui/core/MenuList";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Typography from "@material-ui/core/Typography";
import DraftsIcon from "@material-ui/icons/Drafts";
import SendIcon from "@material-ui/icons/Send";
import PriorityHighIcon from "@material-ui/icons/PriorityHigh";

import styles from "./Sidebar.module.scss";
const useStyles = makeStyles({
  root: {
    width: 230,
  },
});

const Sidebar = ({ store }: any) => {
  // const store = useContext(StoreContext);
  const handleClick = (menuItem: string) => {
    store.setCurrentPage({ route: "/", title: menuItem });
  };
  return (
    <MenuList>
      <MenuItem onClick={() => handleClick("message")}>
        <ListItemIcon>
          <SendIcon fontSize="small" />
        </ListItemIcon>
        <Typography variant="inherit">A short message</Typography>
      </MenuItem>
      <MenuItem onClick={() => handleClick("long text")}>
        <ListItemIcon>
          <PriorityHighIcon fontSize="small" />
        </ListItemIcon>
        <Typography variant="inherit">
          A very long text that overflows
        </Typography>
      </MenuItem>
      <MenuItem onClick={() => handleClick("3 item")}>
        <ListItemIcon>
          <DraftsIcon fontSize="small" />
        </ListItemIcon>
        <Typography variant="inherit" noWrap>
          A very long text that overflows
        </Typography>
      </MenuItem>
    </MenuList>
  );
};

export default observer(Sidebar);