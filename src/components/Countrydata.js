import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import SelectCountry from './SelectCountry'
import CountryGraph from './Countrygraph'

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

const CountryData = ({ data }) => {
    const classes = useStyles();
    const [country, setCountry] = useState("Pakistan")

    const handleCountryChange = (countryName) => {
        if (countryName) {
            setCountry(countryName)
        }
    }
    const countryNames = data.map(c => c.Country)
    const countryData = data[countryNames.indexOf(country)]
    return (
        <div className={classes.root}>
            <Paper>
                <Typography variant="h2" gutterBottom>
                    {country} Data
                </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <SelectCountry country={country} handleCountryChange={handleCountryChange} data={countryNames} />
                    </Grid>
                    <Grid item xs>
                        <Paper className={`${classes.paper} ${classes.recovered}`}>Total Recovered {(countryData.TotalRecovered).toLocaleString()}</Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper className={`${classes.paper} ${classes.confirmed}`}>Total Confirmed: {(countryData.TotalConfirmed).toLocaleString()}</Paper>
                    </Grid>
                    <Grid item xs>
                        <Paper className={`${classes.paper} ${classes.deaths}`}>Total Deaths {(countryData.TotalDeaths).toLocaleString()}</Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper>
                            <CountryGraph data={countryData}/>
                        </Paper>
                    </Grid>
                </Grid>
            </Paper>

        </div>
    );
}

export default CountryData