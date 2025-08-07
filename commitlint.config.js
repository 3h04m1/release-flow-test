/**
 * @type {import('@commitlint/types').UserConfig}
 */
module.exports = {
  extends: ['@commitlint/config-conventional', '@commitlint/config-lerna-scopes'],
  rules: {
    // ensure that the header starts with a team identifier (e.g., TEAM-123: Description)
    'header-pattern': [2, 'always', /^([A-Z]{2,5}-\d+): .+/],
    'header-match-team-pattern': [2, 'always', true],
  }
};
