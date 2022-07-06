import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h1>
        {" "}
        <header>
          <div className="logo-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="243" height="59.201" viewBox="0 0 243 59.201">
              <g id="Group_125" data-name="Group 125" transform="translate(-140 -35.9)">
                <path id="Icon_awesome-vr-cardboard" data-name="Icon awesome-vr-cardboard" d="M91.091,4.5H4.794A4.866,4.866,0,0,0,0,9.433V58.767A4.866,4.866,0,0,0,4.794,63.7h24a9.576,9.576,0,0,0,8.744-5.818l4.156-9.5a6.625,6.625,0,0,1,12.489,0l4.156,9.5A9.578,9.578,0,0,0,67.087,63.7h24a4.866,4.866,0,0,0,4.794-4.933V9.433A4.866,4.866,0,0,0,91.091,4.5Zm-67.12,37a9.871,9.871,0,0,1,0-19.734,9.871,9.871,0,0,1,0,19.734Zm47.943,0A9.871,9.871,0,1,1,81.5,31.634,9.73,9.73,0,0,1,71.914,41.5Z" transform="translate(140 31.4)" fill="#fcf9f9" />
                <text id="Dystopia" transform="translate(258 69)" fill="#fcf9f9" font-size="30" font-family="SegoeUI-Bold, Segoe UI" font-weight="700">
                  <tspan x="0" y="0">
                    Dystopia
                  </tspan>
                </text>
              </g>
            </svg>
          </div>
          <nav className="nav-links">
            <ul>
              <li>
                <Link className="hom" to="/home">
                  Home
                </Link>
                <Link className="cat" to="/category">
                  Categories
                </Link>
                <Link className="sub" to="/subscribe">
                  Subscribe
                </Link>
                <Link className="sea" to="/search">
                  Search
                </Link>
              </li>
            </ul>
          </nav>
        </header>
      </h1>
    </div>
  );
};

export default About;
