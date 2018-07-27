import React, {Component} from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { updateUserInfo } from './../../ducks/reducer';
import {withRouter} from 'react-router';


export default class Nav extends Component{
  componentDidMount = () => {
    axios.get('api/auth/me').then(res=>{
      this.props.updateUserInfo(res.data)
    })
  }

  logout(){
    axios.get('api/auth/logout').then(res=>{
      this.props.history.push('/')
    })
  }


  
  render(){
const showTheLocationWithRouter=withRouter(ShowTheLocation)

  return (
    <div>
      

      <Link to="/dashboard">
        <button>Home</button>
      </Link>
      <Link to="/form">
        <button>New Post</button>
      </Link>
      <Link to="/">
        <button>Logout</button>
      </Link>
    </div>
  );
}
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps,{updateUserInfo})(Nav)