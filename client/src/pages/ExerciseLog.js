import React, { Component } from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Form from "../components/ExerciseLogForm";
import Table from "../components/ExerciseTable";
import axios from "axios";



class ExerciseLog extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      editIdx: -1
    };
    // this.handleRemove = this.handleRemove.bind(this);
  }

  componentDidMount() {
   this.getExerciseData();
  }
getExerciseData() {
    axios
      .get("/api/exerciselog/all")
      .then(res => {
        this.setState({
          data: res.data
        });
        //console.log(BPdata);
        //console.log(BPdata[2]);
      })
      .catch(err => console.log(err));
    }
      handleChange = (event, label) => {
        let data = this.state.data;
        let index = data.findIndex(element => {
          return element._id === this.state.editIdx;
        });
        //console.log(index, "update index");
        data[index][label] = event.target.value;
        //data[this.state.editIdx][label] = event.target.value;
        this.setState({ data });
        console.log(this.state.editIdx, "edit index");
        axios
          .put("/api/exerciselog/" + this.state.editIdx, {
            data
          })
          .then(res => {
            console.log(res);
          })
          .catch(err => console.log(err));
      };
    
      handleRemove = id => {
        console.log(id, "this is id");
        axios
          .delete("/api/exerciselog/" + id)
          .then(res => {
            console.log(res);
          })
          .catch(err => console.log(err));
        this.setState(state => ({
          data: state.data.filter(row => row._id !== id)
        }));
      };
      onSubmit = submission => {
        this.setState(
          {
            data: [...this.state.data, submission]
          },
          () => {
            console.log(this.state, "this the state");
            axios
              .post("/api/exerciselog/" + this.state.editIdx, this.state.data)
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
    <section className="exe-section">
      <div className="container">
        <Container className="exe-container">
              <h1 className="text-center">Exercise Log</h1>
              <hr />
            <Row>
              <Col size="md-6">
                <Form onSubmit={this.onSubmit} />
            <h2 className="h2">Exercise Log Table</h2>
                <Table
                  handleRemove={this.handleRemove}
                  startEditing={this.startEditing}
                  editIdx={this.state.editIdx}
                  stopEditing={this.stopEditing}
                  handleChange={this.handleChange}
                  data={this.state.data}
                  header={[
                    {
                      name: "Exercise Day",
                      prop: "exerciseDay"
                    },
                    {
                      name: "Exercise Name",
                      prop: "exerciseName"
                    },
                    {
                      name: "Pounds",
                      prop: "pounds"
                    },
                    {
                      name: "Duration",
                      prop: "duration"
                    }, 
                    {
                      name: "Number Of Sets",
                      prop: "numberOfSets"
                    },
                    {
                      name: "Number Of Reps",
                      prop: "numberOfReps"
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

export default ExerciseLog;
