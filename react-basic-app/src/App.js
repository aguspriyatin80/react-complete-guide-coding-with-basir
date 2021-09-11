import logo from './logo.svg';
import './App.css';

function App() {
  function formatName(userName){
    return userName.toUpperCase()
  }
  function getGreeting(username){
    if(username){
      return <h1>Hello {username}</h1>
    } else {
      return <h1>Hello Stranger</h1>
    }
  }
  const name = "Agus"  
  const logo = '/logo192.png'
  const image = <img src={logo} alt="logo"/>
  const element = <div>
    <h1>Hello {formatName(name)}</h1>
    <p>Good to see you</p>
    {image}
    </div>
  // return getGreeting('Eka')
  return element
}

export default App;
