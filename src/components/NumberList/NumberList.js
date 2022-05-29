import React, {useState} from "react";
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { connect } from "react-redux";

import { selectedPhonebookEntries } from "../../redux/entries/entries.selectors";
import { selectFilterString } from "../../redux/entries/entries.selectors";

const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

const NumberList = ({entries, filterString}) => {
  
  const filteredEntries = entries.filter(x => {
    return x.name.toLowerCase().includes(filterString.toLowerCase());
  });
  return(          
    <Demo>
      <List dense={true}>
        {
          filteredEntries.map((x, key) => 
            <ListItem key={key}>
              <ListItemText primary={x.name} secondary={x.number} key={key}/>
            </ListItem>
          )
        }
      </List>
    </Demo>  
  );
}

const mapStateToProps = state => {
  return ({
    entries: selectedPhonebookEntries(state),
    filterString: selectFilterString(state)
  })
}

export default connect(mapStateToProps)(NumberList);
