import React from "react";
import Layout from "../components/layout";
import Button from "react-bootstrap/Button";

export default () => (
    <Layout>
        <h1>Join Us!</h1>
        <p>Become a member in three easy steps!</p>
        <br />
        <h4>Step 1: Fill out the Google Form</h4>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLScx22ZBUYUFZX-JszQP3L4f_TQGtrEX7BC8xoki-iuWmwvvEQ/viewform"><Button variant="orange" size="sm">Google Form</Button></a>
        <br />
        <br />
        <h4>Step 2: Join at OSU SLI</h4>
            <a href="https://apps.ideal-logic.com/osusli"><Button variant="orange" size="sm">OSU SLI</Button></a>
        <br />
        <br />
        <h4>Step 3: Join us on Slack</h4>
            <a href="https://osu-cs.slack.com/"><Button variant="orange" size="sm">OSU Post-Bacc CS Hackathon Slack Channel #hackathons</Button></a>
            <br />
            <br />
            <a href="https://osu-hackathon.slack.com"><Button variant="orange" size="sm">OSU Hackathon Slack (used for hackathons)</Button></a>
    </Layout>
)