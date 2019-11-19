import React from 'react'
import axios from "axios";

class SeasonalFoods extends React.Component {
    constructor(props) {
        super(props);
        this.state =  {
            inventoryData: [],
        }
    }
    
    componentWillMount() {
        this._getInventoryData();
    }

    _getInventoryData() {
        let url = 'https://dev-african-roots.herokuapp.com/api/inventory';
        return axios(url, {
            method: 'GET',
            mode: 'no-cors',
            headers: {
              'Access-Control-Allow-Origin': '*',
              'Content-Type': 'application/json',
            },
            withCredentials: false,
            credentials: 'same-origin',
        }).then(response => {
            this.setState({
              inventoryData: response.data
            });
            console.log(this.state.inventoryData);
        })
    }

    render(){
        let seasonList = this.state.inventoryData.map(food=>{
            if(food.season === 'summer' || food.season === 'all') {
                return(
                    <div className="inSeasonCard" key={Math.random()}>
                        <div className="inSeasonIngredientImageItem" style={{backgroundImage: 'url(ingredients-pictures/' + food.image +')'}}></div>
                        <p className="text-center employeeItemName">{food.name}</p>
                    </div>
                )
            }
        })

        return(
            <>
                {seasonList}
            </>
        )
    }
}    

export default SeasonalFoods