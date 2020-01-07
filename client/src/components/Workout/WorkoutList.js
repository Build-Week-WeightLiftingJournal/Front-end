import React, {useState, useEffect} from "react";
import axios from "axios";

import { Link } from "react-router-dom";
import WorkoutCard from "./WorkoutCard";

import { makeStyles } from '@material-ui/core/styles';

import EditIcon from '@material-ui/icons/Edit';



const workouts = [
    {
        id: 0,
        name: "Bench Press",
        weight: "185",
        reps: "10",
        date: "2019-12-31",
        region: "chest"
    },
    {
        id: 1,
        name: "Squat",
        weight: "185",
        reps: "10",
        date: "2019-12-31",
        region: "chest"
    },
    {
        id: 2,
        name: "Push Press",
        weight: "185",
        reps: "10",
        date: "2019-12-31",
        region: "shoulders"
    },
    
]



const WorkoutList = () => {
    const [workout, setWorkout] = useState([])
    useEffect(() => {
        const getWorkouts = () => {
            // axios
            //     .get('')
            //     .then( res => {
            //         setWorkout(res.)
            //     })
            //     .catch( err => {
            //         console.log("unable to grab workouts", err)
            //     })
            setWorkout(workouts);
        }
        getWorkouts();
    }, []);
    // console.log(workout);
    

    const useStyles = makeStyles(theme => ({
        container: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            border: '2px solid #d1d1d1',
            borderRadius: "5px",
            width: 400,
            height: 50,
            margin: '20px auto',
            boxShadow: '0 2px 5px 1px rgba(90, 89, 136, 0.12)'
        },
        input: {
            display: 'none',
        },
    }));
    const classes = useStyles(1);


    return (
        <div>
            <h2>My Workout List</h2>
            {workout.map(workOut => {
                return(
                    <div className={classes.container} key={workOut.id}>

                    <WorkoutCard key={workOut.id} workout={workOut} />
                    
                    <Link to={`/workout/${workOut.id}`}>
                    <EditIcon/>
                    </Link>
                    </div>
                )}
            )}
            <div>
            <Link to="/AddWorkOut"><button className="add-button"> + Add New Exercise</button></Link>
            </div>
        </div>
    )
}

export default WorkoutList;

export {workouts};


// This is where you map over WorkoutCard to display the data that is being shown. 
