import React from 'react';
import Layout from '../components/layout';
import Achievements from '../components/Achievements';
import Badges from '../components/Badges';
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

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.githubUsername && this.state.gitlabUsername) {
      this.setState({ submitted: true });
    }
  }

  render() {
    return (
      <Layout>
        <div className="container">
          <div>
            {!this.state.submitted ? (
              <div className="center account">
                <h3 className="col s12 grey-text">Enter your Git Accounts</h3>
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
                  <button
                    className="btn waves-effect waves-light"
                    type="submit"
                  >
                    Submit
                  </button>
                </form>
              </div>
            ) : (
              <div>
                <Calendar
                  githubUsername={this.state.githubUsername}
                  gitlabUsername={this.state.gitlabUsername}
                />
                <Badges />
                <Achievements />
              </div>
            )}
          </div>
        </div>
      </Layout>
    );
  }
}

export default IndexPage;
