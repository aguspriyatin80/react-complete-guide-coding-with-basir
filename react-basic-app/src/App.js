import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome';
import Message from './Message';
import Clock from './Clock';
import ToggleButton from './ToggleButton';
import ToggleButtonClass from './ToggleButtonClass';

function App() {
  return (
    <div>
      {/* <Welcome name="Eka" />
      <Message message="Testing messages" />
      <Clock date={new Date()} /> */}
      {/* <ToggleButton /> */}
      <ToggleButtonClass />
    </div>
  )
}
export default App;
