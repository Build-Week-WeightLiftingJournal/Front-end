import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getLoggedIn } from "../actions/authActions";
import jwt from "jsonwebtoken"

const Login = props => {
  console.log(jwt.decode(localStorage.getItem("token")))
  const useStyles = makeStyles(theme => ({
    container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      background: "white",
      width: 380,
      height: 350,
      margin: "50px auto",
      boxShadow: "0 5px 5px 5px rgba(90, 89, 136, 0.12)"
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 300,
      border: "green"
    },
    button: {
      margin: theme.spacing(1),
      width: 300
    },
    input: {
      display: "none"
    }
  }));
  const classes = useStyles(1);

  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  });

  const handleChanges = e => {
    setCredentials({ ...credentials, [e.target.id]: e.target.value });
  };

  const login = e => {
    e.preventDefault();
    props.getLoggedIn(credentials);
    props.history.push("/workout");
  };

  return (
    <div>
      <form onSubmit={login} className={classes.container}>
        <h2>LOGIN</h2>
        <div>
          <TextField
            id="username"
            className={classes.textField}
            label="Username"
            margin="normal"
            variant="outlined"
            onChange={handleChanges}
          />
        </div>
        <div>
          <TextField
            id="password"
            className={classes.textField}
            label="Password"
            type="password"
            margin="normal"
            variant="outlined"
            onChange={handleChanges}
          />
        </div>
        <Button variant="contained" className={classes.button} type="submit">
          Login
        </Button>
        <p>
          Don't have an account? <Link to="/signup">Signup here!</Link>
        </p>
      </form>
    </div>
  );
};

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, { getLoggedIn })(Login);
