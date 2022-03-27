import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <div className="fixed">
        <div className="navbar bg-dark bg-gradient">
          <div className="container">
            <div className=" box1">
              <Link className="link me-5 active" to="/">
                HOME
              </Link>
              <Link className="link active" to="Products">
                Products
              </Link>
            </div>
            <div className="dropdown">
              <div className="box2">
                <Link to="/Korzinka">
                  <img
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    src="/images/savat.png"
                    alt="rasm"
                  />
                  <span className="badge bg-danger">
                    {this.props.selectedProductsCount}
                  </span>
                </Link>
                <span className="text-info span1">
                  {this.props.person.name}, {this.props.person.balance}$
                </span>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton1"
                >
                  {this.props.selectedProducts.map((item, index) => (
                    <li key={index} className="dropdown-item">
                      {item.Name} <b> -{item.count}X</b>
                    </li>
                  ))}
                  <hr className="m-0 mb-1" />
                  <li>
                    <button className="btn btn-info w-100">
                      <Link className="link1" to="/Korzinka">
                        <b>Totalprice: </b>
                        {this.props.totalprice}$
                      </Link>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
