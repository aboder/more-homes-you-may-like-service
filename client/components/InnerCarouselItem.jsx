import React from 'react';
import './carousel.css';
import { urlencoded } from 'body-parser';

class InnerCarouselItem extends React.Component {
  constructor(props) {
    super(props);
  }


// <div className="image" style={{backgroundImage: `url("${image}")`}}></div>
  render() {
    const { image, onHover, offHover } = this.props;
    return (
      <div 
        className="innerCarouselItem"
        style={{backgroundImage: `url("${image}")`}}
      >
      </div>
    );
  };
};

export default InnerCarouselItem;