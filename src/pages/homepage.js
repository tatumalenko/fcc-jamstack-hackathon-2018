import React from 'react';
import { Link } from 'gatsby';
import Image from '../components/image';
import Layout from '../components/layout';

const Home = () => (
  <Layout>
    <div className="hero">
      <div className="container">
        <h1>Earn rewards for coding often</h1>
        <h4>
          GitBit is a game that encourages new developers to create a habit of
          coding regularly and helping them become better developpers
        </h4>
        <Link to="/">
          <a class="waves-effect waves-light btn-large">
            <i class="material-icons left">laptop_mac</i>
            Start Now
          </a>
        </Link>
      </div>
    </div>
    <div className="section container">
      <div class="row center">
        <h3>How it works</h3>
      </div>
      <div class="row center">
        <div class="col s4">
          <i className="material-icons large">compare_arrows</i>
          <h5>Connect your Git accounts</h5>
          <p>
            Simply connect your accounts where you commit your code, for example
            GitHub, GitLab and BitBucket
          </p>
        </div>
        <div class="col s4">
          <i className="material-icons large">keyboard</i>
          <h5>Keep coding everyday</h5>
          <p>Code everyday, commit often</p>
        </div>
        <div class="col s4">
          <i className="material-icons large">local_play</i>
          <h5>Earn rewards</h5>
          <p>
            Unlock achievement, collect coins, spend them on well-earned rewards
          </p>
        </div>
      </div>
    </div>
  </Layout>
);

export default Home;
