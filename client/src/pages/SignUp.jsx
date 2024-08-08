import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { FormControl, FormLabel } from "@mui/material";

const SignUp = () => {
  return (
    <FormControl>
      <FormLabel>First Name</FormLabel>
      <TextField />
      <FormLabel>Last Name</FormLabel>
      <TextField />
      <Button>Submit</Button>
    </FormControl>
  );
};

export default SignUp;
