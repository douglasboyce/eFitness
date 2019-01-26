import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      dayOfTheWeek: "",         
      systolic: "",
      diastolic: "",
      pulserate: "",
      weight: ""
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
      dayOfTheWeek: "",        
      time: "",
      systolic: "",
      diastolic: "",
      pulserate: "",
      weight: ""
    });
  };

  render() {
    return (
      <div>
        <form style={{ backgroundColor: "#C0C0C0" }}>
          <TextField
            name="dayOfTheWeek"
            label="Enter day of the Week"
            value={this.state.dayOfTheWeek}
            onChange={e => this.change(e)}
          />
          <TextField
            name="systolic"
            label="Systolic"
            value={this.state.systolic}
            onChange={e => this.change(e)}
          />
          <TextField
            name="diastolic"
            label="Diastolic"
            value={this.state.diastolic}
            onChange={e => this.change(e)}
          />
          <TextField
            name="pulserate"
            label="Pulserate"
            value={this.state.pulserate}
            onChange={e => this.change(e)}
          />
          <TextField
            name="weight"
            label="Weight"
            value={this.state.weight}
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
export default Form;
