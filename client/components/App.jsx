import React from 'react';
import OuterCarousel from './OuterCarousel.jsx';
import dummyData from './dummyData.js';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      listings: dummyData
    };
  };

  render() {
    const { listings } = this.state;
    console.log('dummyData: ', dummyData);
    return (
    <div>
      <h1>More homes you may like</h1>
      <OuterCarousel listings={listings}/>
    </div>
    );
  };
};

export default App;