import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
export default () => (
  <div style={{ color: `teal` }}>
    <Link to="/">Home</Link>
    <Header headerText="About Me" />
    <hr></hr>
    <Header headerText="Another heading goes here" />
    <p>I will fill this in soon enough.</p>
  </div>
)
