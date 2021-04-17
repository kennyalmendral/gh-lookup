import React, { Fragment, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import User from './components/users/User';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import GitHubState from './context/github/GitHubState';
import './App.css';

const App = () => {
  const [alert, setAlert] = useState(null);

  const showAlert = (msg, type) => {
    setAlert({ msg, type });

    setTimeout(() => {
      setAlert(null);
    }, 5000);
  }

  return (
		<GitHubState>
	    <Router>
	      <div className="App">
	        <Navbar />

	        <Switch>
	          <Route exact path='/' render={props => (
	            <Fragment>
	              <Search showAlert={showAlert} />
	              <Alert alert={alert} />
	              <Users />
	            </Fragment>
	          )} />

	          <Route exact path="/about" component={About} />
	          <Route exact path="/user/:login" component={User} />
	        </Switch>
	      </div>
	    </Router>
		</GitHubState>
  );
}

export default App;
