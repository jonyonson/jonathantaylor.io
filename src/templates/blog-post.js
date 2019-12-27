import React from 'react';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';
import SEO from '../components/seo';
// import {
//   TiArrowRightOutline as FaArrowRight,
//   TiArrowLeftOutline as FaArrowLeft,
// } from 'react-icons/ti';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Container from '../components/container';

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.mdx;
    const { previous, next } = this.props.pageContext;
    console.log(next, previous);
    return (
      <Container>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <h1>{post.frontmatter.title}</h1>
        <p style={{ display: 'block', marginTop: '-0.5rem' }}>
          {post.frontmatter.date}
        </p>
        <MDXRenderer>{post.body}</MDXRenderer>
        {/* <div dangerouslySetInnerHTML={{ __html: post.html }} /> */}
        <hr />
        {/* <ul
          style={{
            listStyle: 'none',
            padding: 0,
            margin: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        > */}

        <PostLinks>
          <PostLink exists={previous}>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                <div className="left">
                  <p>Previous Article</p>
                  <p>{previous.frontmatter.title}</p>
                </div>
              </Link>
            )}
          </PostLink>

          <PostLink exists={next}>
            {next && (
              <Link to={next.fields.slug} rel="next">
                <div className="right">
                  <p>Next Article</p>
                  <p>{next.frontmatter.title}</p>
                </div>
              </Link>
            )}
          </PostLink>
        </PostLinks>
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
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        # description
      }
    }
  }
`;

const PostLinks = styled.div`
  display: flex;
  margin-bottom: 1.45rem;

  @media (max-width: $PHONE) {
    flex-direction: column;
  }
`;

const PostLink = styled.div`
  width: 50%;
  border: ${(props) => (props.exists ? '1px solid black' : 'none')};

  &:first-of-type {
    margin-right: 0.5rem;
  }

  &:last-of-type {
    margin-left: 0.5rem;
  }

  &:hover {
    /* background: ${(props) => (props.exists ? 'green' : 'none')}; */
  }

  div {
    padding: 0.5rem;
    &.right {
      text-align: right;
    }

    p {
      font-size: 80%;
      margin-bottom: 0.5rem;
    }

    p:last-of-type {
      margin: 0;
    }
  }
`;
