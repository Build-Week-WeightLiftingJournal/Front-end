// import React from 'react';
// import { useEffect } from 'react';

// import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
// import { getWorkoutById } from '../../actions/workoutActions';

// import '../Styles/WorkoutCard.css';

// const WorkoutCard = ({ workout, getWorkoutById, match, history }) => {
//   console.log('WORKOUT', workout);

//   const editWorkout = (e) => {
//     e.preventDefault();
//     // history.push(`/update-workout/${workout.id}`);
//   };

//   return (
//     <div className='workout-container'>
//       <div>
//         <h3>Name: {workout.name}</h3>
//         <p>Weight: {workout.weight}</p>
//         <p>Date: {workout.date}</p>
//         <p>Region: {workout.region}</p>
//         <p>Reps: {workout.reps}</p>
//         {/* <button className='submit-button' onClick={editWorkout}>
//           Edit
//         </button>
//         <button className='delete-button'>Delete</button> */}
//       </div>
//     </div>
//   );
// };

// const mapStateToProps = (state) => {
//   return {
//     isLoading: state.workout.isLoading,
//   };
// };

// export default connect(mapStateToProps, { getWorkoutById })(WorkoutCard);

import React from 'react';
// import { makeStyles } from '@material-ui/core';
// import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import EditIcon from '@material-ui/icons/Edit';
import { Link } from 'react-router-dom';

const WorkoutCard = ({ workout }) => {
  console.log('WORKOUT CARD RENDERED CORRECTLY! ');

  return (
    <div className='workout-card'>
      <p>{workout.name}</p>
      <Link to={`/workouts/${workout.id}`}>
        <EditIcon color='disabled' />{' '}
      </Link>
    </div>
  );
};

export default WorkoutCard;
