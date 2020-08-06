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
                    <p>*Note: The Slack workspace is open to all OSU students (on-campus and Ecampus) with a valid OSU email! :)</p>
                    <a href="https://osu-hackathon.slack.com" target="_blank"><Button variant="orange" size="sm">Official OSU Hackathon Club Slack Workspace</Button></a>
            </div>
        </div>
        <br />

        <h1>Club Constitution</h1>
        <div className="blue">
            <div className="gray">
                <p>Find out more about officer position requirements here!</p>
                <a href="https://drive.google.com/file/d/1HBQVOznpinDAa59Nr7FPYiixhnuHgjaw/view?usp=sharing" target="_blank"><Button variant="orange" size="sm">Hackathon Club Constitution</Button></a>
            </div>

        </div>
    </Layout>
)