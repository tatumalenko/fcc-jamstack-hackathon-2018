import React from 'react';
import { Link } from 'gatsby';
import { navigate } from 'gatsby';
import Layout from '../components/layout';
import InputField from '../components/InputField';
import Calendar from '../components/Calendar';

class IndexPage extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      githubUsername: '',
      gitlabUsername: '',
      submitted: false,
    };
  }

  componentDidMount() {
    console.log('localstorage', window.localStorage);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.githubUsername && this.state.gitlabUsername) {
      this.setState({ submitted: true });
      window.localStorage.setItem('github', this.state.githubUsername);
      window.localStorage.setItem('gitlab', this.state.gitlabUsername);
    }
  }

  render() {
    console.log(this.state);
    return (
      <Layout>
        <div class="container">
          <div>
            {!this.state.submitted ? (
              <div>
                <h3 class="red-text">Enter your Git Accounts</h3>

                <form onSubmit={e => this.handleSubmit(e)}>
                  <InputField
                    name="username"
                    value={this.state.username}
                    label="Username"
                    handleChange={e => this.handleChange(e)}
                  />
                  <InputField
                    name="githubUsername"
                    value={this.state.githubUsername}
                    label="Github Username"
                    handleChange={e => this.handleChange(e)}
                  />
                  <InputField
                    name="gitlabUsername"
                    value={this.state.gitlabUsername}
                    label="Gitlab Username"
                    handleChange={e => this.handleChange(e)}
                  />
                  <button class="btn waves-effect waves-light" type="submit">
                    Submit
                  </button>
                </form>
              </div>
            ) : (
              <Calendar
                githubUsername={this.state.githubUsername}
                gitlabUsername={this.state.gitlabUsername}
              />
            )}
          </div>
        </div>
      </Layout>
    );
  }
}

export default IndexPage;
