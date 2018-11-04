const { fetchDevContributionsMap } = require('./devContributions');

Date.prototype.startOfWeek = function(pStartOfWeek) {
  var mDifference = this.getDay() - pStartOfWeek;

  if (mDifference < 0) {
    mDifference += 7;
  }

  return new Date(this.addDays(mDifference * -1));
};

Date.prototype.addDays = function(pDays) {
  var mDate = new Date(this.valueOf());
  mDate.setDate(mDate.getDate() + pDays);
  return mDate;
};

let date = new Date().startOfWeek(0);
date = new Date('2018/11/03').startOfWeek(0);
console.log(date);

const committedNConsecutiveDaysInWeek = (nDays, weekDate, commitMap) => {
  let filterDay = weekDate.startOfWeek(0);
  let filterDayKey = filterDay.toISOString().substring(0, 10);
  let committedNDays =
    commitMap.has(filterDayKey) && commitMap.get(filterDayKey) > 0 ? 1 : 0;
  const daysInWeek = 7;
  const consecutiveCounts = [];

  for (let i = 0; i < daysInWeek - 1; i++) {
    filterDay = filterDay.addDays(1);
    filterDayKey = filterDay.toISOString().substring(0, 10);

    if (commitMap.has(filterDayKey) && commitMap.get(filterDayKey) > 0)
      committedNDays += 1;
    else {
      consecutiveCounts.push(committedNDays);
      committedNDays = 0;
    }

    if (i === daysInWeek - 2) {
      consecutiveCounts.push(committedNDays);
    }
  }

  return Math.max(...consecutiveCounts) >= nDays;
};

const committedNCommitsInDay = (nCommits, dayDate, commitMap) => {
  const filterDayKey = dayDate.toISOString().substring(0, 10);
  let totalCommitsInDay = commitMap.get(filterDayKey);

  // commitMap.forEach((value, key) => {
  //   const keyDay = key.substring(0, 10);
  //   if (String(filterDay) === keyDay) {
  //     totalCommitsInDay += value;
  //   }
  // });

  return totalCommitsInDay >= nCommits;
};

const committedNCommitsInYear = (nCommits, yearDate, commitMap) => {
  const filterYear = yearDate.getFullYear();
  let totalCommitsInYear = 0;

  commitMap.forEach((value, key) => {
    const keyYear = key.substring(0, 4);
    if (String(filterYear) === keyYear) {
      totalCommitsInYear += value;
    }
  });

  return totalCommitsInYear >= nCommits;
};

const testIt = async () => {
  const commitMap = await fetchDevContributionsMap({
    githubUserName: 'tatumalenko',
    gitlabUserName: 'catalinp86',
  });

  const committed200CommitsIn2018 = committedNCommitsInYear(
    100,
    new Date('2017/01/01'),
    commitMap
  );

  console.log(committed200CommitsIn2018);

  const didCommitNInDay = committedNCommitsInDay(
    10,
    new Date('2018/11/03'),
    commitMap
  );

  console.log(didCommitNInDay);

  const didCommitsNConsecutiveDaysInWeek = committedNConsecutiveDaysInWeek(
    3,
    new Date('2018/09/10'),
    commitMap
  );

  console.log(didCommitsNConsecutiveDaysInWeek);
};

// testIt();

module.exports = {
  committedNConsecutiveDaysInWeek,
  committedNCommitsInDay,
  committedNCommitsInYear,
};
