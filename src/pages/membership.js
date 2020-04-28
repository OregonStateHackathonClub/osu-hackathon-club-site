import React from "react"
import Layout from "../components/layout"

export default () => (
    <Layout>
        <h1>Join Us!</h1>
        <h2>Become a member in three easy steps!</h2>
        <h3>Step 1: Fill out the Google Form</h3>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLScx22ZBUYUFZX-JszQP3L4f_TQGtrEX7BC8xoki-iuWmwvvEQ/viewform"><button>Google Form</button></a>
        <h3>Step 2: Join at OSU SLI</h3>
            <a href="https://apps.ideal-logic.com/osusli"><button>OSU SLI</button></a>
        <h3>Step 3: Join us on Slack</h3>
            <a href="https://osu-cs.slack.com/"><button>OSU Post-Bacc CS Hackathon Slack Channel #hackathons</button></a>
            <a href="https://osu-hackathon.slack.com"><button>OSU Hackathon Slack (used for hackathons)</button></a>
    </Layout>
)