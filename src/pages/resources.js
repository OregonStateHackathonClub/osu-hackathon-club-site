import React from "react";
import Layout from "../components/layout";
import { Helmet } from "react-helmet";

export default () => (
    <Layout>
        <Helmet>
            <title>Resources | Oregon State University Hackathon Club</title>
        </Helmet>
        <h1>Resources</h1>
        <p>Here are some sites to learn more!</p>
        <br />
        <h3>Free Ebook Foundation</h3>
        <p>A very long list of ebooks on every programming language you can think of, as well as other STEM disciplines!</p>
        <p><a href="https://ebookfoundation.github.io/free-programming-books/" target="_blank">Free Programming Books</a></p>
        <br />
        <h3>MLH Hackathon Starter Kits</h3>
            <p><a href="https://github.com/MLH/mlh-hackathon-flask-starter" target="_blank">MLH Flask Starter Kit</a></p>
            <p><a href="https://github.com/MLH/mlh-hackathon-nodejs-starter" target="_blank">MLH Hackathon Node.js Starter Kit</a></p>
    </Layout>
)