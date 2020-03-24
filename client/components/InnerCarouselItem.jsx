import React from 'react';
import './carousel.css';
import { urlencoded } from 'body-parser';

class InnerCarouselItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { listing, image, clickHandlerNewListing, onHover, offHover } = this.props;
    return (
      <a href={`/?roomId=${listing.roomId}`} className="pictureAnchor">
        <div 
          className="rec-innerCarouselItem"
          style={{backgroundImage: `url("${image}")`}}
          onClick={clickHandlerNewListing}>
        </div>
      </a>
    );
  };
};

export default InnerCarouselItem;