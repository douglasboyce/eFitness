import React, { Component } from 'react';
// import API from "../utils/API";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Chart from "../components/BPChart"
import BPdata from "../data.json"

class Dashboard extends Component {
  constructor(){
    super();
    this.state = {
     BPdata
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
          <Chart chartData={this.state.chartData} week="1" legendPosition="bottom"/>
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
