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
      <span className="outerCarouselItem">
        <InnerCarousel listing={listing} />
      </span>
    );
  };
};

export default OuterCarouselItem;