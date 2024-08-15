import React, { useState } from "react";
import { TextField, FormControl, Button, Link, Box } from "@mui/material";
// import { Link } from "react-router-dom";
import { createUser } from "../utils/API";
import Auth from "../utils/auth";
import { useLoginContext } from "../utils/LoginContext";
import { useNavigate } from "react-router-dom";
import buffMan from "../assets/images/buffMan.jpg";

const Signup = (props) => {
  const { setIsLoggingIn } = props;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const { loggedIn, setLoggedIn } = useLoginContext();
  const navigate = useNavigate();

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

      if (!response.ok) {
        return alert("err");
      }

      const { token, data } = await response.json();

      console.log(data);
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
          style={{ width: "25%", marginLeft: 300, marginTop: 80 }}
        >
          <h2>Welcome to Fit Flex</h2>
          <TextField
            label="Email"
            onChange={(e) => setEmail(e.target.value)}
            required
            variant="outlined"
            color="secondary"
            type="email"
            sx={{ mb: 3, width: "80%" }}
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
            sx={{ mb: 3, width: "80%" }}
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
            sx={{ mb: 3, width: "80%" }}
          />
          <TextField
            label="Height (in cm)"
            variant="outlined"
            color="secondary"
            type="height"
            sx={{ mb: 3, width: "80%" }}
            fullWidth
          />
          <TextField
            label="Weight (in lb)"
            variant="outlined"
            color="secondary"
            type="weight"
            fullWidth
            sx={{ mb: 3, width: "80%" }}
          />
          <Button
            variant="outlined"
            color="secondary"
            type="submit"
            sx={{ display: "flex", mb: 2 }}
          >
            Signup
          </Button>
          <small>
            Have an account?{" "}
            <Link
              onClick={() => setIsLoggingIn(true)}
              sx={{ cursor: "pointer" }}
            >
              Login here
            </Link>
          </small>
        </form>
      </React.Fragment>
      <Box>
        <img
          src={buffMan}
          style={{
            maxHeight: 700,
            marginTop: 3,
            marginLeft: 10,
            borderRadius: 4,
          }}
        />
      </Box>
    </div>
  );
};

export default Signup;
