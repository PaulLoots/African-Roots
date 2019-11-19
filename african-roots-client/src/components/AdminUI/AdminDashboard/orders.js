import React from 'react'
import {Doughnut} from 'react-chartjs-2';
import OrdersChartKey from './ordersKey';

class OrdersChart extends React.Component {
    constructor(props) {
        super(props);
        this.state =  {
            data:{
            labels: this.props.labels,
            datasets: [{
            backgroundColor: this.props.colours,
            borderColor: this.props.colours,
            data: this.props.data,
            }]
        }, options:{
            legend: {
            display: false
            },
            layout: {
                padding: {
                    top: 15,
                    bottom: 20
                }
            }
        }};
    }

    render() {
        return (
            <div className="chartContainer">
                <div className="col">
                    <h5 className="chartHeadingSmall">ORDERS</h5>
                    <h5 className="chartHeading">Frequently Ordered</h5>
                </div>
                <div className="col">
                < Doughnut data = {this.state.data}
                            options = {this.state.options}
                            height={250}/>
                {this.__showKeyItem()}
                </div>
            </div>
    );
    }

    __showKeyItem() {
        let keyData = [];

        for (var i=0; i < this.props.labels.length; i++) {
            keyData.push({label: this.props.labels[i], 
                          price: this.props.prices[i], 
                          colour:this.props.colours[i]})
        }

        if (keyData.length > 0) {
        return keyData.map(data => {
            return (
                <OrdersChartKey
                key={data.label}
                price={data.price}
                label={data.label}
                colour={data.colour}
                />
            );
        });
        } else {
        return null;
        }
    }
}    

export default OrdersChart