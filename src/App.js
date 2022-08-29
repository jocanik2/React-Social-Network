import { useState, useEffect } from 'react';
import SocialCard from './SocialCard';
import Navbar from './Navbar';
import './App.css';
import Home from './Home';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {

  const [allUsers, setAllUsers] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async () => {
      var userData;
      try {

        var xhReq = new XMLHttpRequest();
        xhReq.open("GET", "https://api.randomuser.me/?results=10", false);
        xhReq.send(null);
        userData = JSON.parse(xhReq.responseText);


      } catch (error) {
        console.log(error);
        userData = [];
      }
      setAllUsers(userData.results);
      setUsers(userData.results);
      console.log(users);

    })();

  }, []);

  const filterCards = event => {
    const value = event.target.value.toLowerCase();
    const filteredUsers = allUsers.filter(user => (`${user.name.first} ${user.name.last}`.toLowerCase().includes(value)));
    setUsers(filteredUsers);
  }

  return (
    <Router>
      <div className="App">
        <Navbar />
      
        <div className='container'>
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/people">
              
              <input className="search-box" onInput={filterCards} placeholder="Search..." />
              <div className='cards_container'>
                {users?.map((user, index) => (
                  <SocialCard userData={user} key={index} />
                ))}
              </div>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
