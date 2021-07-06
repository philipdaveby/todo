import TodoCard from './TodoCard';
import { render, screen } from '@testing-library/react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

const mockTodo = { 
    title: 'Milk',
    content: 'Red',
    done: false,
    key: 1,
   };

describe('The TodoCard component', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TodoCard />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test('has an h3 tag', () => {
    render(<TodoCard />);
    const header = screen.getByRole('heading', { level: 3 });
    expect(header).toBeInTheDocument();
  });

  test('has a button tag with text "Remove"', () => {
    render(<TodoCard />);
    expect(screen.getByRole('button')).toHaveTextContent('Remove');
  });

  test('The todo card formats correctly', () => {
  const todo = shallow(<TodoCard cardKey={mockTodo.key} cardTitle={mockTodo.title}
    cardContent={mockTodo.content} />);
    expect(todo.containsMatchingElement(
      <div>
        <h3 className="main__todo__card__h3">Milk</h3>
        <p className="main__todo__card__p">Red</p>
        <button type="button" className="form__remove-button">Remove</button>
      </div>
    )).toBe(true);
  });

  test('Snapshot', () => {
    const todoComponent = renderer
      .create(<TodoCard cardKey={mockTodo.key} cardTitle={mockTodo.title} cardContent={mockTodo.content} />)
      .toJSON();
    expect(todoComponent).toMatchSnapshot();
  });

});
