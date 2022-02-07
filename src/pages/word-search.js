import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

function searchWord(event) {
    event.preventDefault();
    console.log("Word to find: ", )
}

const SecondPage = () => (
    <Layout>
        <Seo title="Word Search" />
        <h1>Word Search Solution</h1>
        <h4>02/07/2022</h4>
        <p>Implement a word search. Given a 2D array of letters and a word to find, return the 2D array with the found word's letters replaced with an asterisk (*).</p>

        Example:
        <StaticImage
            src="../images/sample-input.png"
            width={500}
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="A Gatsby astronaut"
            style={{ marginBottom: `1.45rem` }}
        />

        <form>
            <div>
                <label htmlFor="wordToFind">Word To Find</label>
                <input type="text" id="wordToFind" name="wordToFind"></input>
                <button onClick={searchWord}>Search</button>
            </div>
        </form>

        <Link to="/">Go back to the homepage</Link>
    </Layout>
)

export default SecondPage
