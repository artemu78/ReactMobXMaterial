import { observer } from "mobx-react-lite";
import { useHistory } from "react-router-dom";
import MenuList from "@material-ui/core/MenuList";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Typography from "@material-ui/core/Typography";
import DraftsIcon from "@material-ui/icons/Drafts";
import SendIcon from "@material-ui/icons/Send";
import PriorityHighIcon from "@material-ui/icons/PriorityHigh";
import { useStore } from "hooks/use-store";

import styles from "./Sidebar.module.scss";
const useStyles = makeStyles({
  root: {
    width: 230,
  },
});

const MENU_ITEMS = [
  {
    route: "/",
    title: "Home",
  },
  {
    route: "/feedback",
    title: "Feedback",
  },
  {
    route: "/about",
    title: "About",
  },
];

const Sidebar = () => {
  return (
    <MenuList>
      {MENU_ITEMS.map((item) => (
        <Item {...item} />
      ))}
    </MenuList>
  );
};

const Item = (props: any) => {
  const store = useStore();
  const history = useHistory();
  const handleClick = (menuItem: string) => {
    store.setCurrentPage({ route: props.route, title: menuItem });
    history.push(props.route);
  };

  return (
    <MenuItem onClick={() => handleClick("message")}>
      <ListItemIcon>
        <SendIcon fontSize="small" />
      </ListItemIcon>
      <Typography variant="inherit">{props.title}</Typography>
    </MenuItem>
  );
};

export default observer(Sidebar);
