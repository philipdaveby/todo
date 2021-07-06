import TodoList from './TodoList';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('The TodoList component', () => {

  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TodoList />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test('has an h2 tag with text "Register new ToDo"', () => {
    render(<TodoList />);
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Register new ToDo');
  });

  test('contains a list', () => {
    render(<TodoList />);
    const list = screen.getByRole('list');
    expect(list).toBeInTheDocument();
  });

  test('does not have any list items at start', () => {
    const todoList = shallow(<TodoList />);
    expect(todoList.find('li').exists()).toBeFalsy()
  });

  test('Snapshot', () => {
    const todoListComponent = renderer
      .create(<TodoList />)
      .toJSON();
    expect(todoListComponent).toMatchSnapshot();
  });

});
