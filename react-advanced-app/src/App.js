import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import NewCounter from './NewCounter';
import UserInfo from './UserInfo';
import NewUserInfo from './NewUserInfo';
import Layout from './Layout';
import MainContent from './MainContent';
import UserList from './UserList';
import { BrowserRouter, Link, Switch, Route, NavLink } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import ProductPage from './pages/ProductPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="pages">
      {/* <Counter /> }
    {/* <NewCounter /> */}
      {/* <UserInfo /> */}
      {/* <NewUserInfo /> */}
      {/* <Layout>
        <MainContent />
      </Layout> */}
      {/* <UserList /> 
  */ }
      <BrowserRouter>
        <div className="page-header">
          <NavLink activeClassName="nav-active" exact={true} to="/">Home</NavLink>{' '}
          <NavLink activeClassName="nav-active" to="/about">About</NavLink>{' '}
          <NavLink activeClassName="nav-active" to="/product">Product</NavLink>{' '}
        </div>
        <div className="page-content">
          <Switch>
            <Route path="/about"><AboutPage /></Route>
            <Route path="/product/:id"><ProductPage /></Route>
            <Route path="/product"><ProductPage /></Route>

            <Route path="/"><HomePage /></Route>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
