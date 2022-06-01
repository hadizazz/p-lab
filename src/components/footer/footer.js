import React from "react";
import { Container } from 'react-bootstrap';
import "../../assets/css/style.css";
import {AiFillFacebook} from 'react-icons/ai';
import {AiOutlineTwitter} from 'react-icons/ai';
import {AiFillLinkedin} from 'react-icons/ai';
import {AiFillGithub} from 'react-icons/ai';



function Footer() {
  return (
    <footer class="footer-distributed">
        <Container>
          <div class="footer-left">

            <h3>Action<span>figure</span></h3>

            <p class="footer-links">
              <a href="#">Home</a>
              ·
              <a href="#">Blog</a>
              ·
              <a href="#">Pricing</a>
              ·
              <a href="#">About</a>
              ·
              <a href="#">Faq</a>
              ·
              <a href="#">Contact</a>
            </p>

            <p class="footer-company-name">Plabstore © 2022 plabstore, Inc. © 2022 Plabstore, Inc.</p>

            <div class="footer-icons">

              <a href="#"><AiFillFacebook /></a>
              <a href="#"><AiOutlineTwitter /></a>
              <a href="#"><AiFillLinkedin /></a>
              <a href="#"><AiFillGithub /></a>

            </div>

          </div>

          <div class="footer-right">

            <p>Contact Us</p>

            <form action="#" method="post">

              <input type="text" name="email" placeholder="Email"/>
              <textarea name="message" placeholder="Message"></textarea>
              <button>Send</button>

            </form>

          </div>
      </Container>
</footer>
  );
}

export default Footer;
