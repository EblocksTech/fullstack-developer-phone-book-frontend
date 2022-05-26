import React from "react";
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

function generate(element) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    }),
  );
}

const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

const NumberList = () => {
  return(          
    <Demo>
      <List dense={true}>
        {generate(
          <ListItem>
            <ListItemText
              primary="Single-line item"
              secondary="Secondary text"
            />
          </ListItem>
        )}
      </List>
    </Demo>
  
  );
}

export default NumberList;
