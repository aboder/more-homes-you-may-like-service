import React from 'react';
import OuterCarousel from './OuterCarousel.jsx';
// import dummyData from './dummyData.js';
const axios = require('axios');


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      roomId: null,
      listings: []
    };
  };

  componentDidMount() {
    this.getTwelveListings(this.props.roomId);
  }

  getTwelveListings(roomId) {
    axios.get(`/recommendations/${roomId}`)
    .then((response) => {
      this.setState({
        roomId: roomId,
        listings: response.data
      });
    });
  };

  render() {
    const { listings } = this.state;
    return (
    <div>
      <h2 className="rec-h2-title">More homes you may like</h2>
      <OuterCarousel listings={listings}/>
    </div>
    );
  };
};

export default App;