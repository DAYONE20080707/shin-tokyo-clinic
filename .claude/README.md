# Claude Code チーム活用ガイド

## ファイル構成

```
.claude/
├── CLAUDE.md          # コーディングルール
├── README.md          # このガイド
└── agents/
    ├── animation.md   # アニメーション
    └── reviewer.md    # コードレビュー
```

---

## 基本の使い方

### Claude Code の起動

```bash
cd [プロジェクトディレクトリ]
claude
```

### エージェント一覧の確認

```
/agents
```

---

## Figma コーディングの指示テンプレート

### 単一ページの実装

```
以下の Figma Frame を実装して：
URL: https://www.figma.com/design/xxx?node-id=xxx
実装先: app/(main)/about/page.tsx
```

### 5ページ並列実装

```
サブエージェント5つで以下を並列実装：

Agent 1:
URL: https://www.figma.com/design/xxx?node-id=xxx
実装先: app/(main)/page.tsx

Agent 2:
URL: https://www.figma.com/design/xxx?node-id=xxx
実装先: app/(main)/about/page.tsx

Agent 3:
URL: https://www.figma.com/design/xxx?node-id=xxx
実装先: app/(main)/service/page.tsx

Agent 4:
URL: https://www.figma.com/design/xxx?node-id=xxx
実装先: app/(main)/works/page.tsx

Agent 5:
URL: https://www.figma.com/design/xxx?node-id=xxx
実装先: app/(main)/contact/page.tsx
```

---

## アニメーション実装

### 基本フォーマット

```
[要素名] に [効果] アニメーションを実装して：
- トリガー: [スクロール / クリック / ページロード]
- 持続時間: [秒数]
- イージング: ease-in-out
```

### よく使うアニメーション指示例

```
ヒーローセクションの画像にフェードインアニメーションを実装して：
- トリガー: ページロード
- 持続時間: 0.6秒
- イージング: ease-out
```

```
カードコンポーネントにホバーで浮き上がるアニメーションを追加して
```

---

## コードレビュー

```
以下をレビューして：
- 対象: app/(main)/about/
- 観点: パフォーマンス、アクセシビリティ、コード品質
```

---

## その他の便利なプロンプト

### 既存コードの調査

```
このプロジェクトのコンポーネント構成を調査して
```

### リファクタリング

```
app/(main)/about/page.tsx をリファクタリングして
```

### エラー修正

```
以下のエラーを修正して：
[エラーメッセージ]
```

---

## Tips

| ポイント | 説明 |
|---------|------|
| Figma URL | 必ず `?node-id=xxx` 付きで渡す |
| 並列実行 | 複数ページは最大5つまで |
| 途中停止 | セクションごとにレビューなので途中で止めてもOK |
| セルフチェック | 自動で行われるので品質が安定 |

---

## コーディングルール早見表

| 項目 | ルール |
|------|--------|
| ブレイクポイント | `lg:` のみ（1024px） |
| コンテンツ幅 | `lg:max-w-[1200px]` |
| 画像 | Next.js `Image` コンポーネント |
| アニメーション | CSS のみ |
| 新規ファイル | 作成禁止（確認必須） |

詳細は [CLAUDE.md](./CLAUDE.md) を参照
