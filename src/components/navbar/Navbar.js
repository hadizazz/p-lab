import React from 'react'
import "../../assets/css/style.css"
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Button, FormControl } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import {AiOutlineShoppingCart} from "react-icons/ai"
import Home from "../../pages/home/home"
import Login from "../../pages/account/login"
import { useCart } from "react-use-cart"
import DetailProduct from '../../pages/product/DetailProduct';
import Carts from "../../pages/shop/cart"

const Navbars = () => {
  const {
    isEmpty, totalUniqueItems, Items, totalItems, updateItemQuantity, removeItem, emptyCart,
  } = useCart();
  return (
    <div className="nvbr">
      <Navbar bg="light" expand="md">
        <Container fluid>
          <Navbar.Brand className="offset-1 mr-5 pr-5" href="/">
            ActionFigure
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse className="justify-content-end" id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link  style={{ color: "#000" }} href="/">
                Home
              </Nav.Link>
              <Nav.Link style={{ color: "#000" }} href="/shop">
                Shop
              </Nav.Link>
             
            </Nav>
            <Nav.Link style={{ color: "#000" }} href="/login">
              Account
            </Nav.Link>
            <a className="btn btn-lg _cart" href="/cart" role="button">
              <AiOutlineShoppingCart /> 
              <span>{totalItems}</span>
            </a>
           
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navbars