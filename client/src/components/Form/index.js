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
      pulseratError: "",
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
      pulseratError: "",
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

    if (this.state.pulserat === "") {
      isError = true;
      errors.pulseratError = "Pulserat field can not be empty!";
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
        pulseratError: "",
        weight: "",
        weightError: ""
      });
    }
  };
  render() {
    return (
      <div>
        <form style={{ backgroundColor: "#C0C0C0" }} onSubmit={this.onSubmit}>
          <TextField
            name="dayOfTheWeek"
            label="Enter day of the Week"
            floatinglabeltext="Day Of The Week"
            value={this.state.dayOfTheWeek}
            errorText={this.state.dayOfTheWeekError}
            floatingLabelFixed
            onChange={e => this.change(e)}
            type="text"
            pattern="[A-Za-z]"
            required
          />
          <TextField
            name="time"
            label="Enter time"
            floatinglabeltext="Time"
            value={this.state.time}
            onChange={e => this.change(e)}
            errorText={this.state.timeError}
            floatingLabelFixed
            type="text"
            pattern="[a-zA-Z0-9-]"
            required
          />
          <TextField
            name="systolic"
            label="Systolic"
            floatinglabeltext="Systolic"
            value={this.state.systolic}
            onChange={e => this.change(e)}
            errorText={this.state.systolicError}
            floatingLabelFixed
            type="number"
            pattern="[0-9-]"
            required
          />
          <TextField
            name="diastolic"
            label="Diastolic"
            floatinglabeltext="Diastolic"
            value={this.state.diastolic}
            onChange={e => this.change(e)}
            errorText={this.state.diastolicError}
            floatingLabelFixed
            type="number"
            pattern="[0-9-]"
            required
          />
          <TextField
            name="pulserate"
            label="Pulserate"
            floatinglabeltext="Pulserate"
            value={this.state.pulserate}
            onChange={e => this.change(e)}
            errorText={this.state.pulseratError}
            floatingLabelFixed
            type="number"
            pattern="[0-9-]"
            required
          />
          <TextField
            name="weight"
            label="Weight"
            floatinglabeltext="Weight"
            value={this.state.weight}
            onChange={e => this.change(e)}
            errorText={this.state.weightError}
            floatingLabelFixed
            type="text"
            pattern="[a-zA-Z0-9-]"
            required
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
