import { combineReducers } from 'redux';

import { authReducer } from './authReducer';
import { workoutReducer } from './workoutReducer';

export const rootReducer = combineReducers({
  auth: authReducer,
  workout: workoutReducer,
});
