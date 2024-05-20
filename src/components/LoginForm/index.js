import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', isEmpty: ''}

  onChangeUserName = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  onFail = data => {
    this.setState({isEmpty: data.error_msg})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const object = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, object)
    const data = await response.json()
    if (response.ok === true) {
      this.onSuccess()
    } else {
      this.onFail(data)
    }
  }

  render() {
    const {username, password, isEmpty} = this.state
    return (
      <div className="login-container">
        <div className="up-image-con">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
            alt="website login"
            className="login-img"
          />
        </div>
        <form className="form-con" onSubmit={this.onSubmitForm}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="logo"
          />
          <div className="input">
            <label htmlFor="username"> USERNAME </label>
            <input
              type="text"
              placeholder="Username"
              className="input-el"
              value={username}
              id="username"
              onChange={this.onChangeUserName}
            />
          </div>
          <div className="input">
            <label htmlFor="password"> PASSWORD </label>
            <input
              type="password"
              placeholder="Password"
              className="input-el"
              value={password}
              id="password"
              onChange={this.onChangePassword}
            />
          </div>
          <button className="login-button" type="submit">
            Login
          </button>
          <p className="error-msg"> {isEmpty} </p>
        </form>
      </div>
    )
  }
}

export default LoginForm
