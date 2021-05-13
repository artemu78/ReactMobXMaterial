import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import NightsStay from "@material-ui/icons/NightsStay";
import WbSunnyOutlined from "@material-ui/icons/WbSunnyOutlined";

import { store, theme } from "store/index";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  const toggleMenu = () => {
    store.setMenuVisible(!store.isMenuVisible);
  };

  const setTheme = () => {
    let newTheme: theme;
    switch (store.theme) {
      case theme.dark:
        newTheme = theme.light;
        break;
      case theme.light:
        newTheme = theme.dark;
        break;
      default:
        return;
    }
    store.setTheme(newTheme);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={toggleMenu}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Lorem ipsum dolor
          </Typography>
          <FormControlLabel
            control={
              <Checkbox
                icon={<NightsStay />}
                checkedIcon={<WbSunnyOutlined />}
                name="checkedH"
              />
            }
            label=""
            onClick={setTheme}
          />
        </Toolbar>
      </AppBar>
    </div>
  );
}
