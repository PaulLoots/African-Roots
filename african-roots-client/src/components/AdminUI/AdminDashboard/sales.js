import React from 'react'
import {Bar} from 'react-chartjs-2'

class SalesChart extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            salesChartData: props.salesChartData
        }
    }

    render(){
        return(
            <div className="chartContainer">
                <div className="col">
                    <h5 className="chartHeadingSmall">SALE NUMBERS</h5>
                    <h5 className="chartHeading">Daily</h5>
                </div>
                <div className="col">
                    <Bar
                    data={this.state.salesChartData}
                    // width={100}
                    height={350}
                    options={{ maintainAspectRatio: false }}
                    />
                </div>
            </div>
        )
    }
}

export default SalesChart