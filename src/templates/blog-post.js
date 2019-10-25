import React from 'react';
import { Link, graphql } from 'gatsby';
import SEO from '../components/seo';
import {
  TiArrowRightOutline as FaArrowRight,
  TiArrowLeftOutline as FaArrowLeft,
} from 'react-icons/ti';

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark;
    const { previous, next } = this.props.pageContext;

    return (
      <React.Fragment>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <h1>{post.frontmatter.title}</h1>
        <p style={{ display: 'block', marginTop: '-0.5rem' }}>
          {post.frontmatter.date}
        </p>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr />
        <ul
          style={{
            listStyle: 'none',
            padding: 0,
            margin: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <li style={{ textAlign: 'center' }}>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                {/* ← {previous.frontmatter.title} */}
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <FaArrowLeft style={{ marginRight: '0.3rem' }} />{' '}
                  {previous.frontmatter.title}
                </div>
              </Link>
            )}
          </li>
          <li style={{ textAlign: 'center' }}>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {/* {next.frontmatter.title} → */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  {next.frontmatter.title}{' '}
                  <FaArrowRight style={{ marginLeft: '0.3rem' }} />
                </div>
              </Link>
            )}
          </li>
        </ul>
      </React.Fragment>
    );
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        # description
      }
    }
  }
`;
