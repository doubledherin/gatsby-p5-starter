import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Sketch from '../components/sketch';

import sketch from '../scripts/sketch';

const IndexPage = () => {
  return (
    <Layout>
      <SEO />
      <Sketch sketch={sketch} />
    </Layout>
  );
};

export default IndexPage;
