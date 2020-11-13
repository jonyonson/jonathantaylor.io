import React from 'react';
import { Link, graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import SEO from '../components/seo';
import Container from '../components/container';
import DraftAlert from '../components/draft-alert';
import './blog-post.scss';

import 'katex/dist/katex.min.css';

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.mdx;
    const { previous, next } = this.props.pageContext;

    const { title, description, date, draft } = post.frontmatter;

    return (
      <Container>
        <SEO title={title} description={description || post.excerpt} />
        <h1>{title}</h1>
        <p style={{ display: 'block', marginTop: '-0.5rem' }}>{date}</p>
        {draft && <DraftAlert slug={post.slug} />}
        <MDXRenderer>{post.body}</MDXRenderer>
        <hr />

        <div className="post-links">
          <div className="post-link">
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                <div className="left">
                  <p>Previous Article</p>
                  <p>{previous.frontmatter.title}</p>
                </div>
              </Link>
            )}
          </div>

          <div className="post-link">
            {next && (
              <Link to={next.fields.slug} rel="next">
                <div className="right">
                  <p>Next Article</p>
                  <p>{next.frontmatter.title}</p>
                </div>
              </Link>
            )}
          </div>
        </div>
      </Container>
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
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      body
      slug
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        description
        draft
      }
    }
  }
`;
