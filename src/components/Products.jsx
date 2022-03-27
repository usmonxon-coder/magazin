import React, { Component } from "react";
import "../styles/Products.css";

class Products extends Component {
  state = {
    currentproduct: {},
  };
  render() {
    return (
      <div>
        <div className="products">
          <div className="container">
            <h1 className="py-3 text-danger">Telefonlar</h1>
            <div className="row py-3">
              {this.props.mahsulot.map((item, index) => (
                <div key={index} className="col-lg-3 col-md-6 mb-3 h-100">
                  <div className="card w-100 shadow border ">
                    <img className="w-100 pt-3" src={item.imgUrl} alt="rasm" />
                    <hr className="w-100" />
                    <div className="p-2">
                      <h4>
                        <b>Name: </b>
                        {item.Name}
                      </h4>
                      <p>
                        <b>Brand: </b>
                        {item.Brand}
                      </p>
                      <p>
                        <b>Price: </b>
                        {item.Price}$
                      </p>
                      <button
                        onClick={() => this.setState({ currentproduct: item })}
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop"
                        className="btn btn-danger w-100"
                      >
                        Add to card
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div
              className="modal fade"
              id="staticBackdrop"
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              tabIndex="-1"
              aria-labelledby="staticBackdropLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-lg">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="staticBackdropLabel">
                      Modal title
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <div className="row">
                      <div className="col-4">
                        <div className="card">
                          <div className="card-header">Info</div>
                          <div className="card-body">
                            <h4>
                              <b>Name:</b>
                              {this.state.currentproduct &&
                                this.state.currentproduct.Name}
                            </h4>
                            <h4>
                              <b>Brand:</b>
                              {this.state.currentproduct &&
                                this.state.currentproduct.Brand}
                            </h4>
                          </div>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="card">
                          <div className="card-header">Product</div>
                          <div className="card-body">
                            <img
                              className="w-100"
                              src={
                                this.state.currentproduct &&
                                this.state.currentproduct.imgUrl
                              }
                              alt="rasm"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="card">
                          <div className="card-header">Action</div>
                          <div className="card-body">
                            <h4>
                              <b>Price: </b>
                              {this.state.currentproduct &&
                                this.state.currentproduct.Price}
                              $
                            </h4>
                            <h4>
                              <b>Total price: </b>
                              {this.state.currentproduct &&
                                this.state.currentproduct.Price *
                                  this.props.current}
                              $
                            </h4>
                            <h4>
                              <b>Total count:</b>
                              {this.props.current}
                            </h4>
                            <button
                              onClick={() =>
                                this.props.currentchange(
                                  this.state.currentproduct.id,
                                  "minus"
                                )
                              }
                              className="bnt btn1 btn-secondary border-none shadow-none px-3 py-1"
                            >
                              -
                            </button>
                            <button className="bnt btn2 btn-light shadow-none px-3 disabled py-1">
                              {this.props.current}
                            </button>
                            <button
                              onClick={() =>
                                this.props.currentchange(
                                  this.state.currentproduct.id,
                                  "plus"
                                )
                              }
                              className="bnt btn3 btn-secondary shadow-none px-3 py-1"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button
                      onClick={() =>
                        this.props.AddProduct(this.state.currentproduct)
                      }
                      type="button"
                      className="btn btn-primary"
                      data-bs-dismiss="modal"
                    >
                      Add
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Products;
