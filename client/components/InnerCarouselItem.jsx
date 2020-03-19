import React from 'react';
import './carousel.css';

class InnerCarouselItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <img className="innerCarouselItem" src="https://via.placeholder.com/335x320.png"></img>
    );
  };
};

export default InnerCarouselItem;