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
             { id: "Header1", src: "/admin/1.png", alt: "Header1" },
             { id: "Header2", src: "/admin/2.png", alt: "Header2" },
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
