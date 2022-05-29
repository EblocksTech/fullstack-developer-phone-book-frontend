import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import CustomButton from "../../components/CustomButtom/CustomButton";
import FormControl from '@mui/material/FormControl';

import { addPhoneBookStart } from "../../redux/phonebook/phonebook.actions.js";

const AddPhoneBook = ({addPhonebook}) => {  
  let history = useHistory();
  const [name, setName] = useState("");

  const handleSave = () => {
    addPhonebook(name);
  }

  const handleCancel = () => {
    history.push("/");
  }

  const handleChange = event => {
    setName(event.target.value);
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
          Add New Phone Book
        </Typography>
      </Grid>  
      <Grid item md={6} style={{marginBottom: "50px"}}>
        <FormControl>          
          <TextField id="text-name" label="Name" variant="standard" value={name} onChange={handleChange} />
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
  )
}

const mapDispatchToProps = dispatch => ({
  addPhonebook: (name) => dispatch(addPhoneBookStart(name))
});

export default connect(null, mapDispatchToProps)(AddPhoneBook);