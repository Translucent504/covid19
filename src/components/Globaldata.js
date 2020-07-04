import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    ...theme.typography.button,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
    flexGrow: 1,
    margin: "auto",
    textAlign: 'center',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    fontSize: '1.3rem'
  },
  recovered: {
    backgroundColor: "aquamarine"
  },
  confirmed: {
    backgroundColor: "lemonchiffon"
  },
  deaths: {
    backgroundColor: "red"
  }
}));

const GlobalData = ({ data }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper>
        <Typography variant="h2" gutterBottom>
          Global Data
      </Typography>
        <Grid container spacing={3}>
          <Grid item xs>
            <Paper className={`${classes.paper} ${classes.recovered}`} >Total Recovered {(data.TotalRecovered).toLocaleString()}</Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={`${classes.paper} ${classes.confirmed}`}>Total Confirmed: {(data.TotalConfirmed).toLocaleString()}</Paper>
          </Grid>
          <Grid item xs>
            <Paper className={`${classes.paper} ${classes.deaths}`}>Total Deaths {(data.TotalDeaths).toLocaleString()}</Paper>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default GlobalData