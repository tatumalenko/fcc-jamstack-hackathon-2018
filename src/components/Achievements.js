import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';

class Achievements extends React.Component {
  render() {
    return (
      <div className="row">
        <h3>Achievements</h3>
        <ul class="collection with-header">
          <li class="collection-header">
            <h4>Daily Achievements</h4>
          </li>
          <li class="collection-item">
            <div>
              Commit twice
              <i class="material-icons secondary-content">star</i>
            </div>
          </li>
          <li class="collection-item">
            <div>
              Commit 5 times
              <i class="material-icons secondary-content">star</i>
            </div>
          </li>
          <li class="collection-item">
            <div>
              Commit 10 times
              <i class="material-icons secondary-content">star_border</i>
            </div>
          </li>
        </ul>
        <ul class="collection with-header">
          <li class="collection-header">
            <h4>Weekly Achievements</h4>
          </li>
          <li class="collection-item">
            <div>
              Commit for 1 day
              <i class="material-icons secondary-content">star</i>
            </div>
          </li>
          <li class="collection-item">
            <div>
              Commit for 3 days in a row
              <i class="material-icons secondary-content">star</i>
            </div>
          </li>
          <li class="collection-item">
            <div>
              Commit for 5 days in a row
              <i class="material-icons secondary-content">star_border</i>
            </div>
          </li>
          <li class="collection-item">
            <div>
              Commit for 7 days in a row
              <i class="material-icons secondary-content">star_border</i>
            </div>
          </li>
        </ul>
        <ul class="collection with-header">
          <li class="collection-header">
            <h4>Yearly Achievements</h4>
          </li>
          <li class="collection-item">
            <div>
              Commit 50 times
              <i class="material-icons secondary-content">star</i>
            </div>
          </li>
          <li class="collection-item">
            <div>
              Commit 100 times
              <i class="material-icons secondary-content">star</i>
            </div>
          </li>
          <li class="collection-item">
            <div>
              Commit 200 times
              <i class="material-icons secondary-content">star_border</i>
            </div>
          </li>
          <li class="collection-item">
            <div>
              Commit 500 times
              <i class="material-icons secondary-content">star_border</i>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default Achievements;
