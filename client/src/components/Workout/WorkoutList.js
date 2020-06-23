import React, { useEffect } from 'react';

// state
import { connect } from 'react-redux';
import { getWorkouts } from '../../actions/workoutActions';

import WorkoutCard from './WorkoutCard';

// styles
import '../Styles/Buttons.css';
import '../Styles/WorkoutList.css';
import SideNav from '../SideNav';

const WorkoutList = ({ workouts, getWorkouts }) => {
  useEffect(() => {
    getWorkouts();
  }, [getWorkouts]);

  if (workouts === []) {
    return <h1>Add a workout to see your dashboard!</h1>;
  }
  return (
    // <div>

    <div className='dashboard'>
      <SideNav />
      <div className='workout-list'>
        <div className='top' />
        {workouts.map((workout) => {
          return (
            <div key={workout.id} className='workout'>
              <WorkoutCard key={workout.id} workout={workout} />
            </div>
          );
        })}
      </div>
    </div>
    // </div>
  );
};

const mapStateToProps = (state) => {
  return {
    fetchingWorkouts: state.workout.fetchingWorkouts,
    workouts: state.workout.workouts,
  };
};

export default connect(mapStateToProps, { getWorkouts })(WorkoutList);
