import React, {useState, useEffect} from "react";
import axios from "axios";

import { Link } from "react-router-dom";
import WorkoutCard from "./WorkoutCard";
import { axiosWithAuth } from "../../utils/axiosWithAuth";

const WorkoutList = () => {
    const [workout, setWorkout] = useState([])
    useEffect(() => {
            axiosWithAuth()
                .get('/workouts')
                .then( res => {
                    console.log(res)
                    setWorkout(res.data)
                })
                .catch( err => {
                    console.log("unable to grab workouts", err)
                })
    }, []);

    return (
        <div >
            <h2>My Workout List</h2>
            <div className="workoutlist">
            {workout.map(workOut => {
                return(
                    <div key={workOut.id} className="workout">
                    <WorkoutCard key={workOut.id} workout={workOut} />
                    </div>
                )}
            )}
            </div>
            <div>
            <Link to="/AddWorkOut"><button className="add-button"> + Add New Exercise</button></Link>
            </div>
        </div>
    )
}

export default WorkoutList;

