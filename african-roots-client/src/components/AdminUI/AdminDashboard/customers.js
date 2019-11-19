import React from 'react'
import {Pie} from 'react-chartjs-2';
import axios from "axios";

class CustomersChart extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            // orderData: [],
            customerChartData: props.customerChartData
        }
    }

    // componentDidMount() {
    //     this._getOrderData();
    //     this._count();
    // }

    // _getOrderData() {
    //     let url = 'https://dev-african-roots.herokuapp.com/api/orders';
    //     return axios(url, {
    //         method: 'GET',
    //         mode: 'no-cors',
    //         headers: {
    //             'Access-Control-Allow-Origin': '*',
    //             'Content-Type': 'application/json',
    //         },
    //         withCredentials: false,
    //         credentials: 'same-origin',
    //         }).then(response => {
    //             this.setState({
    //                 orderData: response.data
    //               });
    //         })
    //     }

        // _count(orderData){

        //     let data= {current:null,amount:0};
        //     // let current = null;
        //     // let amount = 0;
    
        //     for (var i=0; i < orderData.length; i++) {
        //         if (Array.isArray(orderData[i].user_id)) {
        //             for (var j=0; j < orderData[i].user_id.length; j++) {
        //                 if (orderData.user_id[i] != data.current) {
        //                     if (data.amount > 0) {
        //                         document.write(data.current + ' comes --> ' + data.amount + ' times<br>');
        //                     }
        //                     data.current = orderData.user_id[i];
        //                     data.amount = 1;
        //                 } else {
        //                     data.amount++;
        //                 }
        //                 if (data.amount > 0) {
        //                     document.write(data.current + ' comes --> ' + data.amount + ' times');
        //                 }
        //             }
        //         }
    
        //     }
        // }


    render() {
        return (
            <div className="chartContainer">
                <div className="col">
                    <h5 className="chartHeadingSmall">CUSTOMERS</h5>
                    <h5 className="chartHeading">New vs Returning</h5>
                </div>
                <div className="col">
                    <Pie
                    data={this.state.customerChartData}
                    // width={100}
                    height={350}
                    options={{ maintainAspectRatio: false }}
                    />
                </div>
                
            </div>
            
        );
    }
}

export default CustomersChart
