import React, { useState } from "react";
import { TextField, FormControl, Button, Link, Box } from "@mui/material";
// import { Link } from "react-router-dom";
import { loginUser } from "../utils/API";
import Auth from "../utils/auth";
import { useLoginContext } from "../utils/LoginContext";
import { useNavigate } from "react-router-dom";
import hoopsMan from "../assets/images/hoopsMan.jpg";
import auth from "../utils/auth";

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
        return alert("Username/Password not found.");
      }
      const { token, data } = await response.json();
      console.log(data);
      console.log(token);

      setLoggedIn(true);
      Auth.login(token);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "#D1D9E0",
        marginTop: 50,
        marginLeft: 250,
        marginRight: 250,
        borderRadius: 4,
        fontFamily: "Lexend",
      }}
    >
      <React.Fragment>
        <form
          autoComplete="off"
          onSubmit={handleSubmit}
          style={{ width: "25%", marginLeft: 300, marginTop: 100 }}
        >
          <h2>Login Form</h2>
          <TextField
            label="Email"
            onChange={(e) => setEmail(e.target.value)}
            required
            variant="outlined"
            color="secondary"
            type="email"
            sx={{ mb: 3, width: "75%", display: "flex" }}
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
            sx={{ mb: 3, width: "75%", display: "flex" }}
          />
          <Button
            variant="outlined"
            color="secondary"
            type="submit"
            sx={{ display: "flex", mb: 2 }}
          >
            Submit
          </Button>
          <small>
            Need an account?{" "}
            <Link
              onClick={() => setIsLoggingIn(false)}
              sx={{ cursor: "pointer" }}
            >
              Register here
            </Link>
          </small>
        </form>
      </React.Fragment>
      <Box>
        <img
          src={hoopsMan}
          style={{ maxHeight: 700, marginTop: 3, borderRadius: 4 }}
        />
      </Box>
    </div>
  );
};

export default Login;
