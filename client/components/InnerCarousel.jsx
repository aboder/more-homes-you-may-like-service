import React from 'react';
import InnerCarouselItem from './InnerCarouselItem.jsx';
import './carousel.css';
import { Animate } from 'react-rebound';
import _ from 'underscore';


class InnerCarousel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentImageIndex: 0
    };
    this.clickHandlerLeft = this.clickHandlerLeft.bind(this);
    this.clickHandlerRight = this.clickHandlerRight.bind(this);
  };

  getImageOffset() {
    const { currentImageIndex } = this.state;
    return currentImageIndex * -335;
  }

  slideImagesLeft() {
    const { currentImageIndex } = this.state;
    const { images } = this.props.listing;
    if (currentImageIndex === 0) {
      this.setState({currentImageIndex: images.length-1});
    } else {
      let newImageIndex = currentImageIndex - 1;
      this.setState({currentImageIndex: newImageIndex});
    }
  }

  slideImagesRight() {
    const { currentImageIndex } = this.state;
    const { images } = this.props.listing;
    if (currentImageIndex === images.length-1) {
      this.setState({currentImageIndex: 0});
    } else {
      let newImageIndex = currentImageIndex + 1;
      this.setState({currentImageIndex: newImageIndex});
    }
  }

  clickHandlerLeft() {
    this.slideImagesLeft();
  }

  clickHandlerRight() {
    this.slideImagesRight();
  }

  render() {
    let { listing } = this.props;
    let { currentImageIndex } = this.state;
    return (
      <div className="innerCarouselComponent">
        <Animate translateX={this.getImageOffset()} tension={200} clamp>
          <div className="innerCarouselSlider">
            {_.map(listing.images, (image, index) => (
              <InnerCarouselItem 
                index={index}
                image={image}
                key={JSON.stringify(index)} />
            ))}
          </div>
        </Animate>
        <div className="leftImageButton" onClick={this.clickHandlerLeft}></div>
        <div className="rightImageButton" onClick={this.clickHandlerRight}></div>
        <div className="heartButton"></div>
      </div>
    );
  };
};

export default InnerCarousel;