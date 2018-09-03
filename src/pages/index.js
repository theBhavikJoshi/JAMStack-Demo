import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1>Hi people</h1>
    <p>This is <b>Bhavik Joshi</b>. A Full Stack Web Developer from India! </p>
    <p>My preferred stack is Node.js, React, MongoDB and Javascript.</p>
    <p>So here I am, applying for a free ticket to a great event, the 2018 JAMStack Hackathon.</p>
    <p>Please provide me one! 😉</p>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
