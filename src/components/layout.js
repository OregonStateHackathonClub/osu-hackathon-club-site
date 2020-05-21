import React from "react";
import { Link } from "gatsby";
import Navbar from 'react-bootstrap/Navbar';
import { Helmet } from "react-helmet";


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
    </Helmet>
    <header style={{ marginBottom: `1.5rem` }}>
        <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
            <h3 style={{ display: `inline` }}>OSU Hackathon Club</h3>
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
    </div>
)