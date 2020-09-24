import React, {Component} from 'react';
import '../styles/App.css';
import {BrowserRouter, BrowserRouter as Router, Route, Switch, Link, useRouteMatch} from 'react-router-dom';
import Home from './Home';
import MyProfile from './MyProfile';
import AboutUs from './AboutUs';
import Products from './Products';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <table>
            <thead>
              <tr>
                <th>
                  <HeaderLink
                    label="Home"
                    to="/"
                    activeOnlyWhenExact={true}
                  />
                  <HeaderLink
                    label="Products"
                    to="/products"
                  />
                  <HeaderLink
                    label="My Profile"
                    to="/my-profile"
                  />
                  <HeaderLink
                    label="About Us"
                    to="/aoubt-us"
                  />
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Switch>
                    <Route path="/products" component={Products}/>
                    <Route path="/goods" component={Products}/>
                    <Route path="/my-profile" component={MyProfile}/>
                    <Route path="/aoubt-us" component={AboutUs}/>
                    <Route path="/" component={Home}/>
                  </Switch>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </BrowserRouter>
    );
  }
}

function HeaderLink({ label, to, activeOnlyWhenExact }) {
  let match = useRouteMatch({
    path: to,
    exact: activeOnlyWhenExact
  });

  return (
    <Link to={to} className={match ? "current" : ""}>{label}</Link>
  );
}

export default App;
