import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome';
import Message from './Message';
import Clock from './Clock';
import ToggleButton from './ToggleButton';
import ToggleButtonClass from './ToggleButtonClass';
import NumberList from './NumberList';
import Greeting from './Greeting';
import LoginControl from './LoginControl';

function App() {
  // const numbers = [1, 2, 3, 4, "Test"]
  // const numbers2 = [1, 8, 20, 22];
  // const todos = [
  //   { id: '1', name: "Coding", isDone: false },
  //   { id: '2', name: "Eating", isDone: true },
  // ]
  return (
    <div>
      {/* <Welcome name="Eka" />
      <Message message="Testing messages" />
      <Clock date={new Date()} /> */}
      {/* <ToggleButton /> */}
      {/* <ToggleButtonClass /> */}
      {/* <NumberList numbers={numbers} />
      <NumberList numbers={numbers2} /> */}

      {/* <ul>
        {
          todos.map((todo) => <li key={todo.id}>{todo.name} - {todo.isDone ? 'Done' : ''}</li>)
        }
      </ul> */}
      <LoginControl hasNewMessage credit={100} hasWarning />
    </div>
  )
}
export default App;
