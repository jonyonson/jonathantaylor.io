import React from 'react';
import { Link, graphql } from 'gatsby';

// Components
import SEO from '../components/seo';
import Bio from '../components/bio';
import Container from '../components/container';

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props;
    const posts = data.allMdx.edges;

    return (
      <Container>
        <SEO />
        <Bio />
        <hr />
        <div style={{ marginBottom: '2rem' }}>
          <h2>Draft Articles</h2>
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug;
            return (
              <div key={node.fields.slug}>
                <h3 style={{ marginBottom: '.35rem' }}>
                  <Link to={node.fields.slug}>{title}</Link>
                </h3>
                <small>{node.frontmatter.date}</small>
                {/* <p dangerouslySetInnerHTML={{__html: node.frontmatter.description || node.excerpt}}/> */}
                <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
              </div>
            );
          })}
        </div>
      </Container>
    );
  }
}

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fields: { draft: { eq: true } } }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`;
