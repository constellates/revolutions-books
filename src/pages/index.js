import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import InstagramPosts from "../components/instagram-posts"
import SEO from "../components/seo"
import GoogleMap from '../components/google-map';

const IndexPage = ({ data: { allInstaNode } }) => (
  <Layout>
    <SEO title="Home" />

    <section className="hero is-link is-huge has-bg-img">
      <div className="hero-body">
        <div className="container">
          <p className="hero-title has-text-centered">
            We buy and sell new and used books, vinyl and collectibles.
          </p>
        </div>
      </div>
    </section>

    <section id="about" className="hero is-white is-medium">
      <div className="hero-body">
        <div className="container">
          <h1 className="title has-text-centered">
            About Us
          </h1>
          <div className="underscore"><div></div></div>
          <h2 className="subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tempus nulla est, at porttitor metus pulvinar laoreet. In ac ipsum at augue dapibus malesuada at in odio. Duis tempor vel ante vitae rhoncus. Cras eu purus at erat vehicula aliquam ut a purus. Donec pretium ut augue quis laoreet. Donec nec urna ut arcu ultrices tincidunt. Phasellus sed justo molestie, vulputate nulla at, viverra tellus. Fusce nisl diam, placerat hendrerit libero vitae, finibus luctus mauris. Quisque non dui id ligula venenatis efficitur quis euismod mi. Nam laoreet orci non aliquam maximus. Nunc dictum leo in ante sollicitudin, eu iaculis lacus rutrum.
          </h2>
        </div>
      </div>
    </section>

    <section id="selling" className="hero is-taupe is-medium">
      <div className="hero-body">
        <div className="container">
          <h1 className="title has-text-centered">
            Interested In Selling?
          </h1>
          <div className="underscore"><div></div></div>
          <h2 className="subtitle">
            We're always buying inventory. Check out the link below to learn more about some of our frequently asked questions about selling.
          </h2>
          <button className="button is-white">Learn More</button>
        </div>
      </div>
    </section>

    <section id="contact" className="hero is-white is-medium">
      <div className="hero-body">
        <div className="container">
          <h1 className="title has-text-centered">
            Hours & Location
          </h1>
          <div className="underscore"><div></div></div>
          <div className="columns">
            <div className="column">
              {/* <GoogleMap
                googleMapsApiKey="AIzaSyBP4Aqq6NqwOd5AlRHTTzoatb3BBAiMzNg" 
                address={{
                  lat: '45.5908652',
                  lng: '-122.7552229'
                }}
              /> */}
            </div>
            <div className="column">
              <div className="container">
                <h1 className="title">
                  Hours
                </h1>

                <ul>
                  <li>Mon & Tues <span>Closed</span></li>
                  <li>Weds, Thurs & Fri <span>12pm - 8pm</span></li>
                  <li>Sat & Sun <span>10am - 5pm</span></li>
                </ul>
              </div>
              <hr />
              <div className="container">
                <h1 className="title">
                  Location
                </h1>
                <p>8713 N Lombard</p>
                <p>Portland, OR 97203</p>
                <p>North Portland, St. Johns</p>
              </div>
              <hr />
              <div className="container">
                <h1 className="title">
                  Contact
                </h1>
                <p>8713 N Lombard</p>
                <p>Portland, OR 97203</p>
                <p>North Portland, St. Johns</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="section is-taupe">
          <h1 className="title has-text-centered">
            Follow Along
          </h1>
          <div className="underscore"><div></div></div>
      {/* <Container
        title="Public scraping"
        text="Using public scraping you are able to retrieve the last 12 posts of
        an Instagram account without using an access token."
        nodes={allInstaNode}
      /> */}
      <InstagramPosts nodes={allInstaNode} />
    </section>

    {/* <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p> */}
    {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}> */}
      {/* <Image /> */}
      {/* {JSON.stringify(allInstaNode)} */}
    {/* </div> */}
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

export const pageQuery = graphql`
  query IndexQuery {
    allInstaNode(filter: { username: { eq: "revolutionsbookshop" } }) {
      edges {
        node {
          id
          username
          likes
          caption
          comments
          localFile {
            childImageSharp {
              fluid(quality: 100, maxWidth: 600, maxHeight: 600) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  }
`

export default IndexPage
