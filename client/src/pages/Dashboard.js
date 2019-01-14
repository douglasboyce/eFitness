import React, { Component } from 'react';
// import API from "../utils/API";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import BarExample from "../components/chart"
import Chart from "../components/BPChart"
import BPdata from "../data.json"
//
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
//import injectTapEventPlugin from "react-tap-event-plugin";
import {Table, Form} from "material-ui/Table";
//injectTapEventPlugin();

//
class Dashboard extends Component {
  constructor(){
    super();
    this.state = {
     BPdata,
     data: [],
     editIdx: -1
    }
  }

  componentWillMount(){
    this.getChartData();
  }

  getChartData(){
    // Ajax calls here
    // API.getBPData()
    //   .then(res => this.setState({ BPData: res.data }))
    //   .catch(err => console.log(err));
    const systolic  = BPdata;
    console.log(systolic);

    this.setState({
      chartData:{
        labels: ['Monday', 'Tuesday', 'Wednsday', 'Thursday', 'Friday', 'Saturday'],
        datasets:[
          {
            label:'BP for the Week',
            data:[
              120,
              128,
              122,
              118,
              124,
              132
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
      
    });
  } 
//BPInput An BPTable//

  handleRemove = i => {
    this.setState(state => ({
      data: state.data.filter((row, j) => j !== i)
    }));
  };

  startEditing = i => {
    this.setState({ editIdx: i });
  };

  stopEditing = () => {
    this.setState({ editIdx: -1 });
  };

  handleChange = (e, name, i) => {
    const { value } = e.target;
    this.setState(state => ({
      data: state.data.map(
        (row, j) => (j === i ? { ...row, [name]: value } : row)
      )
    }));
  };

//BPInput An BPTable//
render() {
  return (
    <div>

      <Container>
        <Row>
          <Col size="md-12">
            <h1 className="text-center">myDashboard</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-6">
          <h3>Personal Information</h3>
            BP Table Placeholder
        <MuiThemeProvider>
          <Form
            onSubmit={submission =>
              this.setState({
                data: [...this.state.data, submission]
              })}
          />
          <Table
            handleRemove={this.handleRemove}
            startEditing={this.startEditing}
            editIdx={this.state.editIdx}
            stopEditing={this.stopEditing}
            handleChange={this.handleChange}
            data={this.state.data}
            header={[
              {
              name: "Day Of The Week",
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
              },
            ]}
          />
      </MuiThemeProvider>

          </Col>
          <Col size="md-6">
          <h3>Exercise Log</h3>
            Exercise Log Placeholder
          </Col>
        </Row>
        <Row>
          <Col size="md-6">
          <hr/>
          <h3>BP Chart</h3>
<<<<<<< HEAD
            <BarExample />
=======
          <Chart chartData={this.state.chartData} week="1" legendPosition="bottom"/>
>>>>>>> b96d0d3412a8fc9dcf2654bda5bb8fe6cd27c1ec
          </Col>
          <Col size="md-6">
          <hr />
          <h3>Fitness / Outdoor Meet-Up</h3>
            Meet-up Group List
          </Col>
        </Row>
        </Container>


    </div>
    );
  };
};

export default Dashboard;
