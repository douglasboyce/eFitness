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
        systolic: "",
        diastolic: "",
        pulserate: "",
        weight: ""
      });
    }

  render() {
    return (
      <div>
      <form  style={formInput}>
         <TextField
          name="weight"
          helperText="Enter weight"
          label="weight"
          value={this.state.weight}
          onChange={e => this.change(e)}

        />
        <br />
        <TextField
          name="day"
          helperText="Enter the day of the week"
          label="Day"
          value={this.state.day}
          onChange={e => this.change(e)}
        />
        <br />
        <TextField
          name="systolic"
          helperText="Enter  systolic rate"
          label="Systolic Rate"
          value={this.state.systolic}
          onChange={e => this.change(e)}
        />
        <br />
        <TextField
          name="diastolic"
          helperText="Enter the diastolic rate"
          label="Diastolic Rate"
          value={this.state.diastolic}
          onChange={e => this.change(e)}
          type="diastolic"
        />
        <br />
        
   
        <br />
        <TextField
          name="pulserate"
          helperText="Enter Pulse"
          label="Pulse"
          value={this.state.reps}
          onChange={e => this.change(e)}
          type="pulserate"
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