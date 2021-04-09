import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    users: [],
    loading: false
  };

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

  searchUsers = async searchTerm => {
    this.setState({ loading: true });

    try {
      const res = await axios.get(`https://api.github.com/search/users?q=${searchTerm}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

      this.setState({ users: res.data.items });
    } catch (e) {
      alert(e.response.data.message);
    } finally {
      this.setState({ loading: false });
    }
  }

  clearUsers = (e) => {
    e.preventDefault();

    this.setState({
      users: [],
      loading: false
    });
  }

  render() {
    const { users, loading } = this.state;

    return (
      <div className="App">
        <Navbar />
        <Search searchUsers={this.searchUsers} clearUsers={this.clearUsers} showClearBtn={users.length > 0 ? true : false } />
        <Users loading={loading} users={users} />
      </div>
    );
  }
}

export default App;