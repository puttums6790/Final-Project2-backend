import React from 'react';
import './SubPage.css'

class SubmissionPage extends React.Component {
  state = {
    type: [],
    description: "",
    address: "",
    price: ""
  }
  submit = () => {
    const form = this.state
    fetch('/api/create/board', {
      method: 'post',
      body: JSON.stringify(form),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }).then(res => {
      window.location.href = '/search'
    }).catch(err => {
      console.log(err, 'err')
    })
  }
  handleCheckboxChange = (e, value) => {
    if (this.state.type.includes(value)) {
      // get index of value if found in type array
      var index = this.state.type.indexOf(value)
      // remove item from type array
      this.state.type.splice(index, 1)
      this.setState({ type:  this.state.type})
      return
    }
    this.state.type.push(value)
    this.setState({ type: this.state.type })
  }
  render () {
    return (
      <div className="pageFrame">
    <div className="submissionTitleBox">
      <h3>Give Submission</h3>
    </div>
    <hr className="submissionPageSplit"/>
    <div>
      <div className="stepTitleBox">
        <h5>Step 1 STUFF TYPE</h5>
      </div>
      <div className="typeSelectorHolder">
        <div className="typeBox">
          <p>Beach/Pool Equipment</p>
          <div id="submissionChecks">
            <input type="checkbox" onChange={(e) => this.handleCheckboxChange(e, 'Beach/Pool Equipment')} className="form-check-input"/>
          </div>
        </div>
        <div className="typeBox">
          <p>Hiking Equipment</p>
          <div id="submissionChecks">
            <input type="checkbox" onChange={(e) => this.handleCheckboxChange(e, 'Hiking Equipment')} className="form-check-input"/>
          </div>
        </div>
        <div className="typeBox">
          <p>Sports Equipment</p>
          <div id="submissionChecks">
            <input type="checkbox" onChange={(e) => this.handleCheckboxChange(e, 'Sports Equipment')} className="form-check-input"/>
          </div>
        </div>
        <div className="typeBox">
          <p>Leisure Equipment</p>
          <div id="submissionChecks">
            <input type="checkbox" onChange={(e) => this.handleCheckboxChange(e, 'Leisure Equipment')} className="form-check-input"/>
          </div>
        </div>
        <div className="typeBox">
          <p>Hobby Equipment</p>
          <div id="submissionChecks">
            <input type="checkbox" onChange={(e) => this.handleCheckboxChange(e, 'Hobby Equipment')} className="form-check-input"/>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div className="stepTwoTitleBox">
        <h5>Step 2 DOCUMENT STUFF</h5>
        <div className="form-group" id="submissionEntryBox">
            <label for="submissionDecriptionEntry">Example textarea</label>
            <textarea onChange={(e) => this.setState({description: e.target.value})} className="form-control" id="submissionDecriptionEntry" rows="3"></textarea>
          </div>
      </div>
    </div>
    <div>
      <div className="stepTitleBox">
        <h5>Step 3 ADDRESS OF STUFF</h5>
        <div className="form-group" id="submissionEntryBox">
            <label for="submissionDecriptionEntry">Example textarea</label>
            <textarea onChange={(e) => this.setState({address: e.target.value})} className="form-control" id="submissionDecriptionEntry" rows="3"></textarea>
        </div>
      </div>
    </div>
    <div>
      <div className="stepTitleBox">
        <h5>Step 4 PAYMENT INFO</h5>
        <div className="paymentRequestBox">
          <p>Would you like to request payment?</p>
          <div id="paymentCheck">
            <input type="checkbox" className="form-check-input"/>
          </div>
          <div className="priceVerification">
            <p>How much? (All prices in USD)</p>
            <div className="input-group mb-4 mr-sm-2" id="priceInputField">
              <div className="input-group-prepend">
                <div className="input-group-text">$</div>
              </div>
              <input type="text" onChange={(e) => this.setState({price: e.target.value})} className="form-control" placeholder="Price"/>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="submissionPageButtonBox">
      <h6 onClick={this.submit} className="submissionPageButtonText">Submit</h6>
    </div>  
  </div>
    )
  }
}

export default SubmissionPage