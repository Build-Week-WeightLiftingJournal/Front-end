import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';
// import axios from 'axios';
// import jwt from 'jsonwebtoken';

// import { addWorkout } from "../../actions/workoutActions";
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import SideNav from '../SideNav';

const AddWorkout = (props) => {
  const [newWorkout, setNewWorkout] = useState({
    name: '',
    region: '',
    reps: '',
    weight: '',
    date: '',
  });

  const [workouts, setWorkouts] = useState([]);
  useEffect(() => {
    // const getWorkouts = () => {
    axiosWithAuth()
      .get('/workouts')
      .then((res) => {
        console.log(res);
        setWorkouts(res.data);
      })
      .catch((err) => {
        console.log('unable to grab workouts', err);
      });
    // setWorkout(workouts);
    // }
    // getWorkouts();
  }, []);

  const handleChanges = (e) => {
    e.preventDefault();
    setNewWorkout({ ...newWorkout, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post('/workouts', newWorkout)
      .then((res) => {
        setWorkouts({ ...workouts, newWorkout });
      })
      .catch((err) => console.log(err.response));
    props.history.push('/workouts');
  };

  const useStyles = makeStyles((theme) => ({
    container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'white',
      width: 400,
      height: 530,
      margin: '0px auto',
      boxShadow: '0 5px 5px 5px rgba(90, 89, 136, 0.12)',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 300,
      border: 'green',
    },
    button: {
      margin: theme.spacing(1),
      width: 300,
    },
    input: {
      display: 'none',
    },
  }));
  const classes = useStyles(1);

  return (
    <div>
      <div>
        <SideNav />
        <div className='form'>
          <div className='top' />
          <form className={classes.container} onSubmit={handleSubmit}>
            <h2>ADD A WORKOUT</h2>
            <div>
              <TextField
                id='name'
                // required="true"
                className={classes.textField}
                label='Workout Name'
                margin='normal'
                variant='outlined'
                name='name'
                onChange={handleChanges}
                value={newWorkout.name}
              />
            </div>
            <div>
              <TextField
                id='region'
                // required="true"
                className={classes.textField}
                label='Muscle Region'
                margin='normal'
                variant='outlined'
                name='region'
                onChange={handleChanges}
                value={newWorkout.region}
              />
            </div>
            <div>
              <TextField
                id='reps'
                // required="true"
                className={classes.textField}
                label='Reps'
                margin='normal'
                variant='outlined'
                name='reps'
                type='number'
                inputProps={{
                  min: '0',
                  step: '1',
                }}
                // onInput={newWorkout.reps=Math.round(newWorkout.reps)}
                onChange={handleChanges}
                value={newWorkout.reps}
              />
            </div>
            <div>
              <TextField
                id='weight'
                className={classes.textField}
                label='lbs'
                type='number'
                inputProps={{
                  min: '0',
                  step: '1',
                }}
                // onInput={newWorkout.weight=parseInt(newWorkout.weight, 10)}
                margin='normal'
                variant='outlined'
                onChange={handleChanges}
                name='weight'
                value={newWorkout.weight}
              />
            </div>
            <div>
              <TextField
                id='date'
                // required="true"
                className={classes.textField}
                margin='normal'
                variant='outlined'
                type='date'
                name='date'
                onChange={handleChanges}
                value={newWorkout.date}
              />
            </div>
            <button className='submit-button'>Add</button>
          </form>
        </div>
      </div>
    </div>
  );
};

// const mapStateToProps = state => {
//   return state;
// };

export default AddWorkout;
