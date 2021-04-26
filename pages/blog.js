import React from 'react';
import Layout from '../components/layout';
import { BlogMain } from '../components/blogmain';

export default function Blog() {
  return (
    <Layout page="blog">
      <BlogMain />
    </Layout>
  );
}
