import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Mail from "./Mail"
import EmailList from "./EmailList"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="app_body">
          <div className="sidebar_section">
            <Sidebar />
          </div>
          <div className="main_section">
            <Switch> {/*determines Routing*/}
              <Route path="/mail" >
                <Mail />
              </Route>
              <Route path="/">
                <EmailList />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
