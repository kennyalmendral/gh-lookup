import React, { Fragment, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import User from './components/users/User';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import axios from 'axios';
import GitHubState from './context/github/GitHubState';
import './App.css';

const App = () => {
  const [repos, setRepos] = useState([]);
  const [alert, setAlert] = useState(null);

  // async componentDidMount() {
  //   this.setState({ loading: true });
  //
  //   const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
  //
  //   this.setState({
  //     users: res.data,
  //     loading: false
  //   });
  // }

  const getUserRepos = async username => {
    //setLoading(true);

    try {
      const res = await axios.get(`https://api.github.com/users/${username}/repos?sort=created:desc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

      setRepos(res.data);
    } catch (e) {
      console.log(e.response.data.message);
    } finally {
      //setLoading(false);
    }
  }

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
	          <Route exact path="/user/:login" render={props => (
	            <User {...props} getUserRepos={getUserRepos} repos={repos} />
	          )} />
	        </Switch>
	      </div>
	    </Router>
		</GitHubState>
  );
}

export default App;
