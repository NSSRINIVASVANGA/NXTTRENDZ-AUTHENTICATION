import './index.css'
import {Link} from 'react-router-dom'

const Header = () => (
  <div>
    <div className="header-con">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
        className="logo"
      />
      <div className="menu-btn">
        <ul className="menu">
          <Link to="/" className="link-el">
            <li> Home </li>
          </Link>
          <Link to="/products" className="link-el">
            <li> Products </li>
          </Link>
          <Link to="/cart" className="link-el">
            <li> Cart </li>
          </Link>
        </ul>
        <button type="button" className="logout">
          {' '}
          Logout{' '}
        </button>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
          alt="nav-logout"
          className="logout-img"
        />
      </div>
    </div>
    <ul className="menu-1">
      <li>
        <Link to="/" className="link-el">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
            alt="nav home"
            className="logout-img"
          />
        </Link>
      </li>
      <li>
        <Link to="/products" className="link-el">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
            alt="nav products"
            className="logout-img"
          />
        </Link>
      </li>
      <li>
        <Link to="/cart" className="link-el">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
            alt="nav cart"
            className="logout-img"
          />
        </Link>
      </li>
    </ul>
  </div>
)

export default Header
