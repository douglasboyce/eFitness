import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class MyForm extends React.Component {
 constructor() {
   super();
   this.state = {
     day: "",
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
     day: "",
     systolic: "",
     diastolic: "",
     pulserate: "",
     weight: ""
   });
 };

 render() {
   return (
     <div>
       <form style={{background: 'white', border: '5px'}}>
         <TextField
           name="day"
           label="Enter todays day"
           value={this.state.day}
           onChange={e => this.change(e)}
         />
         <TextField
           name="systolic"
           label="Enter  Systolic Rate"
           value={this.state.systolic}
           onChange={e => this.change(e)}
         />
         <TextField
           name="diastolic"
           label="Enter the diastolic rate"
           value={this.state.diastolic}
           onChange={e => this.change(e)}
         />
         <TextField
           name="pulserate"
           label=" Enter Pulse"
           value={this.state.pulserate}
           onChange={e => this.change(e)}
         />
         <TextField
           name="weight"
           label=" Enter Weight"
           value={this.state.weight}
           onChange={e => this.change(e)}
         />
         <br/><br/>
         <Button className="button" onClick={e => this.onSubmit(e)}>
           Submit
         </Button>
       </form>
     </div>
   );
 }
}
export default MyForm;