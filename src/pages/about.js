import React from "react";
import Layout from "../components/layout";
import { Helmet } from "react-helmet";


export default () => (
    <Layout>
        <Helmet>
            <title>About | Oregon State University Hackathon Club</title>
        </Helmet>
        <h1>About Us</h1>
        <div className="about-section">
            <div className="gray">
                <p>Hello, we're the OSU Hackathon Club!</p> 
                <p>Because our club was originally created with the needs of Ecampus CS students in mind, our monthly meetings, weekly HackerWeeks competitions, and our quarterly BeaverHacks hackathons are held entirely online.</p> 
                <p>However, we also fund in-person events in locations wherever there is sufficient interest! Contact our Local Chapter Coordinator for more information.</p> 
                <p>In the future, there are plans to create an on-campus group as well. Let us know if you are interested in helping develop the on-campus group or planning any in-person events.</p> 
                <p>Through small, humble beginnings our club has continued to grow through the support of OSU students, alumni and faculty. We welcome tech enthusiasts and programmers of all skill levels and experiences! </p>
            </div>
        </div>

        <br />
        <h2>Current Board Members</h2>
        <div className="current-board scroll">
            <div className="gray">
                <h3>President</h3><p>Jordan Bartos</p>
                <h3>Vice President</h3><p>Ryan Davis</p>
                <h3>Webmaster and Secretary</h3><p>Karen Berba</p>
                <h3>Treasurer</h3><p>Sam Kinkade</p>
                <h3>Historian</h3><p>Judy Lee</p>
                <h3>Local Chapter Coordinator</h3><p>Sriram Narayanan</p>
                <h3>Hackathon Coordinator</h3><p>Alaric Hartsock </p>
                <h3>Communications Coordinator</h3><p>Luwey Hon</p>
                <h3>HackerWeeks Coordinator</h3><p>Ashley Owens</p>
            </div>
        </div>

        <br />
        <h2>Past Board Members</h2>
        <div className="past-board scroll">
            <div className="yellow">
                <h3>Summer 2020</h3>
                <h4>President</h4><p>Jordan Bartos</p>
                <h4>Vice President and Local Chapter Coordinator</h4><p>Ryan Davis</p>
                <h4>Webmaster and Secretary</h4><p>Karen Berba</p>
            </div>
            <div className="green">
                <h3>Spring 2020</h3>
                <h4>President</h4><p>Jordan Bartos</p>
                <h4>Vice President and Local Chapter Coordinator</h4><p>Ryan Davis</p>
                <h4>Webmaster and Secretary</h4><p>Karen Berba</p>
            </div>
            <div className="blue">
                <h3>Winter 2020</h3>
                <h4>President</h4><p>Jordan Bartos</p>
                <h4>Vice President</h4><p>Anish Reddy</p>
                <h4>Secretary</h4><p>Josh Mckerracher</p>
                <h4>Finance Chair</h4><p>Sriram Narayanan</p>
                <h4>Local Chapter Coordinator</h4><p>Trinity Lundgren</p>
                <h4>Director of Communications / Historian</h4><p>Dani Sadorf</p>
                <h4>Webmaster</h4><p>Haya Ahmed</p>
            </div>
            <div className="orange">
                <h3>Fall 2020</h3>
                <h4>President</h4><p>Jordan Bartos</p>
                <h4>Vice President</h4><p>Anish Reddy</p>
                <h4>Finance Chair</h4><p>Sriram Narayanan</p>
                <h4>Director of Hackathon</h4><p>Joshua Mckerracher</p>
                <h4>Webmaster</h4><p>Ryan Gross</p>
            </div>
        </div>
    </Layout>
)