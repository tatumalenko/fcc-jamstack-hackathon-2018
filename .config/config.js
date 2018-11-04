require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  github: {
    base: 'https://api.github.com',
    token: process.env.GATSBY_GITHUB_TOKEN,
  },
  gitlab: {
    base: 'https://gitlab.com/api/v4',
    token: process.env.GATSBY_GITLAB_TOKEN,
  },
};
