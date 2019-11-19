import React from 'react'
import {Line} from 'react-chartjs-2';

class ProfitsChart extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            profitsChartData: props.profitsChartData
        }
    }

    render(){
        return(
            <div className="chartContainer">
                <div className="col">
                    <h5 className="chartHeadingSmall">PROFITS</h5>
                    <h5 className="chartHeading">Weekly</h5>
                </div>
                <div className="col">
                    <Line
                    data={this.state.profitsChartData}
                    // width={100}
                    height={350}
                    options={{ maintainAspectRatio: false }}
                    />
                </div>
            </div>
        )
    }
}

export default ProfitsChart