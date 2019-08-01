const MONGODB_USER_PASS = process.env.MONGODB_USER_PASS || 'userTodo:changeMe';
const MONGODB_HOST_PORT = process.env.MONGODB_HOST_PORT || 'localhost:27017';

module.exports = {
  MONGODB_URI: `mongodb://${MONGODB_USER_PASS}@${MONGODB_HOST_PORT}/todo`,
  TOKEN_SECRET: process.env.TOKEN_SECRET || 'notAGeneratedSecretsButThisShouldSuffice',
  PORT: process.env.PORT || 8081,
};