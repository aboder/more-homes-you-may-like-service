import React from 'react';
import './carousel.css';
import InnerCarousel from './InnerCarousel.jsx';


class OuterCarouselItem extends React.Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    const { listing, index } = this.props;
    return (
      <div>
        <span className="outerCarouselItem">
          <InnerCarousel listing={listing} />
        </span>
      </div>
    );
  };
};

export default OuterCarouselItem;