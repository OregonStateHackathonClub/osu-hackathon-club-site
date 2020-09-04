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
        <h2>Club Meetings</h2>
        <div className="scroll green">
            <div className="gray">
                <h3>2020</h3>
                    <h4>August</h4>
                        <p><a href="https://docs.google.com/presentation/d/1cCb74E-1FkfXr0BMND3eo_f6Wl2sDE8ORcjDE5pn4rk/edit?usp=sharing" target="_blank">Meeting Slides</a></p>
                        <p><a href="https://youtu.be/uN-rdQf1DaI" target="_blank">Meeting Recording</a></p>
                    <h4>July</h4>
                        <p><a href="https://docs.google.com/presentation/d/1XW-YbOhOEzJ5uaqXQCbsYp-LHQIA4wmx8NX2QPAYKwE/edit?usp=sharing" target="_blank">Meeting Slides</a></p>
                        <p><a href="https://www.youtube.com/watch?v=Vxig1U0EfPU" target="_blank">Meeting Recording</a> </p>
            </div>
        </div>
        <br />
        <br />
        <h2>Past Hackathons</h2>
        <div className="scroll green">
            <div className="gray">
                <h3>2020</h3>
                    <p><a href="https://beaverhacks-summer-2020.devpost.com/" target="_blank">BeaverHacks Summer 2020</a></p>
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
        <h2>Articles</h2>
        <div className="scroll green">
            <div className="gray">
                <h3>It's business as usual for online Hackathon Club</h3>
                <p>Source: OSU EECS News</p>
                <p><a href="http://blogs.oregonstate.edu/eecsnews/2020/05/14/its-business-as-usual-for-online-hackathon-club/">Link to article</a></p>
            </div>
        </div>
        
        <br />
        <br />
        <h2>Past HackerRank Challenges</h2>
        <div className="scroll green">
            <div className="gray">
                <p>Coming soon!</p>
            </div>
        </div>

        <br />
        <br />
        <h2>Past Workshops</h2>
        <div className="scroll green">
            <div className="gray">
                <p>Coming soon!</p>
            </div>
        </div>
    </Layout>
)


// links:
// https://osu-spring2020.devpost.com/
// https://osuhackathon-summer2019.devpost.com/
