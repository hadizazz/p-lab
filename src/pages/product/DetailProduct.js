import React, { useState } from "react";
import { Container, Row,Col, Dropdown, DropdownButton, Button, Form, FormControl,} from 'react-bootstrap'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Table from 'react-bootstrap/Table';
import ImageZoom from"react-image-zooom";
import CardDetail from "../../components/card/cardDetail";
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import dataProduk from"../../data.json";
import {useCart} from "react-use-cart";
import { useParams } from 'react-router-dom';


function DetailProduct (props) {
  const [products] = useState([
    
    {
      // img: "https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
 
    },
  ]);
  const changeImage = (id) => {
    document.querySelector("#imageZoom").src = id;
    document.querySelector("#featured").style.backgroundImage = "url(" + id + ")";
  };
  const [value, setValue] = React.useState(0);
  const [navigation, setNavigation] = useState(1);
  const [data,setData] = useState(dataProduk);
  const {productid} = useParams();
  const id = productid
  const thisProduct = dataProduk.find (prod => prod.id == id);
  const {
    isEmpty, totalUniqueItems, items, addItem, totalItems, updateItemQuantity, removeItem, emptyCart,
  } = useCart();

  const [val,setVal] = useState(0);


 const inputchangehandler = function(event){
    setVal(event.target.value)
  }
  

  return (
    <Container>
       {console.warn(items)}
        <Row xs={1} lg={2} md={1} sm={1} xl={2}className="my-5">
          <Col style={{ width: "42%", height: "auto" }} className="mx-3">
            <div>
              <Breadcrumb>
                <Breadcrumb.Item className="breadcrumb-style" href="#">
                  Home
                </Breadcrumb.Item>
                <Breadcrumb.Item
                  className="breadcrumb-style"
                  href="https://getbootstrap.com/docs/4.0/components/breadcrumb/"
                >
                  {" "}
                  Library{" "}
                </Breadcrumb.Item>
                <Breadcrumb.Item active>Data</Breadcrumb.Item>
              </Breadcrumb>
            </div>
            <div className="coverZoom">
              <ImageZoom
                id="featured"
                src={thisProduct.image}
                zoom="150"
              />
            </div>

            <Row className="mt-3">
              <Col className="_img">
                {products.map((product, index) => (
                  <div key={index}>
                    <img
                      src={thisProduct.img1}
                      alt="img"
                      onClick={() =>
                        changeImage(
                          thisProduct.img1
                        )
                      }
                    />
                  </div>
                ))}
              </Col>
              <Col className="_img">
                {products.map((product, index) => (
                  <div key={index}>
                    <img
                      src={thisProduct.img2}
                      alt="img"
                      onClick={() =>
                        changeImage(
                          thisProduct.img2
                        )
                      }
                    />
                  </div>
                ))}
              </Col>
              <Col className="_img">
                {products.map((product, index) => (
                  <div key={index}>
                    <img
                      src={thisProduct.img3}
                      alt="img"
                      onClick={() =>
                        changeImage(
                          thisProduct.img3
                        )
                      }
                    />
                  </div>
                ))}
              </Col>
            </Row>
          </Col>
          {/* <img src="https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80 */}
          <Col className="my-5">
            <div className="detailproduct">
              <h3 className="titleDetail text-start pb-3">
                {id}
              </h3>
              <p className="text-start titlePrice">{thisProduct.price}</p>
            </div>
            <div className="text-start"dangerouslySetInnerHTML={{__html: thisProduct.desc}}></div>
        
            <div className="qty ">
              <div className=" mx-4 ">Quantity</div>
              <div className="d-flex item-center">
                  <Form.Group as={Col}  controlId="phoneNumber">
                        <Col sm={4}>
                          <Form.Control type="number" onChange={inputchangehandler} value = {val} defaultValue={0} min={0} step={1} maks={10} />
                        </Col>
                  </Form.Group>
                </div>
            </div>
            <div className="text-start my-4">
              <Button className="mx-3" variant="outline-secondary" size="md" onClick={() => addItem (thisProduct,parseInt(val,10))} > Add To Cart  </Button>
              <Button variant="success" size="md" > Buy Now  </Button>
            </div>
          </Col>

          <div className="_comment my-5">
            <ul className="nav">
              <li classname="nav-item">
                <a onClick={() => setNavigation(1)} className="nav-link active" href="#Tab-dditional-Information">Additional Information{" "} </a>
              </li>
              <li className="nav-item">
                <a onClick={() => setNavigation(2)} className="nav-link active" href="#Tab-Review">Reviews () </a>
              </li>
            </ul>
            
            {navigation === 1 ?
            (
            <div className="addInformation" id="Tab-Additional-Information">
              <Table striped bordered hover className="my-4">
                <tbody className="_table">
                  <tr>
                    <td className="__table">Weight</td>
                    <td>1kg</td>
                  </tr>
                  <tr>
                    <td className="__table">Dimensions</td>
                    <td>15 x 15 x 30 cm</td>
                  </tr>
                </tbody>
              </Table>
            </div>
            ) : navigation === 2 ?(
            <div className="review py-5" id="Tab-review">
              <div id="review">
                <Col id="comment" className="text-start">
                  <h4>Review</h4>
                </Col>
                <Col id="review_form_wrapper" className="text-start formReview">
                  <h4>Product Ratings </h4>
                  <Typography className="py-2" component="legend">
                    Your rating <span style={{ color: "#585b53" }}>*</span>
                  </Typography>
                  <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                  />
                  <div id="formReview"> 
                    <Form>
                      <Form.Group className="mb-3"controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Your review<span style={{ color: "#585b53" }}>*</span> </Form.Label>
                        <Form.Control as="textarea" rows={3} />
                      </Form.Group>
                      <Form.Group controlId="formFileMultiple" className="mb-3">
                        <Form.Label>Multiple files input example</Form.Label>
                        <Form.Control type="file" multiple />
                      </Form.Group>
                      <Row>
                        <Col sm="6">
                          <Form.Group className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="name" />
                          </Form.Group>
                        </Col>
                        <Col sm="6">
                          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" >
                            <Form.Label>Email address</Form.Label>
                            <Form.Control  type="email" />
                            <Form.Text className="text-muted"> {" "} We'll never share your email with anyone else.{" "} </Form.Text>
                          </Form.Group>
                        </Col>
                      </Row>
                      <div id="formSubmit">
                        <Form.Check type="checkbox" className="mb-2 text-muted"  label="Save my name, email, and website in this browser for the next time I comment."/>
                        <Button href="" size="lg" variant="success" type="submit" style={{color:"#fff"}}>Submit</Button>

                      </div>
                    </Form>
                  </div>
                </Col>
              </div>
            </div>

            ):(" ")
          }

          </div>

          <div style={{ width: "100%", height: "auto" }}>
            <CardDetail />
          </div>
        </Row>
      </Container>
    );
}

export default DetailProduct