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
            <h5>First week</h5>
            <p>You've successfully commit for a whole week!</p>
          </div>
          <div class="col s3">
            <i class="fas fa-medal fa-7x" />
            <h5>Champion of quality</h5>
            <p>Write 5 quality commit messages to unlock this.</p>
          </div>
          <div class="col s3">
            <i class="fas fa-gift fa-7x" />
            <h5>Christmas Coder!</h5>
            <p>You committed on Christmas! What a beast!</p>
          </div>
          <div class="col s3">
            <i class="fas fa-fire fa-7x " style={{ color: '#ff3d00' }} />
            <h5>Hot Streak</h5>
            <p>You've maintained a 14 days streak!</p>
          </div>
        </div>
        <div className="row center">
          <div class="col s3">
            <i class="fas fa-moon fa-7x" />
            <h5>Code to the moon and back</h5>
            <p>Commit during nightime to unlock this.</p>
          </div>
          <div class="col s3">
            <i class="fas fa-crown fa-7x" style={{ color: '#ffd600' }} />
            <h5>Commit King</h5>
            <p>You committed more than your friends for a week!</p>
          </div>
          <div class="col s3">
            <i class="fas fa-rocket fa-7x fa-spin" />
            <h5>Ready, set, deploy!</h5>
            <p>You successfully deployed on Netlify!</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Badges;
