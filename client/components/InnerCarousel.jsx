import React from 'react';
import InnerCarouselItem from './InnerCarouselItem.jsx';
import './carousel.css';

class InnerCarousel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      imageIndex: 0
    };
    this.clickHandlerLeft = this.clickHandlerLeft.bind(this);
    this.clickHandlerRight = this.clickHandlerRight.bind(this);
  };

  clickHandlerLeft() {
    console.log('clickHandlerLeft is firing');
  };

  clickHandlerRight() {
    console.log('clickHandlerRight is firing');
  };

  render() {
    let { listing } = this.props; 
    let { imageIndex } = this.state;
    return (
      <div>
        <InnerCarouselItem 
        listing={listing}
        imageIndex={imageIndex}
        clickHandlerLeft={this.clickHandlerLeft}
        clickHandlerRight={this.clickHandlerRight}/>
      </div>
    )
  };
};

export default InnerCarousel;