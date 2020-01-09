import {axiosWithAuth} from "../utils/axiosWithAuth"

export const ADD_WORKOUT_START = "ADD_WORKOUT_START";
export const ADD_WORKOUT_SUCCESS = "ADD_WORKOUT_SUCCESS";
export const ADD_WORKOUT_FAILURE = "ADD_WORKOUT_FAILURE";

export const addWorkout = values => dispatch => {
    dispatch({type: ADD_WORKOUT_START});
    axiosWithAuth()
    .post(`/workouts`, values)
    .then(response => {
        console.log(response)
        dispatch({type: ADD_WORKOUT_SUCCESS, payload: values});
    })
    .catch(error => {
        dispatch({type: ADD_WORKOUT_FAILURE, payload: error})
    })
} 