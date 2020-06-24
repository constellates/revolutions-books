import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import InstagramPosts from "../components/instagram-posts"
import SEO from "../components/seo"

const IndexPage = ({ data: { allInstaNode } }) => (
  <Layout>
    <SEO title="Revolutions Bookshop" />

    <div className="navbar-spacer is-hidden-mobile"></div>

    <section className="hero is-huge">
      <img src={'/revolutions-bookshop-logo.svg'} alt="Logo" className="logo" />
    </section>

    <section id="about" className="hero is-taupe is-medium">
      <div className="hero-body">
        <div className="container">
          <div className="columns">
            <div className="column">
              <h2 className="title has-text-centered">
                About Us
              </h2>
              <div className="underscore"><div></div></div>
              <p className="body-text">
                We are a small, independent bookstore specializing in a curated selection of mostly used books, some new books, vinyl, and collectibles.   Our academic and punk roots make for a bold selection in all genres, especially everything weird and wonderful.  We buy books and vinyl.  Call for more information.
                <br/>
                <br/>
                Peggy & Brian Manning, Proprietors.
              </p>
            </div>
            <div className="column">
              <img src={'/about-us.jpg'} alt="Logo" />
            </div>
          </div>
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
                <p>
                  Check google maps listing for up to date hours.
                </p>
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
    allInstaNode(filter: { username: { eq: "21644687892" } }, sort: {order: DESC, fields: timestamp}) {
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
