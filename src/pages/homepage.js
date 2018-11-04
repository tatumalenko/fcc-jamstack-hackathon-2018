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
          CommitRPG is a game that encourages new developers to create a habit
          of coding regularly and helping them become better developpers
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
    <footer class="page-footer black">
      <div class="container">
        <div class="row">
          <div class="col l6 s12">
            <h5 class="white-text">CommitRPG</h5>
            <p class="grey-text text-lighten-4">
              A 2018 Montreal freeCodeCamp Hackathon project
            </p>
          </div>
          <div class="col l4 offset-l2 s12">
            <h5 class="white-text">Team Members</h5>
            <ul>
              <li>
                <a
                  class="grey-text text-lighten-3"
                  href="https://github.com/gvdavidtran"
                >
                  David Tran
                </a>
              </li>
              <li>
                <a
                  class="grey-text text-lighten-3"
                  href="https://github.com/anhtm"
                >
                  Minh Anh Trinh
                </a>
              </li>
              <li>
                <a
                  class="grey-text text-lighten-3"
                  href="https://github.com/tatumalenko"
                >
                  Tatum Alenko
                </a>
              </li>
              <li>
                <a
                  class="grey-text text-lighten-3"
                  href="https://github.com/catalinp86"
                >
                  Catalin Popescu
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer-copyright">
        <div class="container">© 2018 Copyright - CommitRPG</div>
      </div>
    </footer>
  </Layout>
);

export default Home;
