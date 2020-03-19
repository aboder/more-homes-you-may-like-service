import React from 'react';
import OuterCarousel from './OuterCarousel.jsx';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      listings: [
        {id: 0, images: ['#bbaadd', '#bbddcc', '#aabbdd']},
        {id: 1, images: ['#bbaacc', '#bbccaa', '#aaccdd']},
        {id: 2, images: ['#bbccdd', '#ccddaa', '#aabbdd']},
        {id: 3, images: ['#ccaadd', '#bbddaa', '#aabbcc']},
        {id: 4, images: ['#bbaadd', '#bbddcc', '#aaccdd']},
        {id: 5, images: ['#bbaacc', '#bbccaa', '#ccbbdd']}
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