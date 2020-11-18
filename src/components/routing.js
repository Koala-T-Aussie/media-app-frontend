import React from 'react';
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import MediaDisplay from './mediaDisplay';
import SearchBar from './search';
import Home from './home';
import { Typography, AppBar, Toolbar, Button } from '@material-ui/core';
import ListService from '../services/listService';
import TimeService from '../services/timeService';

const lst = new ListService();
const tim = new TimeService();

const useStyles = makeStyles((theme) => ({
  space: {
    marginRight: theme.spacing(5),
    color: 'white',
    backgroundColor: '#424242',
    height: '100%',
  },
  more: {
    height: '100%',
  },
  router: {
    float: 'left',
    width: '50%'
  },
  search: {
    marginLeft: "auto",
    marginRight: -12,
    width: '33%',
    backgroundColor: '#dedede',
    borderRadius: '5px',
  },
  bar: {
    backgroundColor: '#424242',
  }
}));

const Routing = (props) => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const getWatched = () => {
    lst.getWatchedMedia().then( res => {
      dispatch({type: 'updateMediaList', mediaArray: res.data});
      dispatch({type: 'hideSearchResults'});
    });
  }

  const getWatchlist = () => {
    lst.getWatchlistMedia().then( res => {
      dispatch({type: 'updateMediaList', mediaArray: res.data});
      dispatch({type: 'hideSearchResults'});
    });
  }

  const getHome = () => {
    tim.getWatchTime().then( res => {
      console.log(res);
      dispatch({type: 'updateTime', timeMin: res.data});
      dispatch({type: 'hideSearchResults'});
    });
  }

  return (
    <Router>
      <AppBar position='static' className={classes.bar}>
        <Toolbar>
          <Typography className={classes.more}>
            <Button to={"/"} component={Link} className={classes.space} onClick={getHome}>
              Home
            </Button>
            <Button to={"/watched"} component={Link} className={classes.space} onClick={getWatched}>
              Watched
            </Button>
            <Button to={"/watchlist"} component={Link} className={classes.space} onClick={getWatchlist}>
              Watchlist
            </Button>
          </Typography>
          <div className={classes.search}><SearchBar></SearchBar></div>
        </Toolbar>
      </AppBar>
      <Route path="/" component={Home}/>
      <Route path="/watched" component={MediaDisplay} />
      <Route path="/watchlist" component={MediaDisplay} />
    </Router>
  );
};  

export default Routing;