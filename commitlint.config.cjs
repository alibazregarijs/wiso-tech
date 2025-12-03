// commitlint.config.cjs
module.exports = {
  extends: ['@commitlint/config-conventional'],
  formatter: './commitlint-formatter.cjs',

  parserPreset: {
    parserOpts: {
      // Regex explanation:
      // ^                       -> Start of the line
      // (?:(SCRUM-\d+)\s+)?     -> Optional: Matches "SCRUM-" followed by numbers (e.g. SCRUM-123)
      // (\w+)                   -> Matches ANY type (fix, feat, chore, etc.)
      // (?:\(([\w\$\.\-\* ]+)\))? -> Optional: Matches ANY scope in parentheses
      // :                       -> Colon separator
      // (.*)                    -> Matches the rest of the message (Subject)
      headerPattern: /^(?:(SCRUM-\d+)\s+)?(\w+)(?:\(([\w\$\.\-\* ]+)\))?: (.*)$/,
      
      // Map the regex groups to commitlint's internal variables
      // Group 1 = references (SCRUM-8)
      // Group 2 = type       (fix)
      // Group 3 = scope      (front-end)
      // Group 4 = subject    (tailwind color)
      headerCorrespondence: ['references', 'type', 'scope', 'subject'],
    },
  },

  rules: {
    // Your existing rules...
    'type-enum': [
      2,
      'always',
      [
        'feat', 'fix', 'docs', 'style', 'refactor', 
        'perf', 'test', 'build', 'ci', 'chore', 'revert'
      ],
    ],
    'type-empty': [2, 'never'],
    'subject-empty': [2, 'never'],
    'subject-max-length': [2, 'always', 72],
    'subject-min-length': [2, 'always', 3],
    'subject-case': [2, 'never', ['sentence-case', 'start-case', 'pascal-case', 'upper-case']],
    'scope-empty': [1, 'never'],
    'scope-case': [2, 'always', 'lower-case'],
    'header-max-length': [2, 'always', 100],
    'body-leading-blank': [1, 'always'],
    'body-max-line-length': [2, 'always', 100],
    'footer-leading-blank': [1, 'always'],
  },
};