import react, {Component} from 'react';
import {Bar} from 'react-chart.js';

class Chart extends Component {

    constructor() {
        super(props);

        this.state = {
            data: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July']
            }
        }
    }

    render() {
        return (
            <div className="chart">
               <Bar
                 data={data}
                 width={100}
                 height={50}
                 options={{
                maintainAspectRatio: false}}
                />
            </div>
        )
    }
}

export default Chart;
