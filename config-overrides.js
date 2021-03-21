const {alias, aliasJest} = require('react-app-rewire-alias')

const aliasMap = {
  '@icons': 'src/icons',
  '@hooks': 'src/hooks',
  '@api': 'src/api',
  '@utils': 'src/utils',
  '@components': 'src/components',
  '@atoms': 'src/components/atoms',
  '@molecules': 'src/components/molecules',
  '@organisms': 'src/components/organisms',
}

module.exports = alias(aliasMap)
module.exports.jest = aliasJest(aliasMap)