import React from 'react';
import './carousel.css';
import InnerCarousel from './InnerCarousel.jsx';


class OuterCarouselItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { listing } = this.props;
    return (
      <div className="rec-outerCarouselItemBuffer">
        <span className="rec-outerCarouselItem">
          <InnerCarousel listing={listing} />
        </span>
        <div className="rec-metaData">
          <div className="rec-metaDataTopLine">
            <div className="rec-listingSize">{listing.size}</div>
            <div className="rec-listingReviewScore">{(listing.reviewScore/10).toFixed(1)} ({listing.reviewCount})</div>
          </div>
          <div className="rec-listingDescription">{listing.description}</div>
          <div className="rec-listingPrice">${listing.price}/night</div>
        </div>
      </div>
    );
  };
};

export default OuterCarouselItem;