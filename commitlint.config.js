/**
 * @type {import('@commitlint/types').UserConfig}
 */
module.exports = {
    extends: ['@commitlint/config-conventional', '@commitlint/config-lerna-scopes'],
    parserPreset: {
        parserOpts: {
            headerPattern: /^(\w+)(?:\(([\w-]+)\))?: (REALW-\d+) (.+)$/,
            headerCorrespondence: ['type', 'scope', 'ticket', 'subject'],
        },
    },
    rules: {
        'type-enum': [2, 'always', ['feat', 'fix', 'chore', 'refactor', 'test', 'docs', 'ci']],
        'scope-empty': [0],
        'subject-empty': [0, 'never'],
        'ticket-required': [2, 'always'],
    },
    plugins: [
        {
            rules: {
                'ticket-required': ({ticket}) => {
                    return ticket ? [true] : [false, 'Commit message must include a ticket ID like REALW-17'];
                },
            },
        },
    ],
};
