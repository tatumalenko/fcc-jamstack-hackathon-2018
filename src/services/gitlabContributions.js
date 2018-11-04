const axios = require('axios');
const config = require('../../.config/config');

const getUser = async userName => {
  const response = await axios.get(
    `${config.gitlab.base}/users?username=${userName}`
  );
  return response.data[0];
};

const getUserRepos = async userName => {
  const user = await getUser(userName);
  const repos = await axios.get(
    `${config.gitlab.base}/users/${user.id}/projects`
  );
  return repos.data;
};

const getUserRepoIds = async userName => {
  const repos = await getUserRepos(userName);
  return repos.map(repo => repo.id);
};

const getAllUserCommits = async (
  userName,
  { startDate = 0, endDate = 0 } = {}
) => {
  const repoIds = await getUserRepoIds(userName);

  const commits = await Promise.all(
    repoIds.map(async repoId => {
      const repoCommits = await axios.get(
        `${config.gitlab.base}/projects/${repoId}/repository/commits/`
      );
      return repoCommits.data;
    })
  );

  const flatCommits = commits.reduce((acc, val) => acc.concat(val), []);

  return flatCommits;
};

const getAllUserCommitDates = async commits => {
  const dates = await Promise.all(
    commits.map(async commit => {
      return commit.committed_date.substring(0, 10);
    })
  );

  return dates;
};

const generateUserCommitMap = async dates => {
  const map = new Map();

  dates.forEach(date => {
    map.set(date, map.has(date) ? map.get(date) + 1 : 1);
  });

  return map;
};

const generateUserCommitMapFromUserName = async userName => {
  const commits = await getAllUserCommits(userName);
  const dates = await getAllUserCommitDates(commits);
  const map = await generateUserCommitMap(dates);

  return map;
};

const getAllUserCommitsForContributionCalendar = async userName => {
  const commits = await getAllUserCommits(userName);
  const dates = await getAllUserCommitDates(commits);
  const map = await generateUserCommitMap(dates);
  const commitDateCounts = [];

  map.forEach((value, key, map) => {
    commitDateCounts.push({
      date: key,
      count: value,
    });
  });

  commitDateCounts.sort((a, b) => new Date(a.date) - new Date(b.date));

  return commitDateCounts;
};

const testIt = async () => {
  const commitCounts = await getAllUserCommitsForContributionCalendar(
    'eighthave'
  );
  console.log(commitCounts);
};

// RUN ME TO TEST
// testIt();

module.exports = {
  generateUserCommitMapFromUserName,
  getAllUserCommitsForContributionCalendar,
};
