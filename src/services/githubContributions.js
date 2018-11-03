const config = require('./config');
const axios = require('axios');

const getUserRepos = (username) => {
  return axios.get(`${config.github.base}/users/${username}/repos`)
  .then((res) => {
    const reposName = res.data.map(repo => repo.name);
    return Promise.resolve(reposName)
  })
  .catch((err) => console.log(err));
}

const getCommitsActivity = (userName, repoName, startDate, endDate) => {
  // TODO: filter by startDate and endDate
  // Time stored in UNIX => startDate & endDate should be converted to Unix
  return axios.get(`${config.github.base}/repos/${userName}/${repoName}/stats/commit_activity`)
  .then((res) => {
    const allCommits = res.data;
    return Promise.resolve(allCommits);
  })
  .catch((err) => console.log(err));
}


// Example: getUserRepos('anhtm').then((repos) => console.log(repos))

module.exports = {
  getUserRepos,
  getCommitsActivity
}