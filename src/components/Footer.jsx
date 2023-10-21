import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiOutlineArrowUp,
} from "react-icons/ai";

import my from "../assets/my.jpg"

const Footer = () => {
  return (
    <footer>
      <div>
         <img
          src={my}
          alt="Founder"
        /> 

        <h2>Yash Madaan</h2>
        <p> hustle kro भसड़ नहीं.</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
         
          <a href="https://www.instagram.com/yashu17yulk/" target={"blank"}>
            <AiFillInstagram />
          </a>
          <a href="https://github.com/yashu17yulk" target={"blank"}>
            <AiFillGithub />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;
