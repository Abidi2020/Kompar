import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import { logout } from "../../actions/auth";

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

const ButtonAppBar = () => {
  const classes = useStyles();

  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <NavLink variant='inherit' to='/'>CarPooling</NavLink>
          </Typography>

          {auth.isAuthenticated ? (
            <Button
              variant="contained"
              color="default"
              onClick={() => dispatch(logout())}
            >
              Logout
            </Button>
          ) : (
            <Button variant="contained" color="default">
              <NavLink to="/login">Login</NavLink>
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default ButtonAppBar;
