// Create Account Component

import React from 'react'
import axios from "axios";
import $ from 'jquery'

class CreateAccount extends React.Component {
    constructor() {
        super();
        this.state = {value: '',error:'none', userData: []};
        this._handleClick = this._handleClick.bind(this);
        this._handleChange = this._handleChange.bind(this);
        this._handleSubmit = this._handleSubmit.bind(this);
      }

      componentDidMount() {
      }

      _handleClick(){
        $('#loginModal').modal('show');
        $('#signUpModal').modal('hide');
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
            this._handleAccepted();
          })
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
            }
        }
        console.log('User Name: '+sessionStorage.getItem('userName'))
        this.props.loginAccepted();
      }

      _postData() {
        let data = {name:this.state.name, email:this.state.email, password:this.state.password, role: '0'}
        console.log(data);
        axios({
            method: 'post',
            url: 'https://dev-african-roots.herokuapp.com/api/register',
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
                console.log("awww!")
                if(error.response.status === 422){
                    this._handleDenied();
                } else {
                    this._getUserData();
                }
            });
      }

      render() {
        const error = this.state.error
        let view;

        if (error === 'denied') {
            view = 
            <div className="row" style={{marginBottom:'-30px',marginTop:'25px',marginLeft:'5px',borderLeft:'2px solid #ff006a'}}>
                <h6  style={{color:'white',marginTop:'10px'}}>This email is already registered</h6>
            </div>;
        }
        return (
        <div className="modal fade" role="dialog" tabIndex="-1" id="signUpModal" style={{backgroundImage: "url(assets/img/Asset%201.svg)"}}>
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-body signUpModalBody">
                        <form onSubmit={this._handleSubmit}>
                            <div className="row">
                                <div className="col">
                                    <h4 className="text-uppercase">Sign Up</h4>
                                </div>
                            </div>
                            {view}
                            <div className="row formRow loginFormRow">
                                <div className="col d-inline-flex"><i className="la la-smile-o d-flex align-items-center"></i>
                                    {/*Name Input*/}
                                    <input type="text" name="name" placeholder="Nickname" className="inputLogin" onChange={this._handleChange}></input>
                                    {/*/Name Input*/}
                                </div>
                            </div>
                            <div className="row formRow">
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
                                    {/*/Password Input*/}
                                </div>
                            </div>
                            <div className="row loginBtnRow">
                                <div className="col-10 mx-auto loginBtnCol">
                                    {/*Sign Up Button*/}
                                    <button className="btn btn-light btn-block btn-lg loginBtn" type="button" type="submit" name="submit" value="submit">Sign Up</button>
                                    {/*/Sign Up Button*/}
                                </div>
                                <div className="col-10 mx-auto">
                                    {/*Swich to Login Button*/}
                                    <button className="btn btn-outline-light btn-block btn-lg loginBtn" type="button" id="btnLoginSignUp" onClick={this._handleClick}>Login</button>
                                    {/*/Swich to Login Button*/}
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

export default CreateAccount