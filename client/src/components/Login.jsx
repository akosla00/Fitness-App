import React, { useState } from "react";
import { TextField, FormControl, Button, Link } from "@mui/material";
// import { Link } from "react-router-dom";
import { loginUser } from "../utils/API";
import Auth from "../utils/auth";
import { useLoginContext } from "../utils/LoginContext";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  const { setIsLoggingIn } = props;
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const { loggedIn, setLoggedIn } = useLoginContext();

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
      const response = await loginUser({ email, password });

      if (!response.ok) {
        return alert("Email/Password did not work.");
      }
      const { token, data } = await response.json();
      console.log(data);
      console.log(token);

      setLoggedIn(true);
      Auth.login(token);
      navigate('/');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <React.Fragment>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <h2>Login Form</h2>
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
        <Button variant="outlined" color="secondary" type="submit">
          Login
        </Button>
      </form>
      <small>
        Need an account?{" "}
        <Link onClick={() => setIsLoggingIn(false)} sx={{ cursor: "pointer" }}>
          Register here
        </Link>
      </small>
    </React.Fragment>
  );
};

export default Login;
