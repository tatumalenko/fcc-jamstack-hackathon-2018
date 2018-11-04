module.exports = {
  github: {
    base: 'https://api.github.com',
    token: process.env.GITHUB_TOKEN,
  },
  gitlab: {
    base: 'https://gitlab.com/api/v4',
    token: process.env.GITLAB_TOKEN,
  },
};
