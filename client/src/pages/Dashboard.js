import React, { Component } from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
//import Chart from "../components/BPChart";
//import BPdata from "../data.json";
import Form from "../components/Form";
import Table from "../components/Table";
import axios from "axios";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      BPdata: {
        dayOfTheWeek: "",
        time: "",
        diastolic: "",
        systolic: "",
        pulserate: "",
        weight: ""
      },
      data: [],
      editIdx: -1
    };
    // this.handleRemove = this.handleRemove.bind(this);
  }

  componentDidMount() {
    this.getChartData();
  }

  getChartData() {
    axios
      .get("/api/bplogchart/all")
      .then(res => {
        this.setState({
          data: res.data
        });
        //console.log(BPdata);
        //console.log(BPdata[2]);
      })
      .catch(err => console.log(err));
    /*
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
    }); */
  }

  //BPInput An BPTable//
  //componentDidMount() {
  // this.handleChange();
  //}
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
      .put("/api/bplogchart/" + this.state.editIdx, {
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
      .delete("/api/bplogchart/" + id)
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
          .post("/api/bplogchart/" + this.state.editIdx, this.state.data)
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
          <Container className="dashboard-container">
            <h1 className="text-center">My Blood Pressure Log</h1>
            <hr />
            <Row>
              <Col size="md-8">
                <Form onSubmit={this.onSubmit} />
                <h2 className="h2">Personal Information Log</h2>
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
                      name: "Time",
                      prop: "time"
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
                      prop: "pulserate",
                      name: "Pulse Rate"
                    },
                    {
                      name: "Weight",
                      prop: "weight"
                    }
                  ]}
                />
              </Col>
            </Row>
            <Row>
              <Col size="md-6">
                <hr />
               {/* <h2 className="h2">BP Chart</h2>
                {/* <Chart className="chart"
                  chartData={this.state.chartData}
                  week="1"
                  legendPosition="bottom"
                />
                  */}
              </Col>
            </Row>
          </Container>
        </div>
      </section>
    );
  }
}

export default Dashboard;
