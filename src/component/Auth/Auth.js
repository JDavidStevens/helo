import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateUserInfo } from './../../ducks/reducer';

export default class Auth extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      profile_pic: ''
    };
  }

  Register() {
    let { username, password, profile_pic } = this.state;
    axios
      .post(`/api/auth/register`, {
        username: username,
        password: password,
        profile_pic: profile_pic
      })
      .then(res => {
        let createdUser = db.new_user([username, password, profile_pic]);
        req.session.user = createdUser[0];
        res.redirect('/dashboard');
      });
  }

  render() {
    return (
      <div>
        <button>Login</button>
        <input
          onChange={e => this.handleInputUsername(e.target.value)}
          type="text"
        />
        <input
          onChange={e => this.handleInputPassword(e.target.value)}
          type="text"
        />
        <button>Register</button>
      </div>
    );
  }
}

connect(
  null,
  { updateUserInfo }
);
