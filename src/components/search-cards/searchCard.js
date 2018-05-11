import React from 'react';
import './SearchCard.css'

const SearchCard = props => {
  return <div className="giveStuffBox">
  <div className="giveStuffTitleBox">
    <h3 className="giveStuffTitle">THE THING</h3>
  </div>
  <div className="giveStuffContentMap">
    <p>THIS IS WHERE GOOGLE MAPS GOES</p>
  </div>
  <div className="giveStuffContentBox">
    <div className="giveStuffContentText">
      <p>Category: </p>
      <p>Description: {props.card.description} </p>
      <p>Dates Claimed: </p>
    </div>
    <div className="giveStuffContentSubtextBox">
      <div className="giveStuffContentSubtext">
        <h6 className="giveStuffContentSubtextText">Contact Getter</h6>
      </div>
      <div className="giveStuffContentSubtext">
        <h6 className="giveStuffContentSubtextText">Remove Listing</h6>
      </div>      
    </div>
  </div>
</div>
}

export default SearchCard