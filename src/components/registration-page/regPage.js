import React from 'react';
import './RegPage.css'

const RegistrationPage = pages => {
  return  <div className="registrationFrame">
    <div className="registrationBox">
      <div className="form-group" id="registrationFieldBox">
          <label for="emailRegistrationField">Email</label>
          <input type="password" class="form-control" id="emailRegistrationField" placeholder="Email"/>
        </div>
        <div className="form-group" id="registrationFieldBox">
          <label for="usernameRegistrationField">Username</label>
          <input type="password" className="form-control" id="usernameRegistrationField" placeholder="Username"/>
        </div>
        <div className="form-group" id="registrationFieldBox">
          <label for="passwordRegistrationField">Password</label>
          <input type="password" className="form-control" id="passwordRegistrationField" placeholder="Password"/>
        </div>
        <div className="form-group" id="registrationFieldBox">
          <label for="passwordConfirmationRegistrationField">Confirm Password</label>
          <input type="password" className="form-control" id="passwordConfirmationRegistrationField" placeholder="Confirm Password"/>
        </div>

        <div className="registrationPageButtonBox">
        <h6 className="registrationPageButtonText">Submit</h6>
      </div>
        

    </div>
  </div>;
}

export default RegistrationPage