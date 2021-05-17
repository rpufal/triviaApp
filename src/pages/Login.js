import React, { Component } from 'react';
import LoginForm from '../components/LoginForm';
import '../CSS/loginForm.css';

class Login extends Component {
  render() {
    return (
      <LoginForm className="componentLogin" />
    );
  }
}

export default Login;
