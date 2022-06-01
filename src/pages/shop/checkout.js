import React from 'react'
import { Container,Row,Col,Button,Card } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import {useCart} from "react-use-cart"



const Checkout = () => {
    const {items,isEmpty,totalUniqueItems,totalItems,cartTotal,updateItemQuantity,removeItem,emptyCart} = useCart();

  return (
    <Container>
      <Row className="mb-5">
        <h3 className=" pt-5 text-start">Checkout</h3>
        <div className="lines"></div>

        <Col>
          <div className="my-5">
            <div>
              <Form className="formLogin">
                  <h5 className='pb-2'>Billing details</h5>
                  <div className="lines mb-4"></div>

                <Row>
                  <Form.Group as={Col} className="mb-3" >
                    <Form.Label> First Name <span style={{ color: "red" }}>*</span> </Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                  <Form.Group  as={Col} className="mb-3" >
                    <Form.Label>  Last Name <span style={{ color: "red" }}>*</span> </Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                </Row>
                <Row>
                    <Form.Group as={Col} className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address <span style={{ color: "red" }}>*</span></Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                  <Form.Group  as={Col} className="mb-3 phoneNmbr" controlId="phoneNumber" >
                    <Form.Label> Phone Number <span style={{ color: "red" }}>*</span></Form.Label>
                    <Form.Control className="phoneNmbr" type="text" placeholder="+62" />
                  </Form.Group>
                </Row>
                <Row>
                    <Form.Group as={Col} className="mb-3" controlId="formPlaintextPassword" >
                        <Form.Label sm="2">  Company name (optional) </Form.Label>
                        <Form.Control type="text" />
                  </Form.Group>
                    <Form.Group as={Col} className="mb-3 phoneNmbr" controlId="phoneNumber" >
                        <Form.Label> Province <span style={{ color: "red" }}>*</span> </Form.Label>
                        <Form.Control type="text"  />
                    </Form.Group>
                </Row>
                <Row>
                    <Col>
                        <Form.Label> City <span style={{ color: "red" }}>*</span> </Form.Label>
                        <Form.Control />
                    </Col>
                    <Col>
                        <Form.Label> Zip <span style={{ color: "red" }}>*</span> </Form.Label>
                        <Form.Control />
                    </Col>
                </Row>
                <Form.Group  as={Col} className="mt-3" >
                  <Form.Label>Full Address <span style={{ color: "red" }}>*</span></Form.Label>
                  <Form.Control as="textarea" />
                </Form.Group>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check  type="checkbox" className="text-muted" label="Agree to terms and conditions" />
                </Form.Group>
              </Form>
            </div>
          </div>
        </Col>
        <Col sm="5">
          <div className="cardCart my-5 ">
            <Row>
              <Col>
                <Card >
                  <Card.Header>Cart Totals</Card.Header>
                  <Card.Title className="mx-3 mt-2">Product</Card.Title>
                   <div className="lines"></div>
                  <Card.Body>
                    {items.map((item, index) => 
                    <Row>
                      <Col>
                        <Card.Text className="text-muted">{item.name} x{item.quantity}</Card.Text>
                      </Col>
                      <Col>
                        <Card.Text className="py-1">Rp. {item.price} </Card.Text>
                      </Col>
                    </Row>
                    )}
                    <div className="lines"></div>
                    <Row>
                      <Col>
                        <Card.Title>Subtotal</Card.Title>
                      </Col>
                      <Col>
                        <Card.Text>Rp. {cartTotal}</Card.Text>
                      </Col>
                    </Row>
                    <div className="lines"></div>
                    <Row>
                      <Col>
                        <Card.Title>Shipping</Card.Title>
                      </Col>
                      <Col>
                        <Card.Text>
                          Enter your address to view shipping options.Calculate
                          shipping
                        </Card.Text>
                      </Col>
                    </Row>
                    <div className="lines"></div>
                    <Row>
                      <Col>
                        <Card.Title>Total</Card.Title>
                      </Col>
                      <Col>
                        <Card.Text>Rp. {cartTotal}</Card.Text>
                      </Col>
                    </Row>
                    <div className="lines"></div>
                  </Card.Body>
                  <div className="text-end">
                    <Button
                      className="mx-2 my-2 "
                      href="/checkout"
                      size="md"
                      type="submit"
                      variant="success"
                    >
                      Checkout
                    </Button>
                  </div>
                </Card>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Checkout