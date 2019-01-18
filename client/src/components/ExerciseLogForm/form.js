import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
const formInput = {
  width: '50%',
}
class MyForm extends React.Component {
  constructor() {
    super();
    this.state = {
      day: "",
      typeOfExercise: "",
      duration: "",
      reps: "",
      sets: ""
    }
  }

  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
   // const err = this.validate();
   // if (!err) {
      this.props.onSubmit(this.state);
      // clear form
      this.setState({
        day: "",
        typeOfExercise: "",
        duration: "",
        reps: "",
        sets: ""
      });
    }

  render() {
    return (
      <div>
      <form  style={formInput}>
         <TextField
          name="sets"
          helperText="Enter sets"
          label="Sets"
          value={this.state.sets}
          onChange={e => this.change(e)}

        />
        <br />
        <TextField
          name="day"
          helperText="Enter todays day"
          label="Day"
          value={this.state.day}
          onChange={e => this.change(e)}
        />
        <br />
        <TextField
          name="typeOfExercise"
          helperText="Enter  typeOfExercise"
          label="Types Of Exercise"
          value={this.state.typeOfExercise}
          onChange={e => this.change(e)}
        />
        <br />
        <TextField
          name="duration"
          helperText="Enter the duration"
          label="Duration"
          value={this.state.duration}
          onChange={e => this.change(e)}
          type="duration"
        />
        <br />
        
   
        <br />
        <TextField
          name="reps"
          helperText="Enter  reps"
          label="Reps"
          value={this.state.reps}
          onChange={e => this.change(e)}
          type="reps"
        />
        <br />
        <Button onClick={e => this.onSubmit(e)}>
          Submit
        </Button>
      </form>
      </div>
    );
  }
}
export default  MyForm;