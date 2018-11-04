const config = require('./config');
const axios = require('axios');
const { githubHeaders } = require('./headers');

const getUserRepos = async username => {
  const res = await axios.get(`${config.github.base}/users/${username}/repos`, {
    headers: githubHeaders,
  });
  const reposName = res.data.map(repo => repo.name);
  return reposName;
};

// get all commit data within a year
const getCommitsByDay = async (userName, repoName) => {
  // TODO: filter by startDate and endDate
  // Time stored in UNIX => startDate & endDate should be converted to Unix
  const commitsByDay = await axios.get(
    `${config.github.base}/repos/${userName}/${repoName}/stats/commit_activity`,
    { headers: githubHeaders }
  );
  // .then(res => {
  //   const allCommits = res.data;
  //   return Promise.resolve(allCommits);
  // })
  // .catch(err => console.log(err));
  return commitsByDay.data;
};

const getAllCommitsByDay = async userName => {
  const userRepos = await getUserRepos(userName);

  const commitsByDayPerRepo = await Promise.all(
    userRepos.map(async repoName => {
      return await getCommitsByDay(userName, repoName);
    })
  );

  return commitsByDayPerRepo;
};

// get total number of commits of a repo in the last 52 weeks, organized by week
const getCommitsPerRepo = async (userName, repoName) => {
  const a = await axios.get(
    `${config.github.base}/repos/${userName}/${repoName}/stats/participation`,
    { headers: githubHeaders }
  );
  return a.data.owner;
};

const getTotalCommits = async userName => {
  const reposName = await getUserRepos(userName);

  const totalCommits = await Promise.all(
    reposName.map(async repoName => {
      const commitsPerRepo = await getCommitsPerRepo(userName, repoName);
      return commitsPerRepo;
    })
  );

  const totalCommitsFlat = new Array(52).fill(0);
  for (let repo of totalCommits) {
    for (let i = 0; i < repo.length; i++) {
      totalCommitsFlat[i] += repo[i];
    }
  }
  return totalCommitsFlat;
};

const testIt = async () => {
  // return await getTotalCommits('anhtm');
  const allCommitsByDay = await getAllCommitsByDay('tatumalenko');
  console.log(allCommitsByDay);
};

testIt();

module.exports = {
  getUserRepos,
  getCommitsByDay,
  getCommitsPerRepo,
  getTotalCommits,
};
