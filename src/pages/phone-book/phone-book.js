import React, { useState } from "react";
import { connect } from "react-redux";
import { selectPhonebooks, selectSelectedPhonebook } from "../../redux/phonebook/phonebook.selectors";
import { selectFilterString } from "../../redux/entries/entries.selectors" ;
import { setSelectedPhonebook } from "../../redux/phonebook/phonebook.actions";
import { updateFilterString } from "../../redux/entries/entries.actions";

import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import NumberList from "../../components/NumberList/NumberList";
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const PhoneBook = ({phonebooks,filterBook,filterString,selectedPhonebook}) => {          

  const handleChange = (event) => {
    filterBook(event.target.value);
  };

  const handleFilter = (event) => {    
    filterString(event.target.value);
  }

  return(
    <Grid
    container
    spacing={0}
    direction="column"
    alignItems="center"
    justifyContent="flex-start"
    style={{ minHeight: '100vh', marginTop: "100px" }}
    >          
      <Grid item md={6} style={{marginBottom: "30px"}}>
        <FormControl>
            <InputLabel id="demo-simple-select-label">Phone Book</InputLabel>
            <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={selectedPhonebook}
            label="Phone Book"
            onChange={handleChange}
            >
              {
                phonebooks.map((x, key) => <MenuItem value={x.id} key={key}> {x.name} </MenuItem>)
              }              
            </Select>
          </FormControl>              
      </Grid>   
      <Grid item md={6} style={{marginBottom: "50px"}}>
        <FormControl>          
          <TextField id="text-name" label="Filter" variant="standard" onChange={handleFilter} />
        </FormControl>  
      </Grid>
      <Grid item md={6} style={{marginBottom: "50px"}}>
        <NumberList />
      </Grid>
    </Grid>
  )
}

const mapStateToProps = state => {
  return ({
    phonebooks: selectPhonebooks(state),
    selectedPhonebook: selectSelectedPhonebook(state),    
  })
}

const mapDispatchToProps = dispatch => ({
  filterBook: (phonebook) => dispatch(setSelectedPhonebook(phonebook)),
  filterString: (string) => dispatch(updateFilterString(string))
});
export default connect(mapStateToProps, mapDispatchToProps)(PhoneBook)