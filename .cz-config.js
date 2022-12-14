'use strict'
module.exports = {
  allowCustomScopes: true,
  types: [
    {
      value: 'ð feat',
      name: 'feat: æ©è½è¿½å ',
      title: 'Features',
    },
    {
      value: 'ð§ fix',
      name: 'fix: ãã°ã®ä¿®æ­£',
      title: 'Bug Fixes',
    },
    {
      value: 'ð ï¸ hotfix',
      name: 'hotfix: è´å½çã§ç·æ¥ãªãã°ä¿®æ­£',
      title: 'Critical hotfix',
    },
    {
      value: 'ð docs',
      name: 'docs: ãã­ã¥ã¡ã³ãã®ã¿ã®å¤æ´',
      title: 'Documentation',
    },
    {
      value: 'ð¨ style',
      name: 'style: ã³ã¼ãã®åä½ã«å½±é¿ããªããè¦ãç®ã ãã®å¤æ´ï¼ã¹ãã¼ã¹ããã©ã¼ããããæ¬ è½ã®ä¿®æ­£ãã»ãã³ã­ã³ãªã©)',
      title: 'Styles',
    },
    {
      value: 'â»ï¸ refactor',
      name: 'refactor: ãã°ã®ä¿®æ­£ãæ©è½ã®è¿½å ã§ã¯ãªãã³ã¼ãã®å¤æ´',
      title: 'Code Refactoring',
    },
    {
      value: 'â« perf',
      name: 'perf: ããã©ã¼ãã³ã¹ãåä¸ãããã³ã¼ãã®å¤æ´',
      title: 'Performance',
    },
    {
      value: 'ð§ª test',
      name: 'test: ä¸è¶³ãã¦ãããã¹ãã®è¿½å ãæ¢å­ã®ãã¹ãã®ä¿®æ­£',
      title: 'Tests',
    },
    {
      value: 'ð§ chore',
      name: 'chore: ãã«ããã­ã»ã¹ããã­ã¥ã¡ã³ãçæãªã©ã®è£å©ãã¼ã«ãã©ã¤ãã©ãªã®å¤æ´',
      title: 'Chores',
    },
    {
      value: 'ð¥ï¸ ui',
      name: 'ui: UIãã¹ã¿ã¤ã«ã®æ´æ°',
      title: 'UI',
    },
    {
      value: 'ð§ wip',
      name: 'wip: ä½æ¥­ä¸­',
      title: 'Work In Progress',
    },
  ],
  messages: {
    ticketNumber: 'ãã±ããçªå·ãå¥åãã¦ãã ãã (ãªãå ´åã¯Enter):\n',
    type: 'ã³ãããããå¤æ´ã¿ã¤ããé¸æ:\n',
    subject: 'å¤æ´åå®¹ãè¦ç´ããæ¬è³ªçèª¬æ:\n',
    body: "è©³ç´°ã®å¥åï¼'|'ã§æ¹è¡ããï¼",
    confirmCommit: 'ãã®ã³ãããåå®¹ã§ããããã§ãã?',
  },
  skipQuestions: ['scope', 'breaking', 'footer'],
}