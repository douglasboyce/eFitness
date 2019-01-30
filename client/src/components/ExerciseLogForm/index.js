import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class MyForm extends React.Component {
  constructor() {
    super();
    this.state = {
      exerciseDay: "",
      exerciseDayError: "",
      exerciseName: "",
      exerciseNameError: "",
      pounds: "",
      poundsError: "",
      duration: "",
      durationError: "",
      numberOfSets: "",
      numberOfSetsError: "",
      numberOfReps: "",
      numberOfRepsError: ""
    };
  }

  change = e => {
    console.log("change()");
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  validate = () => {
console.log(this.state);
    let isError = false;
    const errors = {
      exerciseDayError: "",
      exerciseNameError: "",
      poundsError: "",
      durationError: "",
      numberOfSetsError: "",
      numberOfRepsError: ""
    };

    if (this.state.exerciseDay === "") {
      isError = true;
      errors.exerciseDayError = "Exercise day field can not be empty!";
    }
    if (this.state.exerciseName === "") {
      isError = true;
      errors.exerciseNameError = "Exercise name  field can not be empty!";
    }
    if (this.state.duration === "") {
      isError = true;
      errors.durationError = "Duration field  can not be empty!";
    }
    if (this.state.pounds === "") {
      isError = true;
      errors.poundsError = "Pounds field can not be empty!";
    }
    if (this.state.numberOfSets === "") {
      isError = true;
      errors.numberOfSetsError = "Number of sets  field can not be empty!";
    }
    if (this.state.numberOfReps === "") {
      isError = true;
      errors.numberOfRepsError = "Number of reps field  can not be empty!";
    }
    this.setState({
      ...this.state,
      ...errors
    });

    return isError;
  };

  onSubmit = e => {
    e.preventDefault();
    const err = this.validate();
    if (!err) {
      this.props.onSubmit(this.state);
      // clear form
      this.setState({
        exerciseDay: "",
        exerciseDayError: "",
        exerciseName: "",
        exerciseNameError: "",
        pounds: "",
        poundsError: "",
        duration: "",
        durationError: "",
        numberOfSets: "",
        numberOfSetsError: "",
        numberOfReps: "",
        numberOfRepsError: ""
      });
    }
  };

  render() {
    return (
      <div>
        <form className="form" onSubmit={this.onSubmit}>
          <TextField
            name="exerciseDay"
            label="Enter exercise Day"
            floatinglabeltext="Exercise Day"
            value={this.state.exerciseDay}
            onChange={e => this.change(e)}
            helperText={this.state.exerciseDayError}
            type="text"
            pattern="[A-Za-z]"
            required
            error = {this.state.exerciseDayError ? true : false}
          />
          <TextField
            name="exerciseName"
            label="Enter exercise Name"
            floatinglabeltext="Exercise Name"
            value={this.state.exerciseName}
            onChange={e => this.change(e)}
            helperText={this.state.exerciseNameError}
            type="text"
            pattern="[A-Za-z]"
            required
            error = {this.state.exerciseNameError ? true : false}
          />
          <TextField
            name="pounds"
            label="Enter Pounds"
            floatinglabeltext="Enter Pounds"
            value={this.state.pounds}
            onChange={e => this.change(e)}
            helperText={this.state.poundsError}
            type="text"
            pattern="[a-zA-Z0-9-]"
            required
            error = {this.state.poundsError ? true : false}
          />
          <TextField
            name="duration"
            label="Enter duration"
            floatinglabeltext="Enter Duration"
            value={this.state.duration}
            onChange={e => this.change(e)}
            helperText={this.state.durationError}
            type="text"
            pattern="[a-zA-Z0-9-]"
            required
            error = {this.state.durationError ? true : false}
          />
          <TextField
            name="numberOfSets"
            label=" Enter Sets"
            floatinglabeltext="Enter number Of Sets"
            value={this.state.numberOfSets}
            onChange={e => this.change(e)}
            helperText={this.state.numberOfSetsError}
            type="number"
            pattern="[0-9-]"
            required
            error = {this.state.numberOfSetsError ? true : false}
          />
          <TextField
            name="numberOfReps"
            label=" Enter Reps"
            floatinglabeltext="Enter number Of Reps "
            value={this.state.numberOfReps}
            onChange={e => this.change(e)}
            helperText={this.state.numberOfRepsError}
            type="number"
            pattern="[0-9-]"
            required
            error = {this.state.numberOfRepsError ? true : false}
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
