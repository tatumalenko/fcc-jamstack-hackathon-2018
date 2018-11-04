import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

class Milestone extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <div className="row">
        <ul class="collection with-header">
          <li class="collection-header">
            <h4>{this.props.milestoneName}</h4>
          </li>
          {this.props.milestoneItems.map(milestone => {
            return (
              <li class="collection-item">
                <div>
                  {milestone}
                  <i class="material-icons secondary-content">star</i>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Milestone;
