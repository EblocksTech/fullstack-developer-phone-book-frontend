import React from "react";
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import CustomButton from "../../components/CustomButtom/CustomButton";
import FormControl from '@mui/material/FormControl';

const AddPhoneBook = () => {
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
          <TextField id="text-name" label="Name" variant="standard" />
        </FormControl>     
      </Grid>
      <Grid item md={6}>
        <Grid container direction="row" spacing={4}>
          <Grid item >
            <CustomButton variant="contained" size="small" >Save</CustomButton>
          </Grid>
          <Grid item>
            <CustomButton variant="contained" size="small" color="error">Cancel</CustomButton>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default AddPhoneBook