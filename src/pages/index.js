import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import InstagramPosts from "../components/instagram-posts"
import SEO from "../components/seo"

const IndexPage = ({ data: { allInstaNode } }) => (
  <Layout>
    <SEO title="Home" />

    <div className="navbar-spacer"></div>

    <section className="hero is-link is-huge has-bg-img">
      <div className="hero-body">
        <div className="container">
          <h1 className="hero-title has-text-centered">
            We buy and sell new and used books, vinyl and collectibles.
          </h1>
        </div>
      </div>
    </section>

    <section id="about" className="hero is-white is-medium">
      <div className="hero-body">
        <div className="container">
          <h2 className="title has-text-centered">
            About Us
          </h2>
          <div className="underscore"><div></div></div>
          <p className="body-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tempus nulla est, at porttitor metus pulvinar laoreet. In ac ipsum at augue dapibus malesuada at in odio. Duis tempor vel ante vitae rhoncus. Cras eu purus at erat vehicula aliquam ut a purus. Donec pretium ut augue quis laoreet. Donec nec urna ut arcu ultrices tincidunt. Phasellus sed justo molestie, vulputate nulla at, viverra tellus. Fusce nisl diam, placerat hendrerit libero vitae, finibus luctus mauris. Quisque non dui id ligula venenatis efficitur quis euismod mi. Nam laoreet orci non aliquam maximus. Nunc dictum leo in ante sollicitudin, eu iaculis lacus rutrum.
          </p>
        </div>
      </div>
    </section>

    <section id="selling" className="hero is-taupe is-medium">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h2 className="title">
            Interested In Selling?
          </h2>
          <div className="underscore"><div></div></div>
          <p className="body-text has-text-centered">
            We're always buying inventory. Check out the link below to learn more about some of our frequently asked questions about selling.
          </p>
          {/* <button className="button is-white">Contact Us</button> */}
          <a className="button" href="mailto:revolutionsbookshop@gmail.com">Contact Us</a> 
        </div>
      </div>
    </section>

    <section id="contact" className="hero is-white is-medium">
      <div className="hero-body">
        <div className="container">
          <h2 className="title has-text-centered">
            Hours & Location
          </h2>
          <div className="underscore"><div></div></div>
          <div className="columns">
            <div className="column">
              <div className="map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2791.985365619386!2d-122.7574852842266!3d45.59083893300484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5495a9278d21a269%3A0x983fffa92e9d53c!2sRevolutions%20Bookshop!5e0!3m2!1sen!2sus!4v1577594623557!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  style={{ border:0, marginRight: 40 }}
                  allowFullScreen={false}></iframe>
              </div>
            </div>
            <div className="column">
              <div className="container contact-section">
                <h3 className="title">
                  Hours
                </h3>
                <ul>
                  <li><span>Mon & Tues</span> Closed</li>
                  <li><span>Weds, Thurs & Fri</span> 12pm - 8pm</li>
                  <li><span>Sat & Sun</span> 10am - 5pm</li>
                </ul>
              </div>
              <hr />
              <div className="container contact-section">
                <h3 className="title">
                  Location
                </h3>
                <p>8713 N Lombard</p>
                <p>Portland, OR 97203</p>
                <p>North Portland, St. Johns</p>
              </div>
              <hr />
              <div className="container contact-section">
                <h3 className="title">
                  Contact
                </h3>
                  <p><span>T</span> 971-288-2391</p>
                  <p><span>E</span> revolutionsbookshop@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="section is-taupe">
          <h2 className="title has-text-centered">
            Follow Along
          </h2>
          <div className="underscore"><div></div></div>
      {/* <Container
        title="Public scraping"
        text="Using public scraping you are able to retrieve the last 12 posts of
        an Instagram account without using an access token."
        nodes={allInstaNode}
      /> */}
      <InstagramPosts nodes={allInstaNode} />
    </section>

    {/* <h2>Hi people</h2>
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
