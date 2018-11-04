const config = require('../../.config/config');

const githubHeaders = {
  Authorization: `token ${config.github.token}`,
};

module.exports = {
  githubHeaders,
};
