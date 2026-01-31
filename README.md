# HP 制作システム マニュアル

## 概要

HP 制作システムは、お客様とのミーティング時に使用するデザイン選択システムです。
システム上で選択したデザインは、保存、エクスポート、インポート、リセットが可能です。

## 起動方法

### 1. 必要な依存関係のインストール

```bash
npm install
```

### 2. システムの起動

- **お客様とのミーティング時**:

  ```bash
  npm run build
  npm start
  ```

- **開発時**:
  ```bash
  npm run dev
  ```

## 使い方

1. **デザインを選択する**

   ブラウザで `localhost:3000/admin` にアクセスし、各画面デザインを選択します。

2. **デザインを保存する**

   デザインを選択すると、ブラウザの `localStorage` に保存されます。

3. **デザインをエクスポートする**

   ナビゲーションの「エクスポート」ボタンをクリックすると、選択したデザインが JSON 形式でエクスポートされます。

4. **デザインをインポートする**

   ナビゲーションの「インポート」ボタンをクリックし、エクスポートした JSON ファイルを選択すると、デザインがインポートされます。

5. **デザインをリセットする**

   ナビゲーションの「リセット」ボタンをクリックすると、選択したデザインがリセットされます。

## お客様とミーティング時

1. **デザインを選択する**

   `localhost:3000/admin` にアクセスし、各画面デザインを選択します。

2. **デザインをエクスポートする**

   ナビゲーションの「エクスポート」ボタンをクリックし、選択したデザインを JSON 形式でエクスポートします。

3. **画面全体のスクリーンショットを撮る**

   ブラウザの拡張機能を使用して、画面全体のスクリーンショットを撮ります。

## デザインパーツを増やす場合

1. **ページの追加**

   `app/(admin)/admin/xxx` に `page.tsx` を追加し、Admin コンポーネントに `pageName` を渡します。

   ```tsx
   import Admin from "@/components/admin/Admin"

   const AdminAboutPage = () => {
     return <Admin pageName="About" />
   }

   export default AdminAboutPage
   ```

2. **コンポーネントの追加**

   各デザインパーツをコンポーネントに分け、`/components` フォルダに追加します。

3. **コンポーネントのマッピングの追加**

   `/lib/componentsConfig.tsx` にコンポーネントのマッピングを追加します。

   ```tsx
   export const componentsConfig: ComponentsConfig = {
     Home: {
       // 追加するコンポーネント情報
     },
     About: {
       sections: {
         header: {
           title: "ヘッダー",
           options: [
             { id: "Header1", src: "/admin/step-01.png", alt: "Header1" },
             { id: "Header2", src: "/admin/step-02.png", alt: "Header2" },
           ],
           components: {
             Header1: <Header1 />,
             Header2: <Header2 />,
           },
         },
       },
     },
     // 新しいページの追加
   }
   ```

## デザインが確定した場合

1. **このプロジェクトをそのままコピーする**

2. **お客様用の GitHub リポジトリを作成する**

3. **プロジェクトをコピーしてリポジトリにプッシュする**

4. **選択したデザインを準備する**

   エクスポートした JSON ファイルと画面全体のスクリーンショットを用意します。
   JSON ファイルの例：

   ```json
   {
     "header": "Header2",
     "kv": "KeyVisual_01",
     "message": "Message2",
     "solution": "Solution1",
     "footer": "Footer1",
     "about": "About2"
   }
   ```

5. **ページを作成する**

   `app/(main)/xxx` にページを作成し、JSON ファイルやスクリーンショットを見ながらデザインを構築します。

   ```tsx
   import About2 from "@/components/about/About2"

   const AboutPage = () => {
     return (
       <div>
         <About2 />
       </div>
     )
   }

   export default AboutPage
   ```

6. **ページを確認する**

   `localhost:3000` にアクセスし、デザインを確認します。
   スクリーンショットと見比べてデザインが一致していることを確認してください。

7. **ビルドする**

   ビルドし、エラーが発生しないことを確認します。

   ```bash
   npm run build
   ```

8. **Vercel にデプロイする**

9. **ドメインを割り当てて、お客様に共有する**

※ **静的サイトとしてエクスポートする（オプション）**

静的サイトとして配布する場合は、以下のコマンドで静的ファイルをエクスポートします。

```bash
npm run build:export
```

このコマンドを実行すると、`out` ディレクトリに静的ファイルが生成されます。
このディレクトリの内容を任意の静的ホスティングサービス（GitHub Pages、Netlify、S3 など）にアップロードできます。

**注意**: `build:export` では `basePath` が自動的に適用されます（デフォルト: `/test20251026`）。
`basePath` を変更する場合は、`next.config.mjs` の `basePath` を編集してください。

## 画像ファイル命名規則

### 基本ルール

| ルール | 説明 | 例 |
|--------|------|-----|
| ケバブケース | 単語はハイフンで区切る | `logo-header.png` |
| 連番はゼロ埋め2桁 | 01, 02, 03... | `kv-01.jpg`, `step-02.png` |
| バリエーション | 接尾辞で表現 | `instagram-white.svg` |

### ディレクトリ構造

```
public/
├── admin/          # 管理画面プレビュー用サムネイル
├── common/         # サイト全体で使用する共通画像（ロゴ、背景等）
├── cta/            # CTA（Call To Action）用素材
├── flow/           # フロー図用素材
├── sns/            # SNSアイコン
├── top/            # トップページ専用画像
├── {ページ名}/     # 各下層ページ専用画像（about/, price/, service/ など）
```

### 下層ページ画像の命名規則

下層ページの画像は、**ページ名のディレクトリ**に配置し、**ファイル名の頭にページ名**をつける。

```
{ページ名}/{ページ名}-{セクション名}-{連番}.{拡張子}
```

#### セクション名一覧

| セクション | 説明 | 例 |
|-----------|------|-----|
| `kv` | キービジュアル | `about-kv-01.jpg` |
| `purpose` | 目的・理念 | `about-purpose.jpg` |
| `history` | 沿革 | `about-history-01.png` |
| `option` | オプション・プラン | `price-option-01.png` |
| `feature` | 特徴 | `service-feature-01.png` |

#### 具体例

```
# aboutページ
about/
├── about-kv-01.jpg        # aboutページのキービジュアル
├── about-purpose.jpg      # aboutページの目的セクション
└── about-history-01.png   # aboutページの沿革セクション

# priceページ
price/
├── price-kv-01.jpg        # priceページのキービジュアル
└── price-option-01.png    # priceページのオプションセクション

# serviceページ
service/
├── service-kv-01.jpg      # serviceページのキービジュアル
├── service-01.jpg         # サービス一覧画像
├── service-02.jpg
├── service-03.jpg
├── top.png                # トップページのサービスセクション用
├── top-01.png
├── top-02.png
└── top-03.png
```

### トップページ画像の命名規則

トップページの画像は `top/` ディレクトリに配置。

```
top/{セクション名}-{連番}.{拡張子}
```

#### 具体例

```
top/
├── kv-01.jpg          # キービジュアル
├── kv-02.jpg
├── message.png        # メッセージセクション
├── strength-01.png    # 強みセクション
├── strength-02.png
└── strength-03.png
```

### 共通画像の命名規則

サイト全体で使用する画像は `common/` ディレクトリに配置。

```
common/
├── logo-primary.png         # 基本カラーロゴ
├── logo-white.png           # 白色ロゴ
├── logo-square-primary.png  # 正方形・基本カラー
├── lower-kv-01.jpg          # 下層ページ共通キービジュアル
├── lower-kv-02.jpg
└── aside.png                # サイドバー背景
```

### ロゴの命名規則

```
logo-{形状}-{色}.png
```

| 要素 | 値 | 説明 |
|------|-----|------|
| 形状 | (なし) | 標準形状 |
| | `square` | 正方形 |
| | `horizontal` | 横長 |
| 色 | `primary` | 基本カラー |
| | `white` | 白色 |
| | `black` | 黒色 |

例：
- `logo-primary.png` - 標準形状・基本カラー
- `logo-white.png` - 標準形状・白色
- `logo-square-primary.png` - 正方形・基本カラー
- `logo-square-white.png` - 正方形・白色

### SNSアイコンの命名規則

```
sns/
├── {サービス名}.svg           # 通常版
└── {サービス名}-white.svg     # 白色版
```

例: `instagram.svg`, `instagram-white.svg`
