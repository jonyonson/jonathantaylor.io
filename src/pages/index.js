import React from 'react';
import { Link, graphql } from 'gatsby';
import Bio from '../components/bio';
import SEO from '../components/seo';
import Container from '../components/container';

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props;
    const posts = data.allMdx.edges;

    return (
      <Container>
        <SEO title="👨‍💻" />
        <Bio />
        <hr />
        <h2>Articles</h2>
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
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            # description
          }
        }
      }
    }
  }
`;
