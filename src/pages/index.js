import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
// import CommitHistory from '../components/CommitHistory';
import Achievements from '../components/Achievements';
import Badges from '../components/Badges';
//import Image from '../components/image'

class IndexPage extends React.Component {
  handleChange = event => {
    console.log(event.currentTarget.value);
    if (event.currentTarget.value === '') {
      console.log('cleared!!');
      var name = document.getElementById('github-username').value;
      console.log(name);
      document.getElementById('github-username').value = '';
      document.getElementById('gitlab-username').value = '';
    }
  };

  render() {
    return (
      <Layout>
        <div class="container">
          <div class="section">
            <h3 class="red-text">Enter your Git Accounts</h3>
            <form>
              Username:
              <input type="text" name="username" onChange={this.handleChange} />
              <br />
              Github Username:
              <input id="github-username" type="text" name="github-username" />
              <br />
              Gitlab Username:
              <input id="gitlab-username" type="text" name="gitlab-username" />
              <br />
              <button class="btn waves-effect waves-light" type="submit">
                Submit
              </button>
              {/* <button class="btn waves-effect waves-light" type="forgot password" onsubmit={}> */}
              {/* Forgot Password? */}
              {/* </button> */}
            </form>
          </div>

          <Badges />
          <Achievements />
        </div>

        <Link to="/store/">Go to page 2</Link>
      </Layout>
    );
  }
}

export default IndexPage;
