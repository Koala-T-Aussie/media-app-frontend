import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ButtonGroup } from '@material-ui/core';
import ListService from '../services/listService';

const lst = new ListService();

const useStyles = makeStyles((theme) => ({
  media: {
    textAlign: 'center',
    padding: '2ch',
  },
  watched: {
    backgroundColor: '#009933',
  },
  watchlist: {
    backgroundColor: '#3333ff',
  },
  title: {
    color: 'white',
    wordWrap: 'break-word',
    width: '182px',
  }
}));

const Media = (props) => {
  const classes = useStyles();

  const addToWatched = (event) => {
    const mediaID = event.target.id.split('_')[1]
    console.log(mediaID)
    lst.addMediaToWatched(mediaID)
    // maybe .then to deactivate button
  }

  const addToWatchlist = (event) => {
    const mediaID = event.target.id.split('_')[1]
    console.log(mediaID)
    lst.addMediaToWatchlist(mediaID)
  }

  return (
    <div className={classes.media}>
      <img src={props.imgSrc} height='245' width='182' alt='movie poster'/>
      <h3 className={classes.title}>{props.movieName}</h3>
      <ButtonGroup>
        {/* put conditionals around each button to be decativated if media is already in a given list */}
        <button className={classes.watched} onClick={addToWatched} id={'wd_'+props.movieId}>
          Watched
        </button>
        <button className={classes.watchlist} onClick={addToWatchlist} id={'wl_'+props.movieId}>
          Watchlist
        </button>
      </ButtonGroup>
    </div>
  )
}

export default Media