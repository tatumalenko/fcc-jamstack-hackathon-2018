const axios = require('axios');
const config = require('../../.config/config');
const { githubHeaders } = require('./headers');

function addDays(date, days) {
  const result = new Date(date);
  result.setDate(result.getDate() + days);

  return result;
}

const getUserRepos = async username => {
  const res = await axios.get(
    `${config.github.base}/users/${username}/repos?page=1&per_page=100`,
    {
      headers: githubHeaders,
    }
  );
  const reposName = res.data.map(repo => repo.name);

  return reposName;
};

// Get all commit data within a year
const getCommitsByDay = async (userName, repoName) => {
  // TODO: filter by startDate and endDate
  const commitsByDay = await axios.get(
    `${config.github.base}/repos/${userName}/${repoName}/stats/commit_activity`,
    { headers: githubHeaders }
  );
  return commitsByDay.data;
};

const getAllCommitsPerDayPerRepo = async userName => {
  const userRepos = await getUserRepos(userName);

  const commitsPerDayPerRepo = await Promise.all(
    userRepos.map(async repoName => {
      return await getCommitsByDay(userName, repoName);
    })
  );

  return commitsPerDayPerRepo;
};

const convertCommitsPerWeekPerRepoToMap = async commitPerWeekPerRepo => {
  const commitMap = new Map();

  commitPerWeekPerRepo.forEach(repo => {
    if (!Array.isArray(repo)) return;

    repo.forEach(commitWeek => {
      let date = new Date(0);
      date.setUTCSeconds(commitWeek.week);
      commitWeek.days.forEach((day, index) => {
        date = addDays(date, index > 0 ? 1 : 0);
        const key = date.toISOString().substring(0, 10);
        commitMap.set(key, commitMap.has(key) ? commitMap.get(key) + day : day);
      });
    });
  });

  return commitMap;
};

const generateUserCommitMapFromUserName = async userName => {
  const commitsPerWeekPerRepo = await getAllCommitsPerDayPerRepo(userName);
  const commitMap = await convertCommitsPerWeekPerRepoToMap(
    commitsPerWeekPerRepo
  );

  return commitMap;
};

const convertCommitMapToCounts = async commitMap => {
  const commitDateCounts = [];

  commitMap.forEach((value, key, map) => {
    commitDateCounts.push({
      date: key,
      count: value,
    });
  });

  return commitDateCounts.sort((a, b) => new Date(a.date) - new Date(b.date));
};

const getAllUserCommitsForContributionCalendar = async userName => {
  const commitsPerWeekPerRepo = await getAllCommitsPerDayPerRepo(userName);
  const commitMap = await convertCommitsPerWeekPerRepoToMap(
    commitsPerWeekPerRepo
  );
  const commitCounts = await convertCommitMapToCounts(commitMap);

  return commitCounts;
};

const testIt = async () => {
  const commitCounts = await getAllUserCommitsForContributionCalendar(
    'tatumalenko'
  );
  console.log(commitCounts);
};

// testIt();

module.exports = {
  generateUserCommitMapFromUserName,
  getAllUserCommitsForContributionCalendar,
};
