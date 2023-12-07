import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

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

export default function BtnAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}  style={{minWidth:"100%"}}>
      <AppBar style={{ backgroundColor: "#58b958", hover: "color:#fff" }} position="static">
        <Toolbar>
          {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography> */}
          {/* <Button style={{ marginLeft: "33px", hover: "color:#fff" }} color="inherit">Pricing &amp; Plans</Button>
          <Button style={{ marginLeft: "33px", hover: "color:#fff" }} color="inherit">Subscription Plans</Button> */}
          <Typography style={{ marginLeft: "33px", hover: "color:#fff" }} variant="h4" component="h2">
            Monthly Subscription Plans
          </Typography>

        </Toolbar>
      </AppBar>
    </div>
  );
}
