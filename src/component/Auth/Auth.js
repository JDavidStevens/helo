import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateUserInfo } from './../../ducks/reducer';

export default class Auth extends Component {
  render() {
    return <div>Auth</div>;
  }
}

connect(
  null,
  { updateUserInfo }
);
