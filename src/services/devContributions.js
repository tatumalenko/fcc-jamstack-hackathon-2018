const github = require('./githubContributions');
const gitlab = require('./gitlabContributions');

const fetchDevContributionsMap = async ({ githubUserName, gitlabUserName }) => {
  const combinedCommitMap = new Map();

  ghCommitMap = await github.generateUserCommitMapFromUserName(githubUserName);

  glCommitMap = await gitlab.generateUserCommitMapFromUserName(gitlabUserName);

  ghCommitMap.forEach((value, key) => {
    const otherValue = glCommitMap.get(key) ? glCommitMap.get(key) : 0;
    combinedCommitMap.set(key, value + otherValue);
  });

  glCommitMap.forEach((value, key) => {
    const otherValue = ghCommitMap.get(key) ? ghCommitMap.get(key) : 0;
    combinedCommitMap.set(key, value + otherValue);
  });

  return combinedCommitMap;
};

const convertCommitMapToCountsArray = async commitMap => {
  const commitDateCounts = [];

  commitMap.forEach((value, key, map) => {
    commitDateCounts.push({
      date: key,
      count: value,
    });
  });

  return commitDateCounts.sort((a, b) => new Date(a.date) - new Date(b.date));
};

const testIt = async () => {
  const commitCounts = await fetchDevContributionsMap({
    githubUserName: 'tatumalenko',
    gitlabUserName: 'catalinp86',
  });
  console.log(commitCounts);
};

// testIt();

module.exports = {
  fetchDevContributionsMap,
  convertCommitMapToCountsArray,
};
