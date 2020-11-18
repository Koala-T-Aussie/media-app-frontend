import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Media from './media';
import { Grid } from '@material-ui/core';
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  main: {
    backgroundColor: '#333333',
    position: 'absolute',
    minHeight: '100%',
    minWidth: '100%',
    textAlign: 'center'
  },
}));

const MediaDisplay = (props) => {
  const classes = useStyles();

  const listMedia = useSelector((state) => state.mediaArray);
  listMedia.sort((a, b) => {
    let fa = a.title.toLowerCase(),
        fb = b.title.toLowerCase();

    if (fa < fb) {
      return -1;
    }
    if (fa > fb) {
      return 1;
    }
    return 0;
  });

  return (
    <div className={classes.main}>
      <Grid container spacing="2" justify="center">
        {listMedia.map((eachResult) => (
          <Grid key={eachResult._id} item>
            <Media movieName={eachResult.title} imgSrc={eachResult.image} movieId={eachResult._id}></Media>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default MediaDisplay