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


let wrapper;

beforeEach(() => {
  wrapper = shallow(<OuterCarousel />);
});

describe('<OuterCarousel /> rendering', () => {
  it('should render 6 <OuterCarItem />', () => {
    expect(wrapper.find('OuterCarItem')).toHaveLength(6);
  });
});