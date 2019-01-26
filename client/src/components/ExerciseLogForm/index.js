import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class MyForm extends React.Component {
  constructor() {
    super();
    this.state = {
      exerciseDay: "",
      exerciseName: "",      
      duration: "",
      numberOfSets: "",
      numberOfReps: ""
    };
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
      exerciseDay: "",
      exerciseName: "",      
      duration: "",
      numberOfSets: "",
      numberOfReps: ""
    });
  };

  render() {
    return (
      <div>
        <form>
          <TextField
            name="exerciseDay"
            label="Enter exercise Day"
            value={this.state.exerciseDay}
            onChange={e => this.change(e)}
          />
          <TextField
            name="exerciseName"
            label="Enter exerciseName"
            value={this.state.exerciseName}
            onChange={e => this.change(e)}
          />
          <TextField
            name="duration"
            label="Enter the duration"
            value={this.state.duration}
            onChange={e => this.change(e)}
          />
          <TextField
            name="numberOfSets"
            label=" Enter Sets"
            value={this.state.numberOfSets}
            onChange={e => this.change(e)}
          />
          <TextField
            name="numberOfReps"
            label=" Enter Reps"
            value={this.state.numberOfReps}
            onChange={e => this.change(e)}
          />
          <Button className="button" onClick={e => this.onSubmit(e)}>
            Submit
          </Button>
        </form>
      </div>
    );
  }
}
export default MyForm;
