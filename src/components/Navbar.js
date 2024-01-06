import { Component } from "react";
import "../css/NavbarStyles.css";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";

class Navbar extends Component {
  state = {
    clicked: false,
  };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked })
  }

  render() {
    return (
      <nav className="NavbarItems">
        <div>
          <Link className="navbar-logo" to={"/"}>Quest</Link>
        </div>

        <div className="menu-icons" onClick={this.handleClick}>
          <i className={this.state.clicked ? "fas fa-times"
            : "fas fa-bars"}></i>
        </div>

        <ul className={this.state.clicked ?
          "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link className={item.cName} to={item.url}>
                  <i className={item.icon}></i>{item.title}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    );
  }
}

export default Navbar;
