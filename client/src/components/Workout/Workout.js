import React from "react";
import {useState, useEffect} from "react";
import { workouts } from "./WorkoutList";
import axios from "axios";
import {Link} from "react-router-dom"


const Workout = props => {
    const [workout, setWorkout] = useState([])
    console.log(props);
    

    useEffect(() => {
        const id = props.match.params.id

        // axios
        //     .get(`${id}`)
        //     .then(response => {
        //         setWorkout(response.);
        //      })
        //     .catch(error => {
        //         console.error(error);
        //     });

          setWorkout(workouts[id]) 
    }, [props.match.params.id])

   console.log(workouts);

   const editWorkout = e => {
    e.preventDefault();
    props.history.push(`/updateworkout/${workout.id}`);
  };

  const deleteWorkout = e => {
      e.preventDefault();
      // delete request
      axios
        .delete(`workout/${workout.id}`)
        .then(res => {
            setWorkout(res.data)
            props.history.push("/workout")
        })
        .catch(err => console.log(err))
    }

    return (
        <div>
            <Link to="/workout"><button className="back-button">go back</button></Link>
            <div className="workout-container">
                <h3>{`${workout.name}`}</h3>
                <p>{`Weight: ${workout.weight} lbs`}</p>
                <p>{`Reps Completed: ${workout.reps}`}</p>
                <p>{`Date: ${workout.date}`}</p>
                <p>{`Region: ${workout.region}`}</p>

                <button className="submit-button">Edit</button>
                <button className="delete-button">Delete</button>
            </div>
        </div>
    )
}

export default Workout;