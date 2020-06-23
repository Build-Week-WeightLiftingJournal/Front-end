import React from 'react';
import { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import { axiosWithAuth } from '../../utils/axiosWithAuth';

import { connect } from 'react-redux';
import { getWorkoutById } from '../../actions/workoutActions';

const Workout = (props) => {
  //   const [workout, setWorkout] = useState({});
  //   const [isFetching, setIsFetching] = useState();
  //   console.log(props);

  const userId = localStorage.getItem('userId');
  console.log(userId);

  console.log('WORKOUT RENDERED CORRECTLY!');

  useEffect(() => {
    // const id = props.match.params.id
    // axiosWithAuth()
    //   .get(`users/${userId}/workouts/${props.match.params.id}`)
    //   .then((response) => {
    //     console.log(response);
    //     setWorkout(response.data);
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
    props.getWorkoutById(userId, props.match.params.id);
  }, [props.getWorkoutById, props.match.params.id]);

  console.log(props.workout);

  const editWorkout = (e) => {
    e.preventDefault();
    props.history.push(`/update-workout/${props.match.params.id}`);
  };

  const deleteWorkout = (e) => {
    e.preventDefault();
    //   axiosWithAuth()
    //     .delete(`${userId}/workouts/${props.match.params.id}`)
    //     .then((res) => {
    //       setWorkout(res.data);
    //       props.history.push('/workout');
    //     })
    //     .catch((err) => console.log(err));
  };

  return (
    <div>
      {/* {props.fetchingWorkouts ? (
        <div>
          <h1>LOADING...</h1>
        </div>
      ) : ( */}
      <div className='workout-container'>
        <h3>{props.workout.name}</h3>
        <p>Region: {props.workout.region}</p>
        <p>Reps Completed: {props.workout.reps}</p>
        <p>Weight: {props.workout.weight}</p>
        <p>Date: {props.workout.date}</p>
        <button className='submit-button' onClick={editWorkout}>
          Edit
        </button>
        <button className='delete-button' onClick={deleteWorkout}>
          Delete
        </button>
      </div>
      {/* )} */}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    fetchingWorkouts: state.workout.fetchingWorkouts,
    workout: state.workout.workout,
  };
};

export default connect(mapStateToProps, { getWorkoutById })(Workout);
