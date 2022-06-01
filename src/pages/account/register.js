import React from 'react'
import { Container,Row,Col,Button } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import Login from "./login"

const register = () => {
  return (
    <Container style={{height:"100%"}}>
      <Row>
        <div className="my-5">
          <h3 className="text-start">Register</h3>
          <div>
            <Form className="formLogin">
                <Row>
                    <Form.Group as={Col} className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Full Name  <span style={{color:"red"}}>*</span></Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>
                    <Form.Group as={Col} className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email <span style={{color:"red"}}>*</span></Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" />
                    </Form.Group>
                </Row>
                <Row>
                    <Form.Group  as={Col} className="mb-3" controlId="formPlaintextPassword" >
                        <Form.Label sm="2">Password <span style={{color:"red"}}>*</span></Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group  as={Col} className="mb-3" controlId="formPlaintextPassword" >
                        <Form.Label sm="2">Confirm Password <span style={{color:"red"}}>*</span></Form.Label>
                        <Form.Control type="password" placeholder="Confirm Password" />
                    </Form.Group>
                </Row>
                <Row>
                    <Form.Group as={Col}className="mb-3 phoneNmbr" controlId="phoneNumber">
                        <Form.Label>Phone Number <span style={{color:"red"}}>*</span></Form.Label>
                        <Form.Control className="phoneNmbr" type="text" placeholder="+62" />
                    </Form.Group>

                    <Form.Group as={Col} >
                        <Form.Label as="legend" column sm={2}>Gender <span style={{color:"red"}}>*</span></Form.Label>
                        <Row>
                            <Col sm={4}>
                                <Form.Check type="radio" label="Male" name="formHorizontalRadios" id="formGenderMale"/>
                            </Col>
                            <Col sm={4}>
                                <Form.Check type="radio" label="Female" name="formHorizontalRadios" id="formGenderFemale"/>
                            </Col>
                            <Col sm={4}>
                                <Form.Check type="radio" label="Other" name="formHorizontalRadios" id="formGenderOther"/>
                            </Col>
                             
                        </Row>
                    </Form.Group>
                
                </Row>
                <Form.Group as={Col} className="mb-3" controlId="formGridAddress">
                    <Form.Label>Address</Form.Label>
                    <Form.Control as="textarea"/>
                </Form.Group>
                <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check type="checkbox" className="text-muted" label="Agree to terms and conditions"/>
                </Form.Group>

                <Button variant="primary" type="submit" href="/login">
                    Submit
                </Button>
            </Form>
          </div>
        </div>
      </Row>
    </Container>
  );
}
export default register;