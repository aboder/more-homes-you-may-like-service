import React from 'react';
import './carousel.css';
import InnerCarousel from './InnerCarousel.jsx';


class OuterCarouselItem extends React.Component {
  constructor(props) {
    super(props)
    this.clickHandlerNewListing = this.clickHandlerNewListing.bind(this);
  }

  // fire event that renders a new page
  clickHandlerNewListing(e) {
    const { getTwelveListings, listing } = this.props;
    console.log("listing.roomId: ", listing.roomId);
    let newRoomId = listing.roomId;
    getTwelveListings(newRoomId);
  }

  render() {
    const { listing, getTwelveListings } = this.props;
    return (
      <div className="rec-outerCarouselItemBuffer">
        <span className="rec-outerCarouselItem">
          <InnerCarousel listing={listing} getTwelveListings={getTwelveListings}/>
        </span>
        <a href={`/?roomId=${listing.roomId}`} className="metaDataAnchor">
          <div className="rec-metaData" >
            <div className="rec-metaDataTopLine">
              <div className="rec-listingSize">{listing.size}</div>
              <div className="rec-listingReviewScore">{(listing.reviewScore/10).toFixed(1)} ({listing.reviewCount})</div>
            </div>
            <div className="rec-listingDescription">{listing.description}</div>
            <div className="rec-listingPrice">${listing.price}/night</div>
          </div>
        </a>
      </div>
    );
  };
};

export default OuterCarouselItem;