import React from 'react'
import { Container,Row,Col,Button } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import Register from "./register"

const login = () => {
  return (
    <Container style={{height:"100%"}}>
      <Row>
        <div className="my-5">
          <h3 className="text-start">Login</h3>
          <div>
            <Form className="formLogin">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Username or email address  <span style={{color:"red"}}>*</span></Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
              </Form.Group>
              <Form.Group  as={Row} className="mb-3" controlId="formPlaintextPassword" >
                <Form.Label sm="2">Password <span style={{color:"red"}}>*</span></Form.Label>
                <Col sm="12">
                  <Form.Control type="password" placeholder="Password" />
                </Col>
              </Form.Group>
                <Form.Check type="checkbox"className="mb-2" label="Remember me"/>
                <div className='my-2'>
                    <a className="_link" href="">Forgot Password ?</a>
                </div>
                <Button href="/shop" size="lg" variant="success" type="submit">Log in</Button>
                <Button className="mx-2" href="/register" size="lg" type="submit" variant="primary">Register</Button>
            </Form>
          </div>
        </div>
      </Row>
    </Container>
  );
}

export default login