import React from 'react';
import renderer from 'react-test-renderer';
import App from './App';


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

// describe('<OuterCarousel /> rendering')