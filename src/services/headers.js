const config = require('./config')

const githubHeaders = {
  'Authorization': `token ${config.github.token}`
}

module.exports = {
  githubHeaders
}