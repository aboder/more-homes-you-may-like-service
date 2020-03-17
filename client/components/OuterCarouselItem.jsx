import React from 'react';
import './OuterCarousel.css';
import InnerCarousel from './InnerCarousel.jsx';


class OuterCarouselItem extends React.Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    const { listing, index } = this.props;
    return (
      <span className="outerCarouselItem" style={{background: listing.colors[0]}} >
        Outer Carousel Item Number {index}
        <InnerCarousel listing={listing} />
      </span>
    );
  };
};

export default OuterCarouselItem;