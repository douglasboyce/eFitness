import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';

class BPChart extends Component{
  constructor(props){
    super(props);
    this.state = {
      chartData:props.chartData
    }
    
  }

  static defaultProps = {
    displayTitle:true,
    displayLegend: true,
    legendPosition:'right'
  }

  render(){
    return (
      <div className="chart">
        <Bar
          data={this.state.chartData}
          options={{
            title:{
              display:this.props.displayTitle,
              text:'Week '+this.props.week,
              fontSize:25
            },
            legend:{
              display:this.props.displayLegend,
              position:this.props.legendPosition
            }
          }}
        />
      </div>
    )
  }
}

export default BPChart;
