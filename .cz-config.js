module.exports = {
  types: [
    { name: "feat \t\t✨ 新機能追加", value: "✨ feat" },
    { name: "fix \t\t🐛 バグ修正", value: "🐛 fix" },
    {
      name: "test \t\t✅ テストの追加や既存テストの修正",
      value: "✅ test",
    },
    {
      name: "refactor \t🔨 バグ修正や新機能追加以外のコード修正",
      value: "🔨 refactor",
    },
    {
      name: "style \t💄 プログラムの動きに影響を与えない変更",
      value: "💄 style",
    },
    { name: "docs \t\t📝 ドキュメントのみの変更", value: "📝 docs" },
    {
      name: "perf \t\t⚡ パフォーマンス改善のためのコード修正",
      value: "⚡ perf",
    },
    {
      name: "chore \t🔧 ビルドプロセスやドキュメント生成のような補助ツールやライブラリの変更",
      value: "🔧 chore",
    },
  ],
  skipQuestions: ["body", "footer"],
  scopes: ["api", "ui"],
  allowCustomScopes: true,
  subjectLimit: 100,
};