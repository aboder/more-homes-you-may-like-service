import React from 'react';
import InnerCarouselItem from './InnerCarouselItem.jsx';
import './carousel.css';
import { Animate } from 'react-rebound';
import _ from 'underscore';


class InnerCarousel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentImageIndex: 0,
      hovered: false
    };
    this.clickHandlerLeft = this.clickHandlerLeft.bind(this);
    this.clickHandlerRight = this.clickHandlerRight.bind(this);
    this.onHoverHandler = this.onHoverHandler.bind(this);
    this.offHoverHandler = this.offHoverHandler.bind(this);
    this.clickHandlerNewListing = this.clickHandlerNewListing.bind(this);
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

  clickHandlerNewListing() {
    console.log('picture clicked');
    // fire event that renders a new page
  }

  onHoverHandler() {
    this.setState({hovered: true});
  }

  offHoverHandler() {
    this.setState({hovered: false});
  }

  clickHandlerLeft() {
    this.slideImagesLeft();
  }

  clickHandlerRight() {
    this.slideImagesRight();
  }


  render() {
    let { listing, clickHandlerNewListing } = this.props;
    let { currentImageIndex, hovered } = this.state;
    return (
      <div 
        className="rec-innerCarouselComponent" 
        onMouseEnter={this.onHoverHandler}
        onMouseLeave={this.offHoverHandler}
        onClick={this.clickHandlerNewListing}>
        <Animate translateX={this.getImageOffset()} tension={200} clamp>
          <div className="rec-innerCarouselSlider">
            {_.map(listing.images, (image, index) => (
              <InnerCarouselItem 
                index={index}
                image={image}
                key={JSON.stringify(index)} 
              />
            ))}
          </div>
        </Animate>
        <Animate opacity={hovered ? 1 : 0}>
          <div className="rec-leftImageButton" onClick={this.clickHandlerLeft}>
            <div className="gg-arrow-left-o"></div>
          </div>
        </Animate>
        <Animate opacity={hovered ? 1 : 0}>
          <div className="rec-rightImageButton" onClick={this.clickHandlerRight}>
            <div className="gg-arrow-right-o"></div>
          </div>
        </Animate>
        <Animate opacity={hovered ? 1 : 0}>
          <div className="rec-heartButtonDiv" style={{backgroundImage: `url("/heart.png")`}}>
          </div>
        </Animate>
      </div>
    );
  };
};

// style={{backgroundImage: 'url("/previous.png")'}

export default InnerCarousel;