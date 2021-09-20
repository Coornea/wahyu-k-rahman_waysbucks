import React from 'react'
import { Col, Row } from "react-bootstrap";
import photo from "../assets/photo.png";
import brand from "../assets/brandlogo.svg";
import qr from "../assets/qr.svg";

function Profile() {
  const user = JSON.parse(localStorage.getItem("dataLogin"));
  console.log(user);

  return (
    <Row className="justify-content-md-center">
      <Col xs={5}>
      <h5 className="header3">
            <strong>My Profile</strong>
          </h5>
        <Row xs={10}>
          <Col xs={6}>
            <img src={photo} alt="profile" width={'100%'} />
          </Col>
          <Col xs={6}>
            <Row className="xs-3">
              <strong className="text-red">Full Name</strong>
              <p>{user.fullname}</p>
              <strong className="text-red">Email</strong>
              <p>{user.email}</p>
            </Row>
          </Col>
        </Row>
      </Col>
      <Col xs={5}>
        <h5 className="header3">
          <strong>My Transaction</strong>
        </h5>
        <div className="box1">
        {user.order.length < 1 ? (
          <p className="text-secondary">There's no transaction yet</p>
        ) : (
          <ul className="list-group rounded">
            {user.order.map((order) => (
                <li
                  className="list-group-item list-group-item-danger mb-3"
                  key={order.id}
                >
                  <div className="row">
                    <div className="col-md-9">
                      <ul className="list-group">
                        {" "}
                        {order.transactionProducts.map((transactionProduct) => (
                          <li
                            className="list-group-item list-group-item-danger"
                            key={transactionProduct.id}
                          >
                            <div className="d-flex align-items-center ">
                              <img
                                src={transactionProduct.product.image}
                                alt="product"
                              />
                              <div className="ml-3 text-red">
                                <h5>
                                  <strong>
                                    {transactionProduct.product.name}
                                  </strong>
                                </h5>
                                <p>
                                  <span className="text-brown">Topping : </span>
                                  {transactionProduct.transactionToppings
                                    .map(
                                      (transactionTopping) =>
                                        transactionTopping.topping.name
                                    )
                                    .join(", ")}
                                </p>
                                <p>
                                  <span className="text-brown">
                                    SubTotal :{" "}
                                  </span>
                                  Rp.{" "}
                                  {transactionProduct.transactionToppings
                                    .map(
                                      (transactionTopping) =>
                                        transactionTopping.topping.price
                                    )
                                    .reduce(
                                      (a, b) => a + b,
                                      transactionProduct.product.price
                                    )}
                                </p>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="col-md-3 text-center">
                      <img src={brand} alt="logo"></img>
                      <img
                        src={qr}
                        alt="logo"
                      ></img>
                      <p>
                        Total :<br />
                        <strong>Rp. {order.income}</strong>
                      </p>
                      <div className="my-3">
                        <label status={order.status} />
                        {order.status === "PENDING" ? (
                          <div className="my-5">
                            <div>
                              <label status={order.status} />
                            </div>
                            <div className="mt-3">
                              <label status={order.status} />
                            </div>
                          </div>
                        ) : (
                          order.status === "PROCESSING" && (
                            <div className="my-3">
                              <label status={order.status} />
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </li>
              )
            )}
          </ul>
        )}
        </div>
      </Col>
    </Row>
  );
}

export default Profile;
