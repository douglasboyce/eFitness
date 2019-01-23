
import React, { Component } from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Chart from "../components/BPChart";
import Form from "../components/Form";
import Table from "../components/Table";
var axios = require("axios");

class BPLog extends Component {
  constructor() {
    super();
    this.state = {
      Systolic: [],
      Diastolic: [],
      data: [],
      editIdx: -1
    };
    // this.handleRemove = this.handleRemove.bind(this);
  }

  componentWillMount() {
    this.getChartData();
  }

  getChartData() {
    axios
    .get("/bplogchart/all")
    .then(res => {
      console.log(res);
    })
    .catch(err => console.log(err));

    this.setState({
      chartData1:{
        labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        datasets:[
          {
            label:'Systolic Readings for the Week',
            data:[120, 122, 118, 120, 130, 117, 132],
            backgroundColor:[
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 159, 64, 0.6)',
              'rgba(255, 99, 132, 0.6)'

            ]
          }
        ]
      },
      chartData2:{
        labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        datasets:[
          {
            label:'Diastolic Readings for the Week',
            data:[
              118,
              122,
              128,
              128,
              119,
              127,
              130
            ],
            backgroundColor:[
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 159, 64, 0.6)',
              'rgba(255, 99, 132, 0.6)'
            ]
          }
        ]
      }
    })
  }
  //BPInput An BPTable//
  //componentDidMount() {
  // this.handleChange();
  //}
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
        console.log(this.state, "this the state");
        axios
          .put("/api/bplogchart/" + this.state.editIdx, this.state.data)
          .then(res => {
            console.log(res);
          })
          .catch(err => console.log(err));
      }
    );
    const id = this.state.data.id;
    console.log(id, "this update route");
    axios
      .post("/api/bplogchart/" + id)
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err));
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
        <Container className="BPLog">
          <Row>
            <Col size="md-12">
              <h1 className="text-center">Blood Pressure Log</h1>
            </Col>
          </Row>
          <div className="table-and-form">
              <Row>
                <Col size="md-12">
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
              <Row>
              <Col size="md-6">
                <div className="form">
                  <Form onSubmit={this.onSubmit} />
                </div>
              </Col>
              <Row><Col size="md-6"></Col></Row>
          <div className="chart-div">
            <Row>
              <Col size="md-6">
                <hr />
                <h2 className="h2">BP Chart</h2>
                <Chart
                  chartData={this.state.chartData1}
                  week="1"
                  legendPosition="bottom" />
              </Col>
              <Col size="md-6">
                <hr />
                <h2 className="h2">BP Chart</h2>
                <Chart
                  chartData={this.state.chartData2}
                  week="1"
                  legendPosition="bottom" />
              </Col>
              </Row>
            </div>
          </Row>
        </div>
      </Container>
    </div>
    )
 }
}

export default BPLog;
