import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="flex flex-col gap-3 py-4 text-[11px]">
      <hr className="bg-slate-200 md:w-screen" />
      <div className="px-5 md:px-24 flex flex-col md:items-center gap-3">
        <div className="text-xs md:w-96">
          <p>
            By <a href="https://github.com/AdrianScharff">Adrian Scharff</a>
          </p>
        </div>
        <ul className="w-fit grid md:flex grid-cols-[repeat(2,auto)] gap-6 mx-auto md:mx-0 md:ml-36">
          <li>
            <a href="https://github.com/AdrianScharff">
              <FontAwesomeIcon icon={faGithub} className="mr-2 text-sm" />
              Github
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/adri%C3%A1n-ju%C3%A1rez-17a51b263/">
              <FontAwesomeIcon icon={faLinkedin} className="mr-2 text-sm" />
              Linkedin
            </a>
          </li>
          <li>
            <a href="https://twitter.com/AdrianCoding">
              <FontAwesomeIcon icon={faTwitter} className="mr-2 text-sm" />
              Twitter
            </a>
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faWhatsapp} className="mr-2 text-sm" />
              Whatsapp
            </a>
          </li>
        </ul>
        <hr className="bg-slate-200 md:w-[90vw]" />
        <div className="text-xs md:w-96">
          <p>
            © 2024 <a href="https://github.com/AdrianScharff">AdrianScharff</a>
            . All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
