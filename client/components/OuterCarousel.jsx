import React from 'react';
import _ from 'underscore';
import OuterCarItem from './OuterCarItem';
import './OuterCarousel.css';

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
    this.clickHandler = this.clickHandler.bind(this);
  };

  getOffset() {
    let { currentIndex } = this.state;
    return currentIndex * -300;
  }

  slide() {
    let { currentIndex } = this.state;
    console.log("currentIndex: ", currentIndex);
    if (currentIndex > 2) {
      this.setState({currentIndex: 0});
    } else {
      this.setState({currentIndex: currentIndex+1});
    }
  }

  clickHandler(e) {
    this.slide();
  }

  render() {
    let { listings, currentIndex } = this.state;
    return (
      <div className="outerCarouselComponent">
          <div className="outerLeftButton"></div>
            <div className="outerCarousel">
              <div className="slider" style={{position: "relative", left: this.getOffset()}}>
                {_.map(listings, (listing, index) => (
                  <OuterCarItem 
                  currentIndex={currentIndex}
                  listing={listing} 
                  key={JSON.stringify(index)} 
                  index={index} 
                  clickHandler={this.clickHandler} />
                ))}
              </div>
            </div>
            <div className="outerRightButton"></div>
      </div>
    );
  };
};

export default OuterCarousel;