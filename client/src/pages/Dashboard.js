import React, { Component } from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

import Chart from "../components/BPChart";
import BPdata from "../data.json";
import Form from "../components/Form";
import Table from "../components/Table";
import axios from "axios";
//import API from "../../utils/API";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      BPdata,
      data: [],
      editIdx: -1
    };
    // this.handleRemove = this.handleRemove.bind(this);
  }

  componentWillMount() {
    this.getChartData();
  }

  getChartData() {
    // Ajax calls here
    // API.getBPData()
    //   .then(res => this.setState({ BPData: res.data }))
    //   .catch(err => console.log(err));
    const systolic = BPdata;
    console.log(systolic);

    this.setState({
      chartData: {
        labels: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        datasets: [
          {
            label: "BP for the Week",
            data: [120, 128, 122, 118, 124, 132],
            backgroundColor: [
              "rgba(255, 99, 132, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 206, 86, 0.6)",
              "rgba(75, 192, 192, 0.6)",
              "rgba(153, 102, 255, 0.6)",
              "rgba(255, 159, 64, 0.6)",
              "rgba(255, 99, 132, 0.6)"
            ]
          }
        ]
      }
    });
  }
  //BPInput An BPTable//
  //componentDidMount() {
  // this.handleChange();
  //}
  handleChange = (event, label) => {
    /*API.getBPLogChart()
      .then(res =>
        this.setState({
          BPList: res.data,
          diastolic: "",
          systolic: "",
          pulserate: "",
          weight: "",
          dayOfTheWeek: ""
        })
      )
      .catch(err => console.log(err)); */
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
    this.setState({
      data: [...this.state.data, submission]
    });
    console.log(this.state);

    const id = this.state.id;
    console.log(id, "this update route");
    axios
      .put("/api/bplogchart/" + id)
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err));

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
      <div className="container">
        <Container className="dashboard">
          <Row>
            <Col size="md-12">
              <h1 className="text-center">myDashboard</h1>
            </Col>
          </Row>
          <div className="table-and-form">
            <Row>
              <Col size="md-6">
                <h2 className="h2">Personal Information</h2>
                <div className="form">
                  <Form onSubmit={this.onSubmit} />
                </div>
                <div className="table1">
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
                        prop: "dayOfTheWeek"
                      },
                      {
                        name: "Diastolic",
                        prop: "diastolic"
                      },
                      {
                        name: "Systolic",
                        prop: "systolic"
                      },
                      {
                        prop: "pulserate",
                        name: "Pulserate"
                      },
                      {
                        name: "Weight",
                        prop: "weight"
                      }
                    ]}
                  />
                </div>
              </Col>
            </Row>
          </div>
          <div className="table-and-form2">
            <Row>
              <Col size="md-6">
                <h2 className="h2">Exercise Log</h2>
                <div className="form2">
                  <Form
                    onSubmit={submission =>
                      this.setState({
                        data: [...this.state.data, submission]
                      })
                    }
                  />
                </div>
                <div className="table2">
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
                        name: "Type Of Exercise",
                        prop: "typeOfExercise"
                      },
                      {
                        name: "Duration",
                        prop: "duration"
                      },
                      {
                        prop: "Reps",
                        name: "reps"
                      },
                      {
                        name: "Sets",
                        prop: "sets"
                      }
                    ]}
                  />
                </div>
              </Col>
            </Row>
          </div>
          <div className="chart-div">
            <Row>
              <Col size="md-6">
                <hr />
                <h2 className="h2">BP Chart</h2>
                <Chart
                  chartData={this.state.chartData}
                  week="1"
                  legendPosition="bottom"
                />
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    );
  }
}

export default Dashboard;
