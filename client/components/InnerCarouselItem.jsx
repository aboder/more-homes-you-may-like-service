import React from 'react';


class InnerCarouselItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { listing, imageIndex, clickHandlerLeft, clickHandlerRight } = this.props;
    return (
      <div className="listingWrapper">
        <div className="innerCarouselItem" style={{background: listing.images[0]}}>
        </div>
        <div className="leftImageButton" onClick={clickHandlerLeft}></div>
        <div className="rightImageButton" onClick={clickHandlerRight}></div>
        <div className="heartButton"></div>
      </div>
    );
  };
};

export default InnerCarouselItem;