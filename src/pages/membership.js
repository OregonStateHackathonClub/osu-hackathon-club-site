import React from "react";
import Layout from "../components/layout";
import Button from "react-bootstrap/Button";
import { Helmet } from "react-helmet";

export default () => (
    <Layout>
        <Helmet>
            <title>Membership | Oregon State University Hackathon Club</title>
        </Helmet>
        <h1>Join Us!</h1>
        <p>All OSU students are welcome and encouraged to join!</p>
        <p>Become a member in three easy steps!</p>
        <br />
        <div className="join scroll">
            <div className="gray">
                <h4>Step 1: Fill out the Google Form</h4>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLScx22ZBUYUFZX-JszQP3L4f_TQGtrEX7BC8xoki-iuWmwvvEQ/viewform" target="_blank"><Button variant="orange" size="sm">Google Form</Button></a>
            </div>
            <br />

            <div className="gray">
                <h4>Step 2: Join at OSU SLI</h4>
                    <a href="https://apps.ideal-logic.com/osusli" target="_blank"><Button variant="orange" size="sm">OSU SLI</Button></a>
            </div>
            <br />

            <div className="gray">
                <h4>Step 3: Join us on Slack*</h4>
                    <p>*Note: Both slack workspaces are open to all OSU students (on-campus and Ecampus) with a valid OSU email! :)</p>
                    <a href="https://osu-cs.slack.com/" target="_blank"><Button variant="orange" size="sm">OSU Online CS (Unofficial) Slack - Hackathon Channel #hackathons</Button></a>
                    <br />
                    <br />
                    <a href="https://osu-hackathon.slack.com" target="_blank"><Button variant="orange" size="sm">OSU Hackathon Slack (used for hackathons)</Button></a>
            </div>
        </div>
    </Layout>
)