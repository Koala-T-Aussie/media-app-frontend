import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  route: {
    backgroundColor: '#333333',
    position: 'absolute',
    minHeight: '100%',
    minWidth: '100%',
    textAlign: 'center',
  },
  words: {
    color: 'white',
  },
}));

const Home = (props) => {
  const classes = useStyles();

  const timeMin = useSelector((state) => state.timeMin);
  const timeHr = Math.floor(timeMin / 60);
  const timeDay = Math.floor(timeMin / (60 * 24));
  const timeWk = Math.floor(timeMin / (60 * 24 * 7));
  const timeYr = Math.floor(timeMin / (60 * 24 * 365));

  return (
    <div className={classes.route}>
      <h1 className={classes.words}>
        You have seen {timeMin} minutes of media
      </h1>
      <h1 className={classes.words}>or</h1>
      <h1 className={classes.words}>
        {timeHr} hours and {timeMin % 60} minutes
      </h1>
      <h1 className={classes.words}>or</h1>
      <h1 className={classes.words}>
        {timeDay} days, {timeHr % 24} hours and {timeMin % 60} minutes
      </h1>
      <h1 className={classes.words}>or</h1>
      <h1 className={classes.words}>
        {timeWk} weeks, {timeDay % 7} days, {timeHr % 24} hours and {timeMin % 60} minutes
      </h1>
      <h1 className={classes.words}>or</h1>
      <h1 className={classes.words}>
        {timeYr} years, {timeWk % 52} weeks, {timeDay % 7} days, {timeHr % 24} hours and {timeMin % 60} minutes
      </h1>
    </div>
  )
}

export default Home