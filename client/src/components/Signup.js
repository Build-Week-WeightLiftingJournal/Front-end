import React, { useState } from 'react';

// styles
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

// state
import { getSignedUp } from '../actions/authActions';
import { connect } from 'react-redux';

import './Styles/Auth.css';

const Signup = (props) => {
  const [user, setUser] = useState({
    username: '',
    password: '',
    checkPassword: '',
  });

  const handleChanges = (e) => {
    setUser({
      ...user,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.password === user.checkPassword) {
      props
        .getSignedUp({ username: user.username, password: user.password })
        .then(() => props.history.push('/workouts'));
      setUser({
        ...user,
        username: '',
        password: '',
        checkPassword: '',
      });
    }
  };
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

  // if (props.isLoading) {
  //   return <h1>LOADING</h1>;
  // }

  return (
    <div className='form-container'>
      <div className='left'>
        <div className='left-text'>
          <h1>Welcome!</h1>
          <p>Sign up and start your journey with Weightlifting Journal.</p>
        </div>
      </div>
      <form onSubmit={handleSubmit} className='form'>
        <h2>Sign Up</h2>
        <div>
          <TextField
            id='username'
            placeholder='Username'
            margin='normal'
            variant='outlined'
            className='input'
            onChange={handleChanges}
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
            id='password'
            placeholder='Password'
            type='password'
            margin='normal'
            variant='outlined'
            onChange={handleChanges}
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
            id='checkPassword'
            placeholder='Verify Password'
            type='password'
            margin='normal'
            variant='outlined'
            onChange={handleChanges}
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
          Signup
        </Button>
        <p>
          Already have an account?{' '}
          <Link to='/login' className='redirect'>
            Login here!
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

export default connect(mapStateToProps, { getSignedUp })(Signup);
