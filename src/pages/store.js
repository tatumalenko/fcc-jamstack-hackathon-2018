import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';

const SecondPage = () => (
  <Layout>
    <h1>Rewards</h1>
    <p>Welcome to Rewards</p>

    <div class="card small">
      <div class="card-image waves-effect waves-block waves-light">
        <img
          class="activator cover"
          src="https://dynaimage.cdn.cnn.com/cnn/q_auto,w_1337,c_fill,g_auto,h_752,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F170606121226-japan---travel-destination---shutterstock-230107657.jpg"
          alt="japan"
        />
      </div>
      <div class="card-content">
        <span class="card-title activator grey-text text-darken-4">
          Card Title
          <i class="material-icons right">more_vert</i>
        </span>
        <p>
          {/* eslint-disable-next-line */}
          <a href="#">This is a link</a>
        </p>
      </div>
      <div class="card-reveal">
        <span class="card-title grey-text text-darken-4">
          Card Title
          <i class="material-icons right">close</i>
        </span>
        <p>
          Here is some more information about this product that is only revealed
          once clicked on.
        </p>
      </div>
    </div>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default SecondPage;
