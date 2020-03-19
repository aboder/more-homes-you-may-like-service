import React from 'react';
import renderer from 'react-test-renderer';
import App from './App';
import OuterCarousel from './OuterCarousel.jsx';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('This should be true', () => {

  test('adds 1 + 2 to equal 3', () => {
    expect(true).toBe(true);
  });

  
  test('It renders correctly', () => {
    const tree = renderer
      .create(<App />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  })

});


describe('<App /> rendering', () => {
  let wrapper = shallow(<App />);
  it('Should find 1 <OuterCarousel /> component', () => {
    expect(wrapper.find('OuterCarousel')).toHaveLength(1);
  });
});


describe('<OuterCarousel /> rendering', () => {
  let listings = [
    {id: 0, colors: ['#bbaadd', '#bbddcc', '#aabbdd']},
    {id: 1, colors: ['#bbaacc', '#bbccaa', '#aaccdd']},
    {id: 2, colors: ['#bbccdd', '#ccddaa', '#aabbdd']},
    {id: 3, colors: ['#ccaadd', '#bbddaa', '#aabbcc']},
    {id: 4, colors: ['#bbaadd', '#bbddcc', '#aaccdd']},
    {id: 5, colors: ['#bbaacc', '#bbccaa', '#ccbbdd']},
  ];
  let wrapper = shallow(<OuterCarousel listings={listings}/>);

  it('should render 6 <OuterCarouselItem /> component', () => {
    expect(wrapper.find('OuterCarouselItem')).toHaveLength(6);
  });

});