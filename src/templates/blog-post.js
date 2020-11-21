import React from 'react';
import { Link, graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import styled from 'styled-components';
import theme from '../theme';

// Components
import SEO from '../components/seo';
import Container from '../components/container';
import DraftAlert from '../components/draft-alert';

// Styles
import 'katex/dist/katex.min.css';
import '../styles/prism.scss';

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.mdx;
    const { previous, next } = this.props.pageContext;

    const { title, description, date, draft, lastUpdated } = post.frontmatter;

    return (
      <Container>
        <SEO title={title} description={description || post.excerpt} />
        <h1>{title}</h1>
        <StyledDate>
          <p className="published-at">{date}</p>
          {lastUpdated && (
            <p className="updated-at">Last updated: {lastUpdated}</p>
          )}
        </StyledDate>
        {draft && <DraftAlert slug={post.slug} />}
        <MDXRenderer>{post.body}</MDXRenderer>
        <hr />

        <PostNav>
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
        </PostNav>
      </Container>
    );
  }
}

const StyledDate = styled.div`
  margin-top: -0.5rem;
  margin-bottom: 1.45rem;

  .published-at {
    display: inline;
  }

  .updated-at {
    font-size: 0.8em;
    font-style: italic;
  }
`;

const PostNav = styled.div`
  display: flex;
  margin-bottom: 1.45rem;

  .post-link {
    width: 50%;
    color: ${theme.light.primary};

    &:first-of-type {
      margin-right: 0.5rem;
    }

    &:last-of-type {
      margin-left: 0.5rem;
    }

    div {
      padding: 0.5rem;
      &.right {
        text-align: right;
      }

      p {
        color: ${theme.light.bodyFont};
        font-size: 80%;
        margin-bottom: 0.5rem;
      }

      p:last-of-type {
        font-size: 90%;
        margin: 0;
        color: inherit;
      }
    }
  }
`;

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
        lastUpdated(formatString: "MM/DD/YYYY")
      }
    }
  }
`;
