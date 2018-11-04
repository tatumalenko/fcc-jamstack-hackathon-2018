import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';

class Badges extends React.Component {
  render() {
    return (
      <div className="row">
        <h3>Badges</h3>
        <div class="row center">
          <div class="col s3">
            <i class="fas fa-trophy fa-7x" style={{ color: '#ffd600' }} />
            <h5>Connect your Git accounts</h5>
            <p>
              Simply connect your accounts where you commit your code, for
              example GitHub, GitLab and BitBucket
            </p>
          </div>
          <div class="col s3">
            <i class="fas fa-medal fa-7x" />
            <h5>Keep coding everyday</h5>
            <p>Code everyday, commit often</p>
          </div>
          <div class="col s3">
            <i class="fas fa-gift fa-7x" />
            <h5>Earn rewards</h5>
            <p>
              Unlock achievement, collect coins, spend them on well-earned
              rewards
            </p>
          </div>
          <div class="col s3">
            <i class="fas fa-fire fa-7x " style={{ color: '#ff3d00' }} />
            <h5>Keep coding everyday</h5>
            <p>Code everyday, commit often</p>
          </div>
        </div>
        <div className="row center">
          <div class="col s3">
            <i class="fas fa-rocket fa-7x fa-spin" />
            <h5>Keep coding everyday</h5>
            <p>Code everyday, commit often</p>
          </div>
          <div class="col s3">
            <i class="fas fa-crown fa-7x" style={{ color: '#ffd600' }} />
            <h5>Keep coding everyday</h5>
            <p>Code everyday, commit often</p>
          </div>
          <div class="col s3">
            <i class="fas fa-rocket fa-7x fa-spin" />
            <h5>Keep coding everyday</h5>
            <p>Code everyday, commit often</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Badges;
