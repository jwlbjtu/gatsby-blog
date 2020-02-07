import React from "react"
import { Link, graphql } from "gatsby"
import styled from 'styled-components'

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogLink = styled(Link)`
  text-decoration: none;
`

const BlogTitle = styled.h3`
  margin-bottom: 20px;
  color: green;
`

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <div>
      <h1>Wenlong's Thoughts</h1>
      {
        data.allMarkdownRemark.edges.map(({node}) => {
          return (
            <div key={node.id}>
              <BlogLink to={ node.fields.slug }>
                <BlogTitle>
                  {node.frontmatter.title}
                </BlogTitle>
              </BlogLink>
              <span>{node.frontmatter.date}</span>
              <p>{node.excerpt}</p>
            </div>
          )
        })
      }
    </div>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          excerpt
          html
          frontmatter {
            title
            description
            date
          }
          fields {
            slug
          }
        }
      }
      totalCount
    }
  }
`;