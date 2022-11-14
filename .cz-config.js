'use strict'
module.exports = {
  allowCustomScopes: true,
  types: [
    {
      value: '🌟 feat',
      name: 'feat: 機能追加',
      title: 'Features',
    },
    {
      value: '🔧 fix',
      name: 'fix: バグの修正',
      title: 'Bug Fixes',
    },
    {
      value: '🛠️ hotfix',
      name: 'hotfix: 致命的で緊急なバグ修正',
      title: 'Critical hotfix',
    },
    {
      value: '🗒 docs',
      name: 'docs: ドキュメントのみの変更',
      title: 'Documentation',
    },
    {
      value: '🎨 style',
      name: 'style: コードの動作に影響しない、見た目だけの変更（スペース、フォーマット、欠落の修正、セミコロンなど)',
      title: 'Styles',
    },
    {
      value: '♻️ refactor',
      name: 'refactor: バグの修正や機能の追加ではないコードの変更',
      title: 'Code Refactoring',
    },
    {
      value: '⏫ perf',
      name: 'perf: パフォーマンスを向上させるコードの変更',
      title: 'Performance',
    },
    {
      value: '🧪 test',
      name: 'test: 不足しているテストの追加や既存のテストの修正',
      title: 'Tests',
    },
    {
      value: '🐧 chore',
      name: 'chore: ビルドプロセスやドキュメント生成などの補助ツールやライブラリの変更',
      title: 'Chores',
    },
    {
      value: '🖥️ ui',
      name: 'ui: UIやスタイルの更新',
      title: 'UI',
    },
    {
      value: '🚧 wip',
      name: 'wip: 作業中',
      title: 'Work In Progress',
    },
  ],
  messages: {
    ticketNumber: 'チケット番号を入力してください (ない場合はEnter):\n',
    type: 'コミットする変更タイプを選択:\n',
    subject: '変更内容を要約した本質的説明:\n',
    body: "詳細の入力（'|'で改行する）",
    confirmCommit: 'このコミット内容でよろしいですか?',
  },
  skipQuestions: ['scope', 'breaking', 'footer'],
}