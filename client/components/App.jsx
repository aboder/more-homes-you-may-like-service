import React from 'react';
import OuterCarousel from './OuterCarousel';


class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
    <div>
      More homes you may like
      <OuterCarousel />
    </div>
    )
  }
}

export default App;