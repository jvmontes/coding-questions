import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
    <Layout>
        <Seo title="Home" />
        <h1>Coding Interview Questions</h1>
        <p>The purpose of this site is to build solutions to various coding questions. Many of these coding questions are sourced from the "rendezvouz with cassidoo" newsletter, available here: https://cassidoo.co/newsletter/</p>

        <div>
            <h2>Word Search</h2>
            <h4>02/07/2022</h4>
            <p>Implement a word search. Given a 2D array of letters and a word to find, return the 2D array with the found word's letters replaced with an asterisk (*).</p>
            <Link to="/word-search/">View Solution</Link> <br />
        </div>

    </Layout>
)

export default IndexPage
