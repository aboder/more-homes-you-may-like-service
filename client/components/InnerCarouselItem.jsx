import React from 'react';
import './carousel.css';
import { urlencoded } from 'body-parser';

class InnerCarouselItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { image, clickHandlerNewListing, onHover, offHover } = this.props;
    return (
      <div 
        className="rec-innerCarouselItem"
        style={{backgroundImage: `url("${image}")`}}
        onClick={clickHandlerNewListing}
      >
      </div>
    );
  };
};

export default InnerCarouselItem;