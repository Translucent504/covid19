import React, { useState, useEffect } from 'react';
import axios from 'axios'
import GlobalData from './components/Globaldata';
import CountryData from './components/Countrydata'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Appbar from './components/Appbar'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: "auto",
    textAlign: 'center',
    width: "80vw",
  },
  appbar: {
    paddingBottom: "2rem"
  },
  body: {
    backgroundImage: "linear-gradient(to right, #ffecd2 0%, #fcb69f 100%)"
  }
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
            CountryCode: "PK",
            Slug: "pakistan",
            NewConfirmed: 0,
            TotalConfirmed: 0,
            NewDeaths: 0,
            TotalDeaths: 0,
            NewRecovered: 0,
            TotalRecovered: 0,
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
    <div className={classes.body}>
      <Appbar className={classes.appbar} />
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
    </div>
  );
}

export default App;
