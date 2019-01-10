import React, {Component} from 'react';
import {Bar} from 'react-chart.js';

class Chart extends Component {

    constructor(props) {
        super(props);

        this.state = {
            chartData: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                dataset: {
                    label: 'Systolic',
                    data: [120, 122, 121, 130, 120, 117],
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
            }
        }
    }

    render() {
        return (
            <div className="chart">
               <Bar
                 data={this.state.chartData}
                 options={{
                maintainAspectRatio: false}}
                />
            </div>
        )
    }
}

export default Chart;
