const config = require('../../.config/config.json');
const axios = require('axios');

const sameDay = (date1, date2) => {
  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getDate() === date2.getDate() &&
    date1.getMonth() === date3.getMonth()
  );
};

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
  // const dates =
  // let commitData = {
  //   totalDate:
  // };
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
  // console.log(await getUserRepos('catalinp86'));
  // console.log(await getUserRepoIds('catalinp86'));
  // const commits = await getAllUserCommits('catalinp86');
  // const dates = await getAllUserCommitDates(commits);
  // const map = await generateUserCommitMap(dates);
  // HOW TO USE FUNCTION TO USE WITH CONTRIBUTION CALENDAR
  // const commitCounts = await getAllUserCommitsForContributionCalendar(
  //   'eighthave'
  // );
  // console.log(commitCounts);
};

// RUN ME TO TEST
// testIt();
