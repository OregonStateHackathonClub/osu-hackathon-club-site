import React from "react";
import Layout from "../components/layout";
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import "../assets/style.css";
import Button from "react-bootstrap/Button";


export default () => (
    <Layout>
        <Jumbotron>
            <h1>Oregon State University Hackathon Club</h1>
            <br />
            <p> Our mission is to strengthen the OSU community by fostering connections between students and building stronger programming skills through quarterly coding competitions and workshops. </p>
        </Jumbotron>

        <h2>Upcoming Events!</h2>
        <div className="upcoming-events">
            <h4>HackerRank Weekly Challenges</h4>            
            <a href="https://osu-cs.slack.com/"><Button variant="orange" size="sm">Take on our challenges here!</Button></a>
            <br />
            <br />
            <h4>BeaverHacks Summer 2020</h4><p>Register on Devpost by 11:59 pm on 6/15</p><a href="https://beaverhacks-summer-2020.devpost.com/">Devpost</a>
        </div>
    </Layout>
)
