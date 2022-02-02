import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Mail from "./Mail"
import EmailList from "./EmailList"
import SendMail from "./SendMail"
import Login from './Login';
import { useSelector } from 'react-redux';
import { selectSendMessageIsOpen } from "./features/mailSlice"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { selectUser } from './features/userSlice';


function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen)
  const user = useSelector(selectUser)


  return (
    <Router>
      {!user ? (
        <Login />
      ) :
        (
          <div className="app">
            <Header />
            <div className="app_body">
              <div className="sidebar_section">
                <Sidebar />
              </div>
              <div className="main_section">
                <Switch> {/*determines Routing*/}
                  <Route path="/mail">
                    <Mail />
                  </Route>
                  <Route path="/">
                    <EmailList />
                  </Route>
                </Switch>
              </div>
            </div>

            {sendMessageIsOpen && <SendMail />}
          </div>
        )
      }

    </Router>
  );
}

export default App;
