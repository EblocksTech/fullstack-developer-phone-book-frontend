import React, { useState } from "react";
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import NumberList from "../../components/NumberList/NumberList";
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const PhoneBook = () => {

  const tempPhoneBooks = [
    {id: 1, name: "All"},
    {id: 2, name: "Neighbourhood"},
    {id: 3, name: "Bussiness Associates"},
    {id: 4, name: "Family"}
  ];  

  const [selectedBook, setSelectedBook] = useState(tempPhoneBooks[0].id);

  const handleChange = (event) => {
    setSelectedBook(event.target.value);
  };


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
            value={selectedBook}
            label="Phone Book"
            onChange={handleChange}
            >
              {
                tempPhoneBooks.map((x, key) => <MenuItem value={x.id} key={key}> {x.name} </MenuItem>)
              }
            </Select>
          </FormControl>              
      </Grid>   
      <Grid item md={6} style={{marginBottom: "50px"}}>
        <FormControl>          
          <TextField id="text-name" label="Filter" variant="standard" />
        </FormControl>  
      </Grid>
      <Grid item md={6} style={{marginBottom: "50px"}}>
        <NumberList />
      </Grid>
    </Grid>
  )
}

export default PhoneBook