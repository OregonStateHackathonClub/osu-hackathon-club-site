import React from "react";
import Layout from "../components/layout";
import { Helmet } from "react-helmet";
import Button from "react-bootstrap/Button";

export default () => (
    <Layout>
        <Helmet>
            <title>Contact Us | Oregon State University Hackathon Club</title>
        </Helmet>
        <h1>Contact Us</h1>
        <div className="blue">
                <div className="gray">
                <p> If you have any questions about our upcoming events or have any ideas for future events, please email us at the address below! Thank you, and we look forward to hearing from you! </p>
                <p>
                <a href="mailto:hackathonclub@oregonstate.edu"><Button variant="orange" size="sm">hackathonclub@oregonstate.edu</Button></a>
                </p>
            </div>
        </div>
    </Layout>
)
