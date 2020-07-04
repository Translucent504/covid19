import React, { useState, useEffect } from 'react';
import axios from 'axios'
import GlobalData from './components/Globaldata';
import CountryData from './components/Countrydata'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
      flexGrow: 1,
      margin: "auto",
      textAlign: 'center',
      width:"90vw"
  },
}));


const App = () => {
  const [data, setData] = useState(
    {
      Global:
      {
        TotalRecovered: '',
        TotalConfirmed: '',
        TotalDeaths: ''
      },
      Countries:
        [
          {
            Country: "Pakistan",
            CountryCode: "AF",
            Slug: "pakistan",
            NewConfirmed: 302,
            TotalConfirmed: 32324,
            NewDeaths: 12,
            TotalDeaths: 819,
            NewRecovered: 1290,
            TotalRecovered: 17331,
            Date: "2020-07-04T15:56:19Z"
          }
        ]

    }
  )
  const classes = useStyles();

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("https://api.covid19api.com/summary")
      const data = await res.data
      setData(data)
    }
    fetchData()
  }, [])

  

  return (
    <Grid
      className={classes.root}
      container
      direction="column"
      alignItems="stretch"
      spacing={3}
    >
      <Grid item xs>
        <GlobalData data={data.Global} />
      </Grid>
      <Grid item>
        <CountryData data={data.Countries} />
      </Grid>
    </Grid>
  );
}

export default App;
