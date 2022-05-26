import React from "react";
import Button from "@mui/material/Button";

const CustomButton = ({children, ...props}) => {
  return(
    <Button variant={props.variant} color={props.color} size={props.size  }>
      {children}
    </Button>
  )
}

export default CustomButton;