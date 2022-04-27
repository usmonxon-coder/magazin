import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/Section.css";

class Section extends Component {
  render() {
    return (
      <div className="section pt-4">
        <div className="container ">
          <div className="card mx-auto shadow border ">
            <Link className="text-decoration-none text-black" to="Products">
              <img
                className="w-75 pt-3 mx-auto"
                src="/images/1.jpg"
                alt="mahsulot"
              />
              <hr className="w-100" />
              <div className="p-2">
                <h4>
                  <b>Name:</b> samsung galaxy a12
                </h4>
                <p>
                  <b>Brand: </b>
                  Samsung
                </p>
                <p>
                  <b>Price: </b>
                  180$
                </p>
                <button className="btn btn-danger d-block w-50 mx-auto mb-3">
                  More
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Section;
