import {
  FETCH_WORKOUTS_START,
  FETCH_WORKOUTS_SUCCESS,
  FETCH_WORKOUTS_FAILURE,
  FETCH_WORKOUT_BY_ID_START,
  FETCH_WORKOUT_BY_ID_SUCCESS,
  FETCH_WORKOUT_BY_ID_FAILURE,
  POST_WORKOUT_START,
  POST_WORKOUT_SUCCESS,
  POST_WORKOUT_FAILURE,
  EDIT_WORKOUT_START,
  EDIT_WORKOUT_SUCCESS,
  EDIT_WORKOUT_FAILURE,
  DELETE_WORKOUT_START,
  DELETE_WORKOUT_SUCCESS,
  DELETE_WORKOUT_FAILURE,
} from '../actions/workoutActions';

const initialState = {
  workouts: [],
  workout: {},
  fetchingWorkouts: false,
  isLoading: false,
  isEditing: false,
  isDeleting: false,
  isAdded: false,
  isEdited: false,
  isDeleted: false,
  error: '',
};

export const workoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_WORKOUTS_START: {
      return {
        ...state,
        fetchingWorkouts: true,
        isLoading: true,
      };
    }
    case FETCH_WORKOUTS_SUCCESS: {
      return {
        ...state,
        fetchingWorkouts: false,
        isLoading: false,
        workouts: action.payload,
      };
    }
    case FETCH_WORKOUTS_FAILURE: {
      return {
        ...state,
        fetchingWorkouts: false,
        isLoading: false,
        error: action.payload,
      };
    }
    case FETCH_WORKOUT_BY_ID_START: {
      return {
        ...state,
        fetchingWorkouts: true,
        isLoading: true,
      };
    }
    case FETCH_WORKOUT_BY_ID_SUCCESS: {
      return {
        ...state,
        fetchingWorkouts: false,
        isLoading: false,
        workout: action.payload,
      };
    }
    case FETCH_WORKOUT_BY_ID_FAILURE: {
      return {
        ...state,
        fetchingWorkouts: false,
        isLoading: false,
        error: action.payload,
      };
    }
    case POST_WORKOUT_START: {
      return {
        ...state,
        fetchingWorkouts: true,
        isLoading: true,
      };
    }
    case POST_WORKOUT_SUCCESS: {
      return {
        ...state,
        fetchingWorkouts: false,
        isLoading: false,
        isAdded: true,
      };
    }
    case POST_WORKOUT_FAILURE: {
      return {
        ...state,
        fetchingWorkouts: false,
        isLoading: false,
        error: action.payload,
      };
    }
    case EDIT_WORKOUT_START: {
      return {
        ...state,
        isEditing: true,
        isEdited: false,
      };
    }
    case EDIT_WORKOUT_SUCCESS: {
      return {
        ...state,
        workout: action.payload,
        isEditing: false,
        isEdited: true,
      };
    }
    case EDIT_WORKOUT_FAILURE: {
      return {
        ...state,
        isEditing: false,
        isEdited: false,
        error: action.payload,
      };
    }
    case DELETE_WORKOUT_START: {
      return {
        ...state,
        isDeleting: true,
        isDeleted: false,
      };
    }
    case DELETE_WORKOUT_SUCCESS: {
      return {
        ...state,
        workout: action.payload,
        isDeleting: false,
        isDeleted: true,
      };
    }
    case DELETE_WORKOUT_FAILURE: {
      return {
        ...state,
        isDeleting: false,
        isDeleted: false,
        error: action.payload,
      };
    }
    default:
      return state;
  }
};
