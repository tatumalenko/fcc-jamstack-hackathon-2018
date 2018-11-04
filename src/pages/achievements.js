import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import CommitHistory from '../components/CommitHistory';
import Calendar from '../components/Calendar';

class Achievements extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   githubUsername: '',
    //   gitlabUsername: '',
    // };
  }

  componentDidMount() {
    // this.setState({
    //   githubUsername: localStorage.getItem('github'),
    //   gitlabUsername: localStorage.getItem('gitlab'),
    // });
  }

  render() {
    console.log('props,', this.props);
    console.log(this.state);
    return (
      <Layout>
        <div class="container">
          <Calendar
            githubUsername={this.state.githubUsername}
            gitlabUsername={this.state.gitlabUsername}
          />
        </div>
      </Layout>
    );
  }
}

export default Achievements;
