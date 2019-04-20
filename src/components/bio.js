import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import { rhythm } from "../utils/typography"

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata
        return (
          <div
            style={{
              display: `flex`,
              marginBottom: rhythm(2.5),
            }}
          >
            <Image
              fixed={data.avatar.childImageSharp.fixed}
              alt={author}
              style={{
                marginRight: rhythm(1 / 2),
                marginBottom: 0,
                minWidth: 50,
                borderRadius: `100%`,
              }}
              imgStyle={{ borderRadius: `50%` }}
            />
            <p>
            Shelley is a software engineer
            <a href={social.gtwitter}> @github </a>
            & core eng <a href={social.etwitter}> @electronjs </a> and 
            <a href={social.ntwitter}> @nodejs </a>. always learning. often caffeinated. 
            sometimes <a href={social.ptwitter}> tweeting </a>. speaks about things in places sometimes! she/her 🌹🏳️‍🌈
            </p>
          </div>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 75, height: 75) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          ptwitter
          gtwitter
          etwitter
          ntwitter
        }
      }
    }
  }
`

export default Bio
