//Passcode input employee login

import React from 'react'

const EmployeeLoginPasscode = () => (
  <div className="modal fade" role="dialog" tabindex="-1">
  <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
      <div className="modal-content">
          <div className="modal-header">
              <h4 className="modal-title">Employee Name</h4><button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button></div>
          <div className="modal-body" style={{padding: "0px"}}>
              <div className="col-12 col-sm-10 col-md-8 col-lg-6 mx-auto">
                  <h5 className="text-center">Enter Passcode</h5>
                  <div className="row passcodeAttemptCircleRow">
                      <div className="col-auto d-xl-flex mx-auto justify-content-xl-center"><i className="fa fa-circle passcodeAttemptCircle" id="passcodeAttempt1"></i><i className="fa fa-circle-thin passcodeAttemptCircle" id="passcodeAttempt2"></i><i className="fa fa-circle-thin passcodeAttemptCircle" id="passcodeAttempt3"></i>
                          <i
                              className="fa fa-circle-thin passcodeAttemptCircle" id="passcodeAttempt4"></i>
                      </div>
                  </div>
                  <div className="row">
                      <div className="col-4 passcodeBtnCol">
                          <div id="pasBtn1" className="passcodeBtn">
                              <h5 className="text-center m-auto">1</h5>
                          </div>
                      </div>
                      <div className="col-4 passcodeBtnCol">
                          <div id="pasBtn2" className="passcodeBtn">
                              <h5 className="text-center m-auto">2</h5>
                          </div>
                      </div>
                      <div className="col-4 passcodeBtnCol">
                          <div id="pasBtn3" className="passcodeBtn">
                              <h5 className="text-center m-auto">3</h5>
                          </div>
                      </div>
                      <div className="col-4 passcodeBtnCol">
                          <div id="pasBtn4" className="passcodeBtn">
                              <h5 className="text-center m-auto">4</h5>
                          </div>
                      </div>
                      <div className="col-4 passcodeBtnCol">
                          <div id="pasBtn5" className="passcodeBtn">
                              <h5 className="text-center m-auto">5</h5>
                          </div>
                      </div>
                      <div className="col-4 passcodeBtnCol">
                          <div id="pasBtn6" className="passcodeBtn">
                              <h5 className="text-center m-auto">6</h5>
                          </div>
                      </div>
                      <div className="col-4 passcodeBtnCol">
                          <div id="pasBtn7" className="passcodeBtn">
                              <h5 className="text-center m-auto">7</h5>
                          </div>
                      </div>
                      <div className="col-4 passcodeBtnCol">
                          <div id="pasBtn8" className="passcodeBtn">
                              <h5 className="text-center m-auto">8</h5>
                          </div>
                      </div>
                      <div className="col-4 passcodeBtnCol">
                          <div id="pasBtn9" className="passcodeBtn">
                              <h5 className="text-center m-auto">9</h5>
                          </div>
                      </div>
                      <div className="col-4 passcodeBtnCol"></div>
                      <div className="col-4 passcodeBtnCol">
                          <div id="pasBtn0" className="passcodeBtn">
                              <h5 className="text-center m-auto">0</h5>
                          </div>
                      </div>
                      <div className="col-4 passcodeBtnCol">
                          <div id="pasBtnDel" className="passcodeDelete"><i className="material-icons d-xl-flex justify-content-xl-center">backspace</i></div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</div>
)

export default EmployeeLoginPasscode