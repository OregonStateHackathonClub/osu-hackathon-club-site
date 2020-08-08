import React from "react";
import Layout from "../components/layout";
import { Helmet } from "react-helmet";
import Button from "react-bootstrap/Button";
import logo from "../assets/img/osu_hackathon_club_logo_icon_right.png";

export default () => (
    <Layout>
        <Helmet>
            <title>Contact Us | Oregon State University Hackathon Club</title>
        </Helmet>
        <h1>Contact Us</h1>
        <img src={logo} alt="OSU BeaverHacks mascot" className="center"/>
        <div className="blue">
                <div className="gray">
                <p> If you have any questions about our upcoming events or have any ideas for future events, please email us at <a href="mailto:hackathonclub@oregonstate.edu"><Button variant="orange" size="sm">hackathonclub@oregonstate.edu</Button></a>!</p>
                <p>We can also be reached at the <a href="https://osu-hackathon.slack.com" target="_blank"><Button variant="orange" size="sm">Official OSU Hackathon Club Slack Workspace</Button></a>!</p>
                <p>Thank you, and we look forward to hearing from you! </p>
            </div>
        </div>
    </Layout>
)
