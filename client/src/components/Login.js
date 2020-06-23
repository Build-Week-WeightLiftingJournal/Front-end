import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getLoggedIn } from '../actions/authActions';

const Login = (props) => {
  const useStyles = makeStyles((theme) => ({
    focused: {},
    outlinedInput: {
      '&$focused $notchedOutline': {
        border: '2px solid #00A35E',
      },
    },
    notchedOutline: {},
  }));
  const classes = useStyles(1);

  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });

  const handleChanges = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const login = (e) => {
    e.preventDefault();
    props.getLoggedIn(credentials).then(() => props.history.push('/workouts'));
  };

  return (
    <div className='form-container'>
      <div className='left'>
        <div className='left-text'>
          <h1>Welcome back!</h1>
          <p>Keep your Weightlifting Journal up to date!</p>
        </div>
      </div>
      <form onSubmit={login} className='form'>
        <h2>Login</h2>
        <div>
          <TextField
            name='username'
            placeholder='Username'
            margin='normal'
            variant='outlined'
            onChange={handleChanges}
            value={credentials.username}
            className='input'
            InputProps={{
              classes: {
                root: classes.outlinedInput,
                focused: classes.focused,
                notchedOutline: classes.notchedOutline,
              },
            }}
          />
        </div>
        <div>
          <TextField
            name='password'
            placeholder='Password'
            type='password'
            margin='normal'
            variant='outlined'
            onChange={handleChanges}
            value={credentials.password}
            className='input'
            InputProps={{
              classes: {
                root: classes.outlinedInput,
                focused: classes.focused,
                notchedOutline: classes.notchedOutline,
              },
            }}
          />
        </div>
        <Button type='submit' variant='contained' className='button'>
          Login
        </Button>
        <p>
          Don't have an account?{' '}
          <Link to='/signup' className='redirect'>
            Signup here!
          </Link>
        </p>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoading: state.auth.isLoading,
  };
};

export default connect(mapStateToProps, { getLoggedIn })(Login);
