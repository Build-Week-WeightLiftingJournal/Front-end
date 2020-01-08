import React from "react";
import {makeStyles} from "@material-ui/core";
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import EditIcon from '@material-ui/icons/Edit';
import {Link} from "react-router-dom"

const WorkoutCard = ({workout}) => {


    return (
        <div className="workout-card">
            <p>{workout.name}</p>
            <Link to={`/workout/${workout.id}`}><EditIcon color="disabled"/> </Link>
        </div>
    )
}

export default WorkoutCard;