import React from "react";
import logo from './logo.svg';
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <a
        href="https://github.com/SueL28/reupload-weather-react"
        target="_blank"
        rel="noreferrer"
      >
        Open-source code
      </a>
      <span> by </span>
      <a
        href="https://linkedin.com/in/su-anne-lieu"
        target="_blank"
        rel="noreferrer"
      >
        Su-Anne Lieu
      </a> <span>hosted on Netlify and made with <img src={logo} alt="React Logo" className="react-logo-size"></img></span>
    </div>
  );
}