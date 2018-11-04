import config from './config';
import axios from 'axios';

const getUserRepos = username => {
  axios.get(`${config.github.base}/users/${username}/repos`).then(repos => {
    return repos.map(repo => repo.name);
  });
};

const getCommitsActivity = (userName, repoName, startDate, endDate) => {
  // TODO: filter by startDate and endDate
  axios
    .get(
      `${
        config.github.base
      }/repos/${userName}/${repoName}/stats/commit_activity`
    )
    .then(result => result);
};

export default {
  getUserRepos,
  getCommitsActivity,
};
