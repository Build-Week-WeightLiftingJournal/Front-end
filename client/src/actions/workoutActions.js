import { axiosWithAuth } from '../utils/axiosWithAuth';

// TYPES
export const FETCH_WORKOUTS_START = 'FETCH_WORKOUTS_START';
export const FETCH_WORKOUTS_SUCCESS = 'FETCH_WORKOUTS_SUCCESS';
export const FETCH_WORKOUTS_FAILURE = 'FETCH_WORKOUTS_FAILURE';

export const FETCH_WORKOUT_BY_ID_START = 'FETCH_WORKOUT_BY_ID_START';
export const FETCH_WORKOUT_BY_ID_SUCCESS = 'FETCH_WORKOUT_BY_ID_SUCCESS';
export const FETCH_WORKOUT_BY_ID_FAILURE = 'FETCH_WORKOUT_BY_ID_FAILURE';

export const POST_WORKOUT_START = 'POST_WORKOUT_START';
export const POST_WORKOUT_SUCCESS = 'POST_WORKOUT_SUCCESS';
export const POST_WORKOUT_FAILURE = 'POST_WORKOUT_FAILURE';

export const EDIT_WORKOUT_START = 'EDIT_WORKOUT_START';
export const EDIT_WORKOUT_SUCCESS = 'EDIT_WORKOUT_SUCCESS';
export const EDIT_WORKOUT_FAILURE = 'EDIT_WORKOUT_FAILURE';

export const DELETE_WORKOUT_START = 'DELETE_WORKOUT_START';
export const DELETE_WORKOUT_SUCCESS = 'DELETE_WORKOUT_SUCCESS';
export const DELETE_WORKOUT_FAILURE = 'DELETE_WORKOUT_FAILURE';

// ACTIONS

// GET ALL WORKOUTS
export const getWorkouts = () => (dispatch) => {
  dispatch({ type: FETCH_WORKOUTS_START });
  const userId = localStorage.getItem('userId');
  axiosWithAuth()
    .get(`/users/${userId}/workouts`)
    .then((res) => {
      dispatch({ type: FETCH_WORKOUTS_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: FETCH_WORKOUTS_FAILURE, payload: err.response });
    });
};

// GET WORKOUT BY ID
export const getWorkoutById = (userId, workoutId) => (dispatch) => {
  dispatch({ type: FETCH_WORKOUT_BY_ID_START });
  // const userId = localStorage.getItem('userId');
  axiosWithAuth()
    .get(`users/${userId}/workouts/${workoutId}`)
    .then((res) => {
      console.log('ACTION', res.data);
      dispatch({ type: FETCH_WORKOUT_BY_ID_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: FETCH_WORKOUT_BY_ID_FAILURE, payload: err.response });
    });
};

// POST WORKOUT
export const postWorkout = (userId, newWorkout) => (dispatch) => {
  dispatch({ type: POST_WORKOUT_START });
  return axiosWithAuth()
    .post(`/users/${userId}/addworkout`, newWorkout)
    .then((res) => {
      dispatch({ type: POST_WORKOUT_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: POST_WORKOUT_FAILURE, payload: err.response });
    });
};

// EDIT WORKOUT
export const editWorkout = (userId, workoutId, changes) => (dispatch) => {
  dispatch({ type: EDIT_WORKOUT_START });
  return axiosWithAuth()
    .put(`/users/${userId}/workouts/${workoutId}`, changes)
    .then((res) => {
      dispatch({ type: EDIT_WORKOUT_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: EDIT_WORKOUT_FAILURE, payload: err.response });
    });
};

// DELETE WORKOUT
export const deleteWorkout = (userId, workoutId) => (dispatch) => {
  dispatch({ type: DELETE_WORKOUT_START });
  return axiosWithAuth()
    .delete(`/users/${userId}/workouts/${workoutId}`)
    .then((res) => {
      dispatch({ type: DELETE_WORKOUT_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: DELETE_WORKOUT_FAILURE, payload: err });
    });
};
