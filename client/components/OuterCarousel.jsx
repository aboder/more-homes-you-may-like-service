import React from 'react';
import _ from 'underscore';
import OuterCarouselItem from './OuterCarouselItem';
import './carousel.css';
import { Animate } from 'react-rebound';


class OuterCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0
    };
    this.clickHandlerLeft = this.clickHandlerLeft.bind(this);
    this.clickHandlerRight = this.clickHandlerRight.bind(this);
  }

  getOffset() {
    let { currentIndex } = this.state;
    return currentIndex * -345;
  }

  slideRight() {
    const { currentIndex } = this.state;
    const { listings } = this.props;
    if (currentIndex > listings.length-4) {
      this.setState({currentIndex: 0});
    } else {
      this.setState({currentIndex: currentIndex+1});
    }
  }

  slideLeft() {
    const { currentIndex } = this.state;
    const { listings } = this.props;
    if (currentIndex === 0) {
      this.setState({currentIndex: listings.length-3});
    } else {
      this.setState({currentIndex: currentIndex-1});
    }
  }

  clickHandlerRight(e) {
    this.slideRight();
  }

  clickHandlerLeft(e) {
    this.slideLeft();
  }

  render() {
    let { currentIndex } = this.state;
    let { listings } = this.props;
    return (
      <div className="outerCarouselComponent">
          <div className="outerLeftButton" onClick={this.clickHandlerLeft}></div>
            <div className="outerCarousel">
              <Animate translateX={this.getOffset()} tension={200} clamp>
                <div className="itemSlider">
                  {_.map(listings, (listing, index) => (
                    <OuterCarouselItem 
                      currentIndex={currentIndex}
                      listing={listing} 
                      key={JSON.stringify(index)} 
                      index={index} 
                    />
                  ))}
                </div>
              </Animate>
            </div>
          <div className="outerRightButton" onClick={this.clickHandlerRight}></div>
      </div>
    );
  };
};

export default OuterCarousel;