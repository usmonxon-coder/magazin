import { Modal } from "bootstrap";
import React, { Component } from "react";
import { toast } from "react-toastify";
import "../styles/Korzinka.css";

class Korzinka extends Component {
  state = {};
  input = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  closed = () => {
    let btn = document.querySelector(".btn-close");
    if (this.props.isMatch) {
      btn.click();
    } else {
      toast.warning("iltimos malumotlarni togri kiriting", {
        autoClose: 3000,
        position: "top-center",
      });
    }
  };

  render() {
    return (
      <div>
        <div className="korzinka">
          <div className="container">
            <div className="price py-4 d-flex align-items-center justify-content-between">
              <div className="my">
                <h2>My card</h2>
              </div>
              <div className="nav">
                <h3 className="me-3">All Products price: </h3>
                <div className="xarid">
                  <button className="btn btn-warning me-2">
                    {this.props.totalprice} $
                  </button>
                  <button
                    className="btn btn-info"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    data-bs-whatever="@mdo"
                  >
                    Check
                  </button>
                </div>
              </div>
            </div>
            <div>
              {this.props.selectedProducts.length === 0 ? (
                <h1 className="text-center text-danger">No data ?</h1>
              ) : (
                <div className="row">
                  {this.props.selectedProducts.map((item, index) => (
                    <div
                      key={index}
                      className="col-lg-6 mb-3  d-flex align-items-center"
                    >
                      <div className="row">
                        <div className="col-sm-6 mx-auto mb-3 mb-md-0">
                          <img className="w-100" src={item.imgUrl} alt="rasm" />
                        </div>
                        <div className="col-sm-6 mx-auto p-3 p-sm-0">
                          <h5>
                            <b>Name: </b>
                            {item.Name}
                          </h5>
                          <h5>
                            <b>Brand: </b>
                            {item.Brand}
                          </h5>
                          <h5>
                            <b>Price: </b>
                            {item.Price}$
                          </h5>
                          <h5>
                            <b>Total count: </b>
                            {item.count}
                          </h5>
                          <h5>
                            <b>Total price: </b>
                            {item.count * item.Price}$
                          </h5>
                          <div className=" btn-group">
                            <button
                              className="btn btn1 btn-secondary border-none shadow-none px-4 py-1"
                              onClick={() =>
                                this.props.changeNewscount("minus", index)
                              }
                            >
                              -
                            </button>
                            <button className="btn btn2 btn-light shadow-none px-3 disabled py-1">
                              {item.count}
                            </button>
                            <button
                              className="btn btn3 btn-secondary shadow-none px-4 py-1"
                              onClick={() =>
                                this.props.changeNewscount("plus", index)
                              }
                            >
                              +
                            </button>
                          </div>
                          <button
                            className="btn d-block w-100 mt-1 btn-danger"
                            onClick={() => this.props.delete(item.id)}
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div
              className="modal fade"
              id="exampleModal"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">
                      New message
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <form>
                      <div className="mb-3">
                        <label
                          htmlFor="recipient-name"
                          className="col-form-label"
                        >
                          Card number:
                        </label>
                        <input
                          name="cardNumber"
                          type="number"
                          className="form-control"
                          id="recipient-name"
                          onChange={this.input}
                        />
                      </div>
                      <div className="mb-3">
                        <label
                          htmlFor="message-text"
                          className="col-form-label"
                        >
                          Password:
                        </label>
                        <input
                          name="password"
                          type="Password"
                          className="form-control"
                          id="message-text"
                          maxLength={16}
                          onChange={this.input}
                        />
                      </div>
                    </form>
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
                      type="button"
                      className="btn btn-primary"
                      // data-bs-dismiss="modal"
                      onClick={() => {
                        this.props.cheekPay(
                          this.state.cardNumber,
                          this.state.password
                        );
                        this.closed();
                      }}
                    >
                      Pay
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

export default Korzinka;
