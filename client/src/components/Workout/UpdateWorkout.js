import React, {useState, useEffect} from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import axios from "axios";
// import Button from '@material-ui/core/Button';

const UpdateWorkout = (props) => {
    const useStyles = makeStyles(theme => ({
        container: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            background: 'white',
            width: 400,
            height: 530,
            margin: '50px auto',
            boxShadow: "0 5px 5px 5px rgba(90, 89, 136, 0.12)"
        },
        textField: {
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
            width: 300,
            border: "green"
        },
        button: {
            margin: theme.spacing(1),
            width: 300
        },
        input: {
            display: 'none',
        },
    }));
    const classes = useStyles(1);

    const [workout, setWorkout] = useState(
        {
            name: "",
            region: "",
            reps: "",
            weight: "",
            date: ""
        }
    );

    useEffect(() => {
        axios
            .get(`/workouts/${props.match.params.id}`)
            .then(res => {
                setWorkout(res.data)
            })
            .catch(err => console.log(err))
    }, [props.match.params.id])

    const handleChanges = e => {
        e.preventDefault();
        setWorkout({
            ...workout, 
            [e.target.name]: e.target.value
        });
    }

    const submitForm = e => {
        e.preventDefault();
        axios
            .put(`/workouts/${workout.id}`, workout)
            .then(res => {
                props.history.push("/workouts")
                setWorkout(res.data)
            })
    }

    if (!workout){
        return <div>Loading workout information...</div>
    }

    return (
        <form onSubmit={submitForm} className={classes.container}>
            <h2>UPDATE WORKOUT</h2>
            <div>
                <TextField
                    id="name"
                    required="true"
                    className={classes.textField}
                    label="Workout Name"
                    margin="normal"
                    variant="outlined"
                    name="name"
                    onChange={handleChanges}
                    value={workout.name}
                />
            </div>
            <div>
                <TextField 
                    id="region"
                    required="true"
                    className={classes.textField}
                    label="Muscle Region"
                    margin="normal"
                    variant="outlined"
                    onChange={handleChanges}
                    name="region"
                    value={workout.region}
                />
            </div>
            <div>
                <TextField 
                    id="reps"
                    required="true"
                    className={classes.textField}
                    label="Reps"
                    type="number"
                    inputProps={
                        {
                            min: "0",
                            step: "1"
                        }
                    }
                    onInput={workout.reps=Math.round(workout.reps)}
                    margin="normal"
                    variant="outlined"
                    onChange={handleChanges}
                    name="reps"
                    value={workout.reps}
                />
            </div>
            <div>
                <TextField 
                    id="weight"
                    className={classes.textField}
                    label="lbs"
                    type="number"
                    inputProps={
                        {
                            min: "0",
                            step: "1"
                        }
                    }
                    onInput={workout.weight=parseInt(workout.weight, 10)}
                    margin="normal"
                    variant="outlined"
                    onChange={handleChanges}
                    name="weight"
                    value={workout.weight}
                />
            </div>
            <div>
                <TextField 
                    id="date"
                    required="true"
                    className={classes.textField}
                    type="date"
                    margin="normal"
                    variant="outlined"
                    name="date"
                    onChange={handleChanges}
                    value={workout.date}
                />
            </div>
            <button className="submit-button">Save</button>
        </form>
    )
}

export default UpdateWorkout;