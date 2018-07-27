import React from 'react';
import { connect } from 'react-redux';

export default function Nav() {
  return (
    <div>
      <h1>{this.props.location.classname}</h1>

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

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(Nav)