import React from 'react';
import './GetCards.css'

const GetCard = props => {
  return <div className="getStuffBox">
  <div className="getStuffTitleBox">
    <h3 className="getStuffTitle">THE THING</h3>
  </div>
  <div className="getStuffContentMap">
    <p>'THIS IS WHERE GOOGLE MAPS GOES'</p>
  </div>
  <div className="getStuffContentBox">
    <div className="getStuffContentText">
      <p>'Category: '</p>
      <p>'Description: '</p>
      <p>'Dates Claimed: '</p>
      <p>'Payment Status: '</p>
      <p>'Check this box upon receiving the items: '<input type="checkbox" className="form-check-input" id="getCheckbox"/></p>
    </div>
    <div className="getStuffContentSubtextBox">
      <div className="getStuffContentSubtext">
        <h6 className="getStuffContentSubtextText">'Contact Giver'</h6>
      </div>
      <div className="getStuffContentSubtext">
        <h6 className="getStuffContentSubtextText">'Abandon Claim'</h6>
      </div>    
    </div>
  </div>
</div>;
}

export default GetCard