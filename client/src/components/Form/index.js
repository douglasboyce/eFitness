import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      dayOfTheWeek: "",
      dayOfTheWeekError: "",
      time: "",
      timeError: "",
      systolic: "",
      systolicError: "",
      diastolic: "",
      diastolicError: "",
      pulserate: "",
      pulserateError: "",
      weight: "",
      weightError: ""
    };
  }

  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  validate = () => {
    let isError = false;
    const errors = {
      dayOfTheWeekError: "",
      timeError: "",
      systolicError: "",
      diastolicError: "",
      pulserateError: "",
      weightError: ""
    };

    if (this.state.dayOfTheWeek === "") {
      isError = true;
      errors.dayOfTheWeekError = "Days field can not be empty!";
    }
    if (this.state.time === "") {
      isError = true;
      errors.timeError = "Time field can not be empty!";
    }
    if (this.state.systolic === "") {
      isError = true;
      errors.systolicError = "systolic field can not be empty!";
    }
    if (this.state.diastolic === "") {
      isError = true;
      errors.diastolicError = "Diastolic field  can not be empty!";
    }

    if (this.state.pulserate === "") {
      isError = true;
      errors.pulserateError = "Pulse rate field can not be empty!";
    }
    if (this.state.weight === "") {
      isError = true;
      errors.weightError = "Weight field  can not be empty!";
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
        dayOfTheWeek: "",
        dayOfTheWeekError: "",
        time: "",
        timeError: "",
        systolic: "",
        systolicError: "",
        diastolic: "",
        diastolicError: "",
        pulserate: "",
        pulserateError: "",
        weight: "",
        weightError: ""
      });
    }
  };
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <TextField
            name="dayOfTheWeek"
            label="Enter day of the Week"
            floatinglabeltext="Day Of The Week"
            value={this.state.dayOfTheWeek}
            helperText={this.state.dayOfTheWeekError}
            onChange={e => this.change(e)}
            type="text"
            pattern="[A-Za-z]"
            required
            error = {this.state.dayOfTheWeekError ? true : false}
          />
          <TextField
            name="time"
            label="Enter time"
            floatinglabeltext="Time"
            value={this.state.time}
            onChange={e => this.change(e)}
            helperText={this.state.timeError}
            type="text"
            pattern="[a-zA-Z0-9-]"
            required
            error = {this.state.timeError ? true : false}
          />
          <TextField
            name="systolic"
            label="Systolic"
            floatinglabeltext="Systolic"
            value={this.state.systolic}
            onChange={e => this.change(e)}
            helperText={this.state.systolicError}
            type="number"
            pattern="[0-9-]"
            required
            error = {this.state.systolicError ? true : false}
          />
          <TextField
            name="diastolic"
            label="Diastolic"
            floatinglabeltext="Diastolic"
            value={this.state.diastolic}
            onChange={e => this.change(e)}
            helperText={this.state.diastolicError}
            type="number"
            pattern="[0-9-]"
            required
            error = {this.state.diastolicError ? true : false}
          />
          <TextField
            name="pulserate"
            label="Pulse rate"
            floatinglabeltext="Pulse rate"
            value={this.state.pulserate}
            onChange={e => this.change(e)}
            helperText={this.state.pulserateError}
            type="number"
            pattern="[0-9-]"
            required
            error = {this.state.pulserateError ? true : false}
          />
          <TextField
            name="weight"
            label="Weight"
            floatinglabeltext="Weight"
            value={this.state.weight}
            onChange={e => this.change(e)}
            helperText={this.state.weightError}
            type="text"
            pattern="[a-zA-Z0-9-]"
            required
            error = {this.state.weightError ? true : false}
          />
          <Button className="button" onClick={e => this.onSubmit(e)}>
            Submit
          </Button>
        </form>
      </div>
    );
  }
}
export default Form;
