import React from 'react';
import { graphql, Link } from 'gatsby';

import PageLayout from '../page-layout';
import BlogPostCard from '../components/BlogPostCard';

import { FrontMatter, WordCount } from '../types/blog';

import styles from '../styles/page.module.scss';

interface BlogPost {
  node: {
    id: string;
    frontmatter: FrontMatter;
    wordCount: WordCount;
  };
}

interface BlogIndexProps {
  data: {
    allMdx?: {
      edges: BlogPost[];
      totalCount: number;
    };
  };
}

const BlogIndex = ({ data: { allMdx } = { allMdx: undefined } }: BlogIndexProps) => {
  const { edges, totalCount } = allMdx || { edges: [], totalCount: 0 };

  return (
    <PageLayout
      title="Akshay Nair's Blog"
      headerProps={{ title: 'My Blog Posts', subtitle: 'I post about javascript, linux, functional programming, etc' }}
    >
      <div className={styles.spread}>
        <div style={{ textAlign: 'left', width: '100%' }}>
          Posts <strong>{totalCount}</strong>
        </div>
        <div style={{ textAlign: 'right', width: '100%' }}>
          <a href="/blog-rss.xml" className={styles.lightbutton} target="_blank _parent" rel="noopener">
            <i className="fas fa-rss" /> RSS
          </a>
        </div>
      </div>
      <div>
        {edges.map(({ node: post }) => (
          <div key={post.id}>
            <BlogPostCard {...post} />
          </div>
        ))}
      </div>
    </PageLayout>
  );
};

export default BlogIndex;

export const pageQuery = graphql`
  query BlogPosts {
    allMdx(filter: { frontmatter: { published: { eq: true } } }, sort: { fields: [frontmatter___publishDate], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            slug
            description
            publishDate
          }
          wordCount {
            paragraphs
            sentences
            words
          }
          timeToRead
        }
      }
    }
  }
`;
