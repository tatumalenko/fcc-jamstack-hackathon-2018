import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';

const SecondPage = () => (
  <Layout>
    <h1>Rewards</h1>
    <p>Welcome to Rewards</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default SecondPage;
