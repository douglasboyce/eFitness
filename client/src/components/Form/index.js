import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
const formInput = {
  width: '50%',
}
class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      diastolic: "",
      systolic: "",
      pulserate: "",
      weight: "",
      dayOfTheWeek: ""
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
        diastolic: "",
        systolic: "",
        pulserate: "",
        weight: "",
        dayOfTheWeek: ""
      });
    }

  render() {
    return (
      <div>
      <form  style={formInput}>
         <TextField
          name="dayOfTheWeek"
          helperText="Enter day of the Week"
          label="Day Of The Week"
          value={this.state.dayOfTheWeek}
          onChange={e => this.change(e)}

        />
        <br />
        <TextField
          name="systolic"
          helperText="Enter your systolic"
          label="Systolic"
          value={this.state.systolic}
          onChange={e => this.change(e)}
        />
        <br />
        <TextField
          name="diastolic"
          helperText="Enter your diastolic"
          label="Diastolic"
          value={this.state.diastolic}
          onChange={e => this.change(e)}
        />
        <br />
        <TextField
          name="pulserate"
          helperText="Enter your pulse rate"
          label="Pulserate"
          value={this.state.pulserate}
          onChange={e => this.change(e)}
          type="pulserate"
        />
        <br />
        
   
        <br />
        <TextField
          name="weight"
          helperText="Enter your weight"
          label="Weight"
          value={this.state.weight}
          onChange={e => this.change(e)}
          type="weight"
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
export default  Form;