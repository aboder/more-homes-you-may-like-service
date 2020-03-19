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
      <div className="outerCarouselItemBuffer">
        <span className="outerCarouselItem">
          <InnerCarousel listing={listing} />
        </span>
        <div className="metaData">
          <div className="metaDataTopLine">
            <div className="listingSize">{listing.size}</div>
            <div className="listingReviewScore">{(listing.reviewScore/10).toFixed(1)} ({listing.reviewCount})</div>
          </div>
          <div className="listingDescription">{listing.description}</div>
          <div className="listingPrice">${listing.price}/night</div>
        </div>
      </div>
    );
  };
};

export default OuterCarouselItem;