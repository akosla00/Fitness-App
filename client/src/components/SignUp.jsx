import React, { useState } from "react";
import { TextField, FormControl, Button, Link } from "@mui/material";
// import { Link } from "react-router-dom";
import { createUser } from "../utils/API";
import Auth from "../utils/auth";

const Signup = (props) => {
  const { setIsLoggingIn } = props;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    setEmailError(false);
    setPasswordError(false);

    if (email == "") {
      setEmailError(true);
    }
    if (password == "") {
      setPasswordError(true);
    }

    if (email && password) {
      console.log(email, password);
    }

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      const response = await createUser({ email, password, username });



      const { token, data } = await response.json();

      console.log(data);
      Auth.login(token)
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <React.Fragment>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <h2>Signup Form</h2>
        <TextField
          label="Email"
          onChange={(e) => setEmail(e.target.value)}
          required
          variant="outlined"
          color="secondary"
          type="email"
          sx={{ mb: 3 }}
          fullWidth
          value={email}
          error={emailError}
        />
        <TextField
          label="Username"
          onChange={(e) => setUsername(e.target.value)}
          required
          variant="outlined"
          color="secondary"
          type="username"
          sx={{ mb: 3 }}
          fullWidth
          value={username}
        />
        <TextField
          label="Password"
          onChange={(e) => setPassword(e.target.value)}
          required
          variant="outlined"
          color="secondary"
          type="password"
          value={password}
          error={passwordError}
          fullWidth
          sx={{ mb: 3 }}
        />
        <TextField
          label="Height (in cm)"
          variant="outlined"
          color="secondary"
          type="height"
          sx={{ mb: 3 }}
          fullWidth
        />
        <TextField
          label="Weight (in lb)"
          variant="outlined"
          color="secondary"
          type="weight"
          fullWidth
          sx={{ mb: 3 }}
        />
        <Button variant="outlined" color="secondary" type="submit">
          Signup
        </Button>
      </form>
      <small>
        Have an account?{" "}
        <Link onClick={() => setIsLoggingIn(true)} sx={{ cursor: "pointer" }}>
          Login here
        </Link>
      </small>
    </React.Fragment>
  );
};

export default Signup;
