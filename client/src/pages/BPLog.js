import React, { Component } from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Form from "../components/BPLogForm";
import Table from "../components/BPTable";
import axios from "axios";

class BPLog extends Component {
 constructor() {
   super();
   this.state = {
     data: [],
     editIdx: -1
   };
   // this.handleRemove = this.handleRemove.bind(this);
 }

 componentWillMount() {
   this.handleGetResults();
 }

 handleGetResults() {
   alert("I am here");
 }

 handleChange = (event, label) => {
   let data = this.state.data;
   data[this.state.editIdx][label] = event.target.value;
   this.setState({ data });
 };

 handleRemove = id => {
   console.log(id, "this is id");
   axios
     .delete("/api/bplogchart/" + id)
     .then(res => {
       console.log(res);
     })
     .catch(err => console.log(err));
   this.setState(state => ({
     data: state.data.filter((row, j) => j !== id)
   }));
 };
 onSubmit = submission => {
   this.setState(
     {
       data: [...this.state.data, submission]
     },
     () => {
       console.log(this.state.data, "this the state");
       axios
         .put("/api/bplogchart/" + this.state.editIdx, this.state.data)
         .then(res => {
           console.log(res);
         })
         .catch(err => console.log(err));
     }
   );
   const id = this.state.id;
   console.log(id, "this update route");
   //});
 };
 startEditing = id => {
   this.setState({ editIdx: id });
 };

 stopEditing = () => {
   this.setState({ editIdx: -1 });
 };

 //BPInput An BPTable//
 render() {
   return (
   <section className="section">
     <div className="container">
       <Container className="exe-container">
             <h1 className="text-center">Blood Pressure Log</h1>
             <hr />
           <Row>
             <Col size="md-12">
               <Form onSubmit={this.onSubmit} />
               <br/><br/>
           <h2 className="h2">Blood Pressure Log Table</h2>
               <Table
                 handleRemove={this.handleRemove}
                 startEditing={this.startEditing}
                 editIdx={this.state.editIdx}
                 stopEditing={this.stopEditing}
                 handleChange={this.handleChange}
                 data={this.state.data}
                 header={[
                   {
                     name: "Day",
                     prop: "day"
                   },
                   {
                     name: "Systolic",
                     prop: "systolic"
                   },
                   {
                     name: "Diastolic",
                     prop: "diastolic"
                   },
                   {
                     name: "Pulse Rate",
                     prop: "pulserate"
                   },
                   {
                     name: "Weight",
                     prop: "weight"
                   }
                 ]}
               />
             </Col>
           </Row>
       </Container>
     </div>
     </section>
   );
 }
}

export default BPLog;
