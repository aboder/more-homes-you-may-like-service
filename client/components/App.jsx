import React from 'react';
import OuterCarousel from './OuterCarousel';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      listings: [
        {id: 0, colors: ['#bbaadd', '#bbddcc', '#aabbdd']},
        {id: 1, colors: ['#bbaacc', '#bbccaa', '#aaccdd']},
        {id: 2, colors: ['#bbccdd', '#ccddaa', '#aabbdd']},
        {id: 3, colors: ['#ccaadd', '#bbddaa', '#aabbcc']},
        {id: 4, colors: ['#bbaadd', '#bbddcc', '#aaccdd']},
        {id: 5, colors: ['#bbaacc', '#bbccaa', '#ccbbdd']},
      ]
    };
  };

  render() {
    const { listings } = this.state;
    return (
    <div>
      <h1>More homes you may like</h1>
      <OuterCarousel listings={listings}/>
    </div>
    );
  };
};

export default App;