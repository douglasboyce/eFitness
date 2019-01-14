import React from "react";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
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
          hintText="Enter day of the Week"
          floatingLabelText="Day Of The Week"
          value={this.state.dayOfTheWeek}
          onChange={e => this.change(e)}
          floatingLabelFixed

        />
        <br />
        <TextField
          name="diastolic"
          hintText="Enter your diastolic"
          floatingLabelText="Diastolic"
          value={this.state.diastolic}
          onChange={e => this.change(e)}
          floatingLabelFixed
        />
        <br />
        <TextField
          name="systolic"
          hintText="Enter your systolic"
          floatingLabelText="Systolic"
          value={this.state.systolic}
          onChange={e => this.change(e)}
          floatingLabelFixed
        />
        <br />
        <TextField
          name="pulserate"
          hintText="Enter your pulserate"
          floatingLabelText="Pulserate"
          value={this.state.pulserate}
          onChange={e => this.change(e)}
          type="pulserate"
          floatingLabelFixed
        />
        <br />
        
   
        <br />
        <TextField
          name="weight"
          hintText="Enter your weight"
          floatingLabelText="Weight"
          value={this.state.weight}
          onChange={e => this.change(e)}
          type="weight"
          floatingLabelFixed
        />
        <br />
        <RaisedButton label="Submit" onClick={e => this.onSubmit(e)} primary />
      </form>
      </div>
    );
  }
}
export default  Form;