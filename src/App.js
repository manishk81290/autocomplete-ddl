import React, { Fragment, useState, useCallback } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import About from "./components/pages/About";
import User from "./components/users/User";
import axios from "axios";
import AutoComplete from "./components/layout/AutoComplete";
import "./App.css";
const App = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const searchUsers = async username => {
    if(username!==''){
      const res = await axios.get(
        `https://api.github.com/search/users?q=${username}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
      );
      setUsers(res.data.items);
    }
  };

  const debounce = (func) => {
    let timer;
    return function (...args) {
      const context = this;
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        func.apply(context, args);
      }, 500);
    };
  };

  const autoCompleteSearch = useCallback(debounce(searchUsers), []);

  const getUser = async username => {
    console.log(username);
    setLoading(true);
    console.log(username);
    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    setUser(res.data);
    setLoading(false);
  };

  return (
    <Router>
        <div className='App'>
          <Navbar
            title='Github-Autocomplete'
            author='by Manish Vig'
            icon='fab fa-github'
          />
          <div className='container overflow-in'>
            <Switch>
              <Route
                exact
                path='/'
                render={() => (
                  <Fragment>
                    <AutoComplete
                      users={users}
                      searchUsers={searchUsers}
                      autoCompleteSearch={ autoCompleteSearch }
                      getUser={getUser}
                    />
                    {user && 
                      <User
                        user={user}
                        loading={loading}
                      />
                    }
                  </Fragment>
                )}
              />
              <Route exact path='/about' component={About} />
            </Switch>
          </div>
        </div>
      </Router>
  );
};

export default App;
