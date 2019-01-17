import React, { Component } from 'react';
// import API from "../../../routes";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

import Chart from "../components/BPChart";
import BPdata from "../data.json";
import Form from "../components/Form";
import Table from "../components/Table";

class Dashboard extends Component {
  constructor(){
    super();
    this.state = {
     BPdata,
     data: [],
     editIdx: -1
    }
    // this.handleRemove = this.handleRemove.bind(this);
  }

  componentWillMount(){
    this.getChartData();
  }

  getChartData(){
    // Ajax calls here
    // API.getBPData()
    //   .then(res => this.setState({ BPData: res.data }))
    //   .catch(err => console.log(err));
    console.log(BPdata);

    this.setState({
      chartData:{
        labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        datasets:[
          {
            label:'Systolic Readings for the Week',
            data:[
              117,
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

  handleChange = (event, label) => {
    let data = this.state.data;
    data[this.state.editIdx][label] = event.target.value;
    this.setState({ data });
  };

//BPInput An BPTable//
render() {
  return (
    <div>

      <Container>
        <br/><br/>
        <Row>
          <Col size="md-12">
            <h1 className="text-center">myDashboard</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-8">
          <h3>Personal Information</h3>
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
          </Col>
          <Col  size="md-4">
          <h3>Exercise Log</h3>
          </Col>
            
        </Row>
        <Row>
          <Col size="md-6">
          <hr/>
          <h3>BP Chart</h3>
          <Chart chartData={this.state.chartData} week="1" legendPosition="bottom"/>
          </Col>
          <Col size="md-6">
          <hr/>
          <h3>BP Chart</h3>
          <Chart chartData={this.state.chartData2} week="1" legendPosition="bottom"/>
          </Col>
        </Row>
        </Container>


    </div>
    );
  };
};

export default Dashboard;