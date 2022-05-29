import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import CustomButton from "../../components/CustomButtom/CustomButton";

import { selectPhonebooks } from "../../redux/phonebook/phonebook.selectors";
import { addEntry } from "../../redux/entries/entries.actions";

const AddEntry = ({phonebooks, addEntry}) => {
  let history = useHistory();
  const [selectedBook, setSelectedBook] = useState(phonebooks[0].id);
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleChange = (event) => {
    setSelectedBook(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNumber(event.target.value);
  };

  const handleSave = () => {
    const entry = {
      name: name,
      number: number,
      phonebookId: selectedBook.id
    }
    addEntry(entry);
  }

  const handleCancel = () => {
    history.push("/");
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
      <Grid item md={6} style={{marginBottom: "50px"}}>
        <Typography variant="h4">
          Add New Entry
        </Typography>
      </Grid>
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
                phonebooks.map((x, key) => <MenuItem value={x.id} key={key}> {x.name} </MenuItem>)
              }
            </Select>
          </FormControl>              
      </Grid>    
      <Grid item md={6} style={{marginBottom: "50px"}}>
        <FormControl>          
          <TextField id="text-name" label="Name" variant="standard" value={name} onChange={handleNameChange} />
        </FormControl>     
      </Grid>
      <Grid item md={6} style={{marginBottom: "50px"}}>
        <FormControl>          
          <TextField id="text-number" label="Number" variant="standard" value={number} onChange={handleNumberChange} />
        </FormControl>     
      </Grid>
      <Grid item md={6}>
        <Grid container direction="row" spacing={4}>
          <Grid item >
            <CustomButton variant="contained" size="small" onClick={handleSave} >Save</CustomButton>
          </Grid>
          <Grid item>
            <CustomButton variant="contained" size="small" color="error" onClick={handleCancel}>Cancel</CustomButton>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

const mapStateToProps = state => ({
  phonebooks: selectPhonebooks(state),  
}); 

const mapDispatchToProps = dispatch => ({
  addEntry: (entry) => dispatch(addEntry(entry))
});

export default connect(mapStateToProps,mapDispatchToProps)(AddEntry)