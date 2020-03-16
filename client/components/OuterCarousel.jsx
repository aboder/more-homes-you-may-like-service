import React from 'react';
import _ from 'underscore';
import OuterCarItem from './OuterCarItem';
import './OuterCarousel.css';
import { Animate } from 'react-rebound';


class OuterCarousel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      listings: [
        {color: '#bbaadd'},
        {color: '#bbddaa'},
        {color: '#aabbdd'},
        {color: '#aaddbb'},
        {color: '#ddbbaa'},
        {color: '#ddaabb'}
      ],
      currentIndex: 0
    };
    this.clickHandlerLeft = this.clickHandlerLeft.bind(this);
    this.clickHandlerRight = this.clickHandlerRight.bind(this);
  };


  getOffset() {
    let { currentIndex } = this.state;
    return currentIndex * -300;
  }


  slideRight() {
    let { currentIndex, listings } = this.state;
    if (currentIndex > listings.length-4) {
      this.setState({currentIndex: 0});
    } else {
      this.setState({currentIndex: currentIndex+1});
    }
    console.log("currentIndex: ", currentIndex);
  }

  slideLeft() {
    let { currentIndex, listings } = this.state;
    if (currentIndex === 0) {
      this.setState({currentIndex: listings.length-3});
    } else {
      this.setState({currentIndex: currentIndex-1});
    }
    console.log('currentIndex: ', currentIndex);
  }

  clickHandlerRight(e) {
    this.slideRight();
  }

  clickHandlerLeft(e) {
    this.slideLeft();
  }

  // creates divs neccessary for nested carousels including buttons (buttons not functional yet)
  render() {
    let { listings, currentIndex } = this.state;
    return (
      <div className="outerCarouselComponent">
          <div className="outerLeftButton" onClick={this.clickHandlerLeft}></div>
            <div className="outerCarousel">
              <Animate translateX={this.getOffset()} tension={200} clamp>
                <div className="slider">
                  {_.map(listings, (listing, index) => (
                    <OuterCarItem 
                    currentIndex={currentIndex}
                    listing={listing} 
                    key={JSON.stringify(index)} 
                    index={index} />
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