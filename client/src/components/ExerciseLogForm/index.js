import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class MyForm extends React.Component {
 constructor() {
   super();
   this.state = {
     day: "",
     typeOfExercise: "",
     duration: "",
     reps: "",
     sets: ""
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
     typeOfExercise: "",
     duration: "",
     reps: "",
     sets: ""
   });
 };

 render() {
   return (
     <div>
       <form>
         <TextField
           name="day"
           label="Enter todays day"
           value={this.state.day}
           onChange={e => this.change(e)}
         />
         <TextField
           name="typeOfExercise"
           label="Enter  type Of Exercise"
           value={this.state.typeOfExercise}
           onChange={e => this.change(e)}
         />
         <TextField
           name="duration"
           label="Enter the duration"
           value={this.state.duration}
           onChange={e => this.change(e)}
           type="duration"
         />
         <TextField
           name="sets"
           label=" Enter Sets"
           value={this.state.sets}
           onChange={e => this.change(e)}
         />
         <TextField
           name="reps"
           label=" Enter Reps"
           value={this.state.reps}
           onChange={e => this.change(e)}
           type="reps"
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