import React from 'react'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const SelectCountry = ({ country, handleCountryChange, data }) => (
    <div>
        <Autocomplete
        autoSelect
        autoHighlight
        options={data}
        id="countryChooser"
        value={country}
        style={{ width:600, margin:'auto' }}
        onChange={(event, newValue) => handleCountryChange(newValue)}
        renderInput={(params) => <TextField {...params} label="Country" margin="normal" variant="outlined"/>}
    />
  </div>
)

export default SelectCountry
