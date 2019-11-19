import React from 'react'
import axios from "axios";
import $ from 'jquery'

class Login extends React.Component {
    constructor() {
        super();
        this.state = {value: '',error:'none', userData: []};
        this._handleClick = this._handleClick.bind(this);
        this._handleChange = this._handleChange.bind(this);
        this._handleSubmit = this._handleSubmit.bind(this);
        this._handleDenied = this._handleDenied.bind(this);
        this._handleAccepted = this._handleAccepted.bind(this);
      }

      componentDidMount() {
        this._getUserData();
      }

      _handleClick(){
        $('#loginModal').modal('hide');
        $('#signUpModal').modal('show');
      }

      _handleChange(event) {
        let target = event.target;
        let value = target.value;
        let name = target.name;
    
        this.setState({
          [name]: value
        });
      }

      _handleSubmit(event) {
        console.log(this.state);
        event.preventDefault();
        this._postData();
      }

      _handleDenied() {
        this.setState({
            error: 'denied'
        });
      }

      _handleAccepted() {
        for (var i=0; i < this.state.userData.length; i++) {
            if (this.state.userData[i].email === this.state.email) {
                sessionStorage.setItem('userId', this.state.userData[i]._id);
                sessionStorage.setItem('userName', this.state.userData[i].name);
                if (this.state.userData[i].role == 1){
                    sessionStorage.setItem('userRole', 1);
                    console.log("roleSet")
                } else if (this.state.userData[i].role == 2){
                    sessionStorage.setItem('userRole', 2);
                } else {
                    sessionStorage.setItem('userRole', 0);
                }
            }
        }
        this.props.loginAccepted();
      }

      _postData() {
        let data = {email:this.state.email, password:this.state.password}
        console.log(data);
        axios({
            method: 'post',
            url: 'https://dev-african-roots.herokuapp.com/api/login',
            data: data,
            config: { headers: {'Content-Type': 'multipart/form-data' }}
            })
            .then(function (response) {
                //handle success
                console.log("yay!")
                console.log(response);
            })
            .catch(error => {
                //handle error
                console.log(error.response.status)
                if(error.response.status === 401){
                    this._handleDenied();
                } else {
                    this._handleAccepted();
                }
                
            });
      }

      _getUserData() {
        let url = 'https://dev-african-roots.herokuapp.com/api/admin/users';
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
                userData: response.data
            });
          })
      }

      render() {
        const error = this.state.error
        let view;

        if (error === 'denied') {
            view = 
            <div className="row" style={{marginBottom:'-30px',marginTop:'25px',marginLeft:'5px',borderLeft:'2px solid #ff006a'}}>
                <h6  style={{color:'white',marginTop:'10px'}}>Username or Password is incorrect</h6>
            </div>;
        }

        return (
            <div className="modal fade" role="dialog" tabIndex="-1" id="loginModal" style={{backgroundImage: "url(assets/img/la.svg)"}}>
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-body loginModalBody">
                    <form onSubmit={this._handleSubmit}>
                        <div className="row">
                            <div className="col">
                                <h4 className="text-uppercase">Login</h4>
                            </div>
                        </div>
                        {view}
                        <div className="row formRow loginFormRow">
                            <div className="col d-inline-flex"><i className="la la-archive d-flex align-items-center"></i>
                                {/*Email Input*/}
                                <input type="email" name="email" placeholder="Email" inputMode="email" className="inputLogin" onChange={this._handleChange}></input>
                                {/*/Email Input*/}
                            </div>
                        </div>
                        <div className="row formRow">
                            <div className="col d-inline-flex"><i className="la la-lock d-flex align-items-center"></i>
                                {/*Password Input*/}
                                <input type="password" name="password" placeholder="Password" className="inputLogin" onChange={this._handleChange}></input>
                                {/*Password Input*/}
                            </div>
                        </div>
                        <div className="row loginBtnRow">
                            <div className="col-10 mx-auto loginBtnCol">
                                {/*Log In Button*/}
                                <button className="btn btn-light btn-block btn-lg loginBtn" type="submit">Login</button>
                                {/*/Log In Button*/}
                            </div>
                            <div className="col-10 mx-auto">
                                {/*Switch to Sign Up Button*/}
                                <button className="btn btn-outline-light btn-block btn-lg loginBtn" type="button" id="btnSignUpLogin" onClick={this._handleClick}>Sign Up</button>
                                {/*/Switch to Sign Up Button*/}
                            </div>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>      
    );
    }
}

export default Login