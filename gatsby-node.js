const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');
const kebabCase = require('lodash.kebabcase');

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const blogPostTemplate = path.resolve('./src/templates/blog-post.js');
  const tagTemplate = path.resolve('./src/templates/tags.js');

  const result = await graphql(
    `
      {
        posts: allMdx(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                tags
                draft
              }
            }
          }
        }
        tagsGroup: allMdx(limit: 2000) {
          group(field: frontmatter___tags) {
            fieldValue
          }
        }
      }
    `,
  );

  // handle errors
  if (result.errors) {
    reporter.panicOnBuild('Error while running GraphQL query.');
    return;
  }

  // Create blog posts pages.
  const posts = result.data.posts.edges;

  posts.forEach((post, index) => {
    const getPreviousPost = () => {
      return index === posts.length - 1 ? null : posts[index + 1].node;
    };

    const getNextPost = () => {
      if (index === 0) return null;
      return posts[index - 1].node.frontmatter.draft
        ? null
        : posts[index - 1].node;
    };

    const previous = getPreviousPost();
    const next = getNextPost();

    createPage({
      path: post.node.fields.slug,
      component: blogPostTemplate,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    });
  });

  // Extract tag data from query
  const tags = result.data.tagsGroup.group;

  // Make tag pages
  tags.forEach((tag) => {
    createPage({
      path: `/tags/${kebabCase(tag.value)}/`,
      component: tagTemplate,
      context: {
        tag: tag.value,
      },
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'Mdx') {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: 'slug',
      node,
      value,
    });
  }
};
