import InputField from './InputField';
import { render, screen, fireEvent } from '@testing-library/react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('The InputField component', () => {

  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<InputField />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test('has a form tag', () => {
    render(<InputField />);
    const form = screen.getByRole('form');
    expect(form).toBeInTheDocument();
  });

  test('the form submits and calls addTodo', () => {
    const mock = jest.fn();
    const { getByRole } = render(<InputField addTodo={mock} todoKey={1} />);
    const form = getByRole('form');
    fireEvent.submit(form);
    expect(mock).toHaveBeenCalled();
  });

  test('Snapshot', () => {
    const inputComponent = renderer
      .create(<InputField todoKey={1} />)
      .toJSON();
    expect(inputComponent).toMatchSnapshot();
  });

});
