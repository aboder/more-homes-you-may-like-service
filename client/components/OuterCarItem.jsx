import React from 'react';
import './OuterCarousel.css';

class OuterCarItem extends React.Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    const { listing, clickHandler, index } = this.props;
    return (
    <span className="outerCarouselItem" style={{background: listing.color}} onClick={clickHandler}>
      Outer Carousel Item Number {index}
    </span>
    );
  };
};

export default OuterCarItem;