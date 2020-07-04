import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: "auto",
    textAlign: 'center',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const GlobalData = ({data}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper>
        <Typography variant="h2" gutterBottom>
      Global Data
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs>
          <Paper className={classes.paper}>Total Recovered {data.TotalRecovered}</Paper>
        </Grid>
        <Grid item xs={6}>
  <Paper className={classes.paper}>Total Confirmed: {data.TotalConfirmed}</Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>Total Deaths {data.TotalDeaths}</Paper>
        </Grid>
      </Grid>
      </Paper>
    </div>
  );
}

export default GlobalData