import React from "react";
import Layout from "../components/layout";
import { Helmet } from "react-helmet";

export default () => (
    <Layout>
        <Helmet>
            <title>Archive | Oregon State University Hackathon Club</title>
        </Helmet>
        <h1>Archive</h1>
        <br />

        <h2>Past Hackathons</h2>
        <div className="scroll green">
            <div className="gray">
                <h3>2020</h3>
                    <p><a href="https://beaverhacks-summer-2020.devpost.com/">BeaverHacks Summer 2020</a></p>
                    <p><a href="https://osu-spring2020.devpost.com/" target="_blank">BeaverHacks Spring 2020</a></p>
            </div>

            <br />
            <div className="gray">
                <h3>2019</h3>
                    <p><a href="https://osuhackathon-summer2019.devpost.com/" target="_blank">BeaverHacks Summer 2019</a></p>
            </div>

            <br />
            <div className="gray">
                <h3>2018</h3>
                    <p><a href="https://beaverhacks-fall-18.devpost.com/" target="_blank">BeaverHacks Fall 2018</a></p>
                    <p><a href="https://beaverhacks-summer-18.devpost.com/" target="_blank">BeaverHacks Summer 2018</a></p>
                    <p><a href="https://beaverhacks-spring18.devpost.com/" target="_blank">BeaverHacks Spring 2018</a></p>
                    <p><a href="https://osuwinter18.devpost.com/" target="_blank">BeaverHacks Winter 2018</a></p>
            </div>

        </div>
        
        <br />
        <br />
        <h2>Past HackerRank Challenges</h2>

        <br />
        <br />
        <h2>Past Workshops</h2>
    </Layout>
)


// links:
// https://osu-spring2020.devpost.com/
// https://osuhackathon-summer2019.devpost.com/
