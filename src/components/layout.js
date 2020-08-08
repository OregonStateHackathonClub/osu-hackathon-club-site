import React from "react";
import { Link } from "gatsby";
import Navbar from 'react-bootstrap/Navbar';
import { Helmet } from "react-helmet";
import logo from "../assets/img/osu_hackathon_club_logo_icon_right.png";


const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default ({ children }) => (
    <div style={{ margin: `3rem auto`, maxWidth: 900, padding: `0 1rem` }}>
    <Helmet>
      <title>Oregon State University Hackathon Club</title>
      <link href="https://fonts.googleapis.com/css2?family=Bangers&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&display=swap" rel="stylesheet"></link>
      <link rel="shortcut icon" type="image/x-icon" href={ logo } />

    </Helmet>
    <header style={{ marginBottom: `1.5rem` }}>
        <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
            <h3 style={{ display: `inline`, whiteSpace: `nowrap`}}>
              OSU Hackathon Club
              <marquee behavior="slide" scrollamount="20" direction="up">
                <img width="50px" height="50px" src={ logo } alt="OSU BeaverHacks mascot"/>
              </marquee>
            </h3>
        </Link>
        <Navbar>
          <ul style={{ listStyle: `none`, float: `right` }}>
              <ListLink to="/">Home</ListLink>
              <ListLink to="/about/">About</ListLink>
              <ListLink to="/membership">Membership</ListLink>
              <ListLink to="/resources">Resources</ListLink>
              <ListLink to="/archive">Archive</ListLink>
              <ListLink to="/contact/">Contact Us</ListLink>
          </ul>
        </Navbar>
    </header>
    <div>{children}</div>
      <br className="clearboth" />
      <footer>
        (c) Oregon State University Hackathon Club (Est. 2018)
      </footer>
    </div>
)