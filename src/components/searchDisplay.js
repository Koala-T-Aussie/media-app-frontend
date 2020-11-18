import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Media from './media';
import { Grid } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  main: {
    backgroundColor: '#666666',
    position: 'absolute',
    minHeight: '100%',
    minWidth: '100%'
  },
}));

const SearchDisplay = (props) => {
  const searchResults = useSelector((state) => state.searchResults);

  const classes = useStyles();

  return (
    <div className={classes.main}>
      <Grid container spacing="2" justify="center">
        {
          searchResults.map((eachResult) => (
            <Grid item key={eachResult.id}>
              <Media movieName={eachResult.title} imgSrc={eachResult.image} movieId={eachResult.id}></Media>
            </Grid>
          ))
        }
      </Grid>
    </div>
  )
}

export default SearchDisplay