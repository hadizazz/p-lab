import React,{useState} from 'react'
import { Container,Row,Col,Form,Button,FormControl,Table} from 'react-bootstrap'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import DatePicker from 'react-date-picker';
import {BiUserCircle} from "react-icons/bi"
import {FiShoppingBag} from "react-icons/fi"
import {AiOutlineSetting} from "react-icons/ai"

const Profile = () => {
    const [value, onChange] = useState(new Date());
    const [navigation, setNavigation] = useState(1);
    const [section,setSection] = useState(1);
    const [selectedImage, setSelectedImage] = useState(null);
    
  return (
    <div>
      <Container>
        <Row>
          <div className="my-2">
            <Breadcrumb>
              <Breadcrumb.Item className="breadcrumb-style" href="/">
                {" "}
                Hompage{" "}
              </Breadcrumb.Item>
              <Breadcrumb.Item active className="breadcrumb-style">
                My Profile{" "}
              </Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <Col sm="2">
            <h2 className="text-start">My Account</h2>
            <div className="sideBar">
              <ul>
                <li>
                  <a href="#personal-information" className="nav-link" onClick={() => setNavigation (1)} ><BiUserCircle className='me-2'/>Account </a>
                </li>
                <li>
                  <a href="#my-purchase" className="nav-link" onClick={() => setNavigation (2)}><FiShoppingBag className='me-2'/>My Purchase</a>
                </li>   
                <li>
                  <a href="#account-setting" className="nav-link" onClick={() => setNavigation (3)}><AiOutlineSetting className='me-2'/>Account Setting</a>
                </li>
              </ul>
            </div>
          </Col>
<Col>
            <div className="profile">
          {navigation === 1 ? 
          (
              <div id="personal-information">
              <h4>My Details</h4>
              <h6 className="my-4">Personal Information</h6>
              <div className="lines my-2"></div>
              <Row>
                <Col>
                  <p>
                    Assertively utilize adaptive customer service for
                    future-proof platforms. Completely drive optimal markets.
                  </p>
                  {/* <div>
                    {selectedImage && (
                      <div>
                      <img alt="not fount" width={"250px"} src={URL.createObjectURL(selectedImage)} />
                      <br />
                      <button onClick={()=>setSelectedImage(null)}>Remove</button>
                      </div>
                    )}
                    <br />
                    <input type="file" name="myImage" accept='.png, .jpg, .jpeg' onChange={(event) => {
                        console.log(event.target.files[0]);
                        setSelectedImage(event.target.files[0]);
                      }}
                    />
                  </div> */}
                </Col>
                <Col>
                  <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Name</Form.Label>
                        <Col sm="8">
                            <Form.Control type="name" />
                        </Col>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email address</Form.Label>
                        <Col sm="8">
                            <Form.Control type="email" />
                        </Col>
                    </Form.Group>
                    <div className="mb-4">
                      <p className="p-0 my-1">Birth Date</p>
                      <DatePicker onChange={onChange} value={value} />
                    </div>
                    <Form.Group className="mb-3" as={Col} >
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
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Phone Number</Form.Label>
                        <Col sm="5">
                            <Form.Control type="text" />
                        </Col>
                    </Form.Group>
                    <div id="formSubmit">
                      <Button href="" size="lg" variant="success" type="submit" style={{ color: "#fff" }}> Save </Button>
                    </div>
                  </Form>
                </Col>
              </Row>
              </div>
          ): navigation === 2 ?(
              <div>
                <div className="myPurchase " id="my-purchase">
                    <li className='mx-4'>
                        <a href="#all" onClick={() => setSection (1)}>All</a>
                    </li>
                    <li className='mx-4'>
                        <a href="#" onClick={() => setSection (2)}>To Ship</a>
                    </li>
                    <li className='mx-4'>
                        <a href="#" onClick={() => setSection (3)}>To Receive</a>
                    </li>
                    <li className='mx-4'>
                        <a href="#complated" onClick={() => setSection (4)}>Complated</a>
                    </li>
                    <li className='mx-4'>
                        <a href="#" onClick={() => setSection (5)}>Cancelled</a>
                    </li>
                </div>
                <Form className="d-flex my-4 justify-content-center">
                    <Col sm="10">
                    <FormControl type="search" placeholder="Search"  className="me-2" aria-label="Search" />
                    </Col>
                    <Button className="ms-2" variant="outline-success">Search</Button>
                </Form>
                {section === 1 ? (
                    <div id="all">
                        <div className="lines mb-4"/>
                        <Row clasName="align-self-center">
                            <Col sm="2">
                                <img style={{ width: "60px" ,height: "auto",}} src="https://i.pinimg.com/originals/98/e6/31/98e6316684fb3bb9ed70739c11f96f7b.jpg"/>
                            </Col>
                            <Col>
                                <p className=' __title'>Action Figure Minion</p>
                            </Col>
                            <Col>
                                <p>price</p>
                            </Col>
                            <Col>
                                <p>Complated</p>
                            </Col>
                        </Row>
                    </div>
                ): section === 2 ? (
                    <div>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ullamcorper eros id vulputate eleifend. Donec vitae commodo neque, eu semper odio. Duis lobortis justo et ante elementum, nec auctor odio imperdiet. Nunc volutpat ullamcorper pretium. Sed ac hendrerit ligula, quis hendrerit purus. Vestibulum non posuere dui. Nam luctus diam quis viverra molestie. Duis tristique sed est in commodo. Etiam ut ligula nisl. Donec sit amet pretium sem, vitae ultricies leo.
                    </div>
                ) :section === 3 ?(
                    <div>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ullamcorper eros id vulputate eleifend. Donec vitae commodo neque, eu semper odio. Duis lobortis justo et ante elementum, nec auctor odio imperdiet. Nunc volutpat ullamcorper pretium. Sed ac hendrerit ligula, quis hendrerit purus. Vestibulum non posuere dui. Nam luctus diam quis viverra molestie. Duis tristique sed est in commodo. Etiam ut ligula nisl. Donec sit amet pretium sem, vitae ultricies leo.
                    </div>
                ):section === 4 ?(
                    <div id="complated">
                    <div className="lines mb-4"/>
                    <Row clasName="align-self-center">
                        <Col sm="2">
                            <img style={{ width: "60px" ,height: "auto",}} src="https://i.pinimg.com/originals/98/e6/31/98e6316684fb3bb9ed70739c11f96f7b.jpg"/>
                        </Col>
                        <Col>
                            <p className=' __title'>Action Figure Minion</p>
                        </Col>
                        <Col>
                            <p>price</p>
                        </Col>
                        <Col>
                            <p>Complated</p>
                        </Col>
                    </Row>
                    </div>
                ):section === 5 ?(
                    <div>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ullamcorper eros id vulputate eleifend. Donec vitae commodo neque, eu semper odio. Duis lobortis justo et ante elementum, nec auctor odio imperdiet. Nunc volutpat ullamcorper pretium. Sed ac hendrerit ligula, quis hendrerit purus. Vestibulum non posuere dui. Nam luctus diam quis viverra molestie. Duis tristique sed est in commodo. Etiam ut ligula nisl. Donec sit amet pretium sem, vitae ultricies leo.
                    </div>
                ):(" ")
                }
               
              </div>
          ): navigation === 3 ?(
            <div>
                
            </div>
          ):(" ")
        }
          
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Profile