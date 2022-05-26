import { useState } from "react";
import Paper from '@mui/material/Paper';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import CustomButton from "../../components/CustomButtom/CustomButton";

const AddEntry = () => {
  
  const tempPhoneBooks = [
    {id: 1, name: "Neighbourhood"},
    {id: 2, name: "Bussiness Associates"},
    {id: 3, name: "Family"}
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
                tempPhoneBooks.map((x, key) => <MenuItem value={x.id} key={key}> {x.name} </MenuItem>)
              }
            </Select>
          </FormControl>              
      </Grid>    
      <Grid item md={6} style={{marginBottom: "50px"}}>
        <FormControl>          
          <TextField id="text-name" label="Name" variant="standard" />
        </FormControl>     
      </Grid>
      <Grid item md={6} style={{marginBottom: "50px"}}>
        <FormControl>          
          <TextField id="text-number" label="Number" variant="standard" />
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
  );
}

export default AddEntry