import ReactDOM from 'react-dom';
import App from './App';
import Header from './components/Header';
import TodoList from './components/TodoList';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('The App component', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test('The app formats correctly', () => {
    const app = shallow(<App />);
    expect(app.containsMatchingElement(
      <div className="App">
        <Header />
        <TodoList />
      </div>
    )).toBe(true);
  });
});