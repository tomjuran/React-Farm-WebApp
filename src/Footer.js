import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
//import { Link } from 'react-router-dom';
//import { positions } from '@material-ui/system';
//import { BottomNavigation } from '@material-ui/core';
//import { BottomNavigation } from '@material-ui/core';
//import Button from '@material-ui/core/Button';
//import IconButton from '@material-ui/core/IconButton';
//import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    textAlign: "left",
  },
  

}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar style={{background: 'navyblue', position: 'absolute', left: 0, right: 0, bottom: 0}} position="static">
        <Toolbar style={{ spacing: "8"}}>
          <Typography variant="h6" className={classes.title}>
          Phone:<br></br> 905 788 2422<br></br>Address:
          <br></br>111 ford dr pelham
          </Typography>
          
          
          
          
        </Toolbar>
      </AppBar>
    </div>
  );
}