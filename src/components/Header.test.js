import Header from './Header';
import { render, screen } from '@testing-library/react';
import ReactDOM from 'react-dom';

describe('The Header component', () => {

  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Header />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test('renders the heading', () => {
    render(<Header />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Philip\'s ToDo!');
  });

});