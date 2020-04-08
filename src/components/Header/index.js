import React from "react"
import logo from "./logo.svg"
import { Link } from "gatsby"
import "./style.css"

class Header extends React.Component {
  render() {
    const { location } = this.props

    const blogLinkStyle = {
      paddingBottom: location.pathname === "/" ? `5px` : `0px`,
      //boxShadow: location.pathname === "/" ? `0px 1px 0px 0px black` : `none`,
    }
    const workLinkStyle = {
      paddingBottom: location.pathname === "/products" ? `5px` : `0px`,
      //boxShadow: location.pathname === "/about" ? `0px 1px 0px 0px black` : `none`,
    }
    const aboutLinkStyle = {
      paddingBottom: location.pathname === "/work" ? `5px` : `0px`,
      //boxShadow:location.pathname === "/work" ? `0px 1px 0px 0px black` : `none`,
    }

    return (
      <div className="header-main">
        <Link className="logo-link" to={`/`}>
          <img src={logo} alt="Atlas Copco Logo" className="logo-img" />
        </Link>
        <div className="header-nav">
          <ul className="nav-ul">
            <li className="nav-li">
              <h1 className="li-h1" style={blogLinkStyle}>
                <a href="https://www.atlascopco.com/en-us/itba/industry-solutions">
                  Industries
                </a>
              </h1>
            </li>
            <li className="nav-li">
              <h1 className="li-h1" style={workLinkStyle}>
                <Link className="li-link" to={`/products`}>
                  Products
                </Link>
              </h1>
            </li>
            <li className="nav-li">
              <h1 className="li-h1" style={workLinkStyle}>
                <a href="https://www.atlascopco.com/en-us/itba/service">
                  Service
                </a>
              </h1>
            </li>
            <li className="nav-li">
              <h1 className="li-h1" style={workLinkStyle}>
                <a href="https://www.atlascopco.com/en-us/itba/expert-hub">
                  Expert Hub
                </a>
              </h1>
            </li>
          </ul>
        </div>
      </div>
    )
  }s
}

export default Header
