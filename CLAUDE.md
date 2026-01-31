# CLAUDE.md - プロジェクトルール

## プロジェクト概要

HP制作システム - お客様とのミーティング時に使用するデザイン選択システム。
管理画面（/admin）でデザインを選択し、選択結果をエクスポート可能。

## コマンド

```bash
npm run dev          # 開発サーバー起動
npm run build        # 本番ビルド
npm run build:export # 静的エクスポート
npm run start        # 本番サーバー起動
npm run lint         # ESLint 実行
```

## 技術スタック

- **フレームワーク**: Next.js 16 (App Router)
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS
- **状態管理**: Zustand
- **アイコン**: lucide-react（他のライブラリは使用禁止）
- **スライダー**: Swiper
- **CMS**: microCMS（blogsFetch, newsFetch, casesFetch 経由）
- **フォーム通知**: react-hot-toast
- **メール**: nodemailer

## ディレクトリ構造

```
app/
├── (admin)/admin/   # 管理画面
├── (main)/          # 公開ページ
└── api/             # API Routes

components/
├── top/             # トップページセクション（kv, about, service 等）
├── header/          # ヘッダーバリエーション
├── footer/          # フッターバリエーション
├── lowerkv/         # 下層ページキービジュアル
├── ui/              # 共通UIコンポーネント
│   ├── button/      # ボタン類
│   ├── frame/       # レイアウトフレーム
│   ├── module/      # 汎用モジュール
│   └── navigation/  # ナビゲーション関連
└── {ページ名}/      # ページ固有コンポーネント

lib/
├── api/             # データ取得関数（blogsFetch, newsFetch, casesFetch）
└── componentsConfig.tsx  # コンポーネントマッピング設定

public/
├── admin/           # 管理画面プレビュー用
├── common/          # サイト全体共通画像
├── top/             # トップページ用画像
├── {ページ名}/      # 下層ページ用画像
├── sns/             # SNSアイコン
├── cta/             # CTA用素材
└── flow/            # フロー用素材
```

## コンポーネント命名規則

### ファイル名
- **PascalCase + アンダースコア + 連番**: `Header_01.tsx`, `KeyVisual_02.tsx`
- **バリエーションは連番で管理**: `Blog_01.tsx`, `Blog_02.tsx`, `Blog_03.tsx`

### コンポーネント名
- ファイル名と一致させる: `const Header_01 = () => { ... }`

### 新規コンポーネント追加時
1. `components/{カテゴリ}/` に配置
2. `lib/componentsConfig.tsx` にマッピング追加
3. 管理画面プレビュー用サムネイルを `public/admin/` に追加

## 画像命名規則

### 基本ルール
- **ケバブケース**: `logo-header.png`（スネークケース禁止）
- **連番はゼロ埋め2桁**: `kv-01.jpg`, `step-02.png`
- **バリエーション**: 接尾辞で表現 `-white`, `-primary`

### トップページ画像
```
top/{セクション名}-{連番}.{拡張子}

例:
top/kv-01.jpg
top/message.png
top/strength-01.png
```

### 下層ページ画像
```
{ページ名}/{ページ名}-{セクション名}-{連番}.{拡張子}

例:
about/about-kv-01.jpg
about/about-purpose.jpg
price/price-option-01.png
service/service-01.jpg
```

### ロゴ
```
logo-{形状}-{色}.png

例:
common/logo-primary.png        # 基本カラー
common/logo-white.png          # 白色
common/logo-square-primary.png # 正方形・基本カラー
```

### SNSアイコン
```
sns/{サービス名}.svg
sns/{サービス名}-white.svg

例:
sns/instagram.svg
sns/instagram-white.svg
```

## アイコン使用ルール

**必ず lucide-react を使用する**

```tsx
// OK
import { Mail, Phone, ChevronRight, Menu, X } from "lucide-react"

// NG - 使用禁止
import { EnvelopeIcon } from "@heroicons/react/24/outline"
import { ChevronRight } from "react-feather"
```

### よく使うアイコン
| 用途 | アイコン |
|------|---------|
| メール | `Mail` |
| 電話 | `Phone` |
| 矢印（右） | `ChevronRight`, `ArrowRight` |
| メニュー | `Menu` |
| 閉じる | `X` |
| 検索 | `Search` |
| 再生/一時停止 | `CirclePlay`, `PauseCircle` |
| FAQ | `CircleHelp`, `MessageCircle` |
| プラス/マイナス | `Plus`, `Minus` |
| ローディング | `Loader2` |

## Tailwind CSS カスタムカラー

```tsx
// tailwind.config.ts で定義済み
accentColor: "#4270ED"  // メインカラー（青）
baseColor: "#393939"    // ベーステキスト
borderGray: "#393939"   // ボーダー
bgBlack: "#333333"      // 背景（黒）
bgLight: "#f7fcff"      // 背景（薄い青）
```

使用例:
```tsx
<div className="text-accentColor bg-bgLight border-borderGray">
```

## データ取得パターン

microCMS からのデータ取得は専用関数を使用:

```tsx
// OK - 専用関数を使用
import { blogsFetch } from "@/lib/api/blogsFetch"
import { newsFetch } from "@/lib/api/newsFetch"
import { casesFetch } from "@/lib/api/casesFetch"

const data = await blogsFetch.list(limit)
const item = await blogsFetch.get(id)

// NG - 直接 microcms を呼ばない
import { microcms } from "@/lib/microcms"
```

## コーディングスタイル

### インポート順序
1. React/Next.js
2. 外部ライブラリ
3. 内部コンポーネント（@/components）
4. 内部ユーティリティ（@/lib, @/types）
5. スタイル

### コンポーネント構造
```tsx
"use client"  // 必要な場合のみ

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import SomeComponent from "@/components/ui/SomeComponent"
import { someUtil } from "@/lib/utils"

interface Props {
  // props定義
}

const ComponentName = ({ prop1, prop2 }: Props) => {
  // ロジック

  return (
    // JSX
  )
}

export default ComponentName
```

### クラス名の書き方
- Tailwind CSS クラスを使用
- 長い場合は改行して整理
- 動的クラスは `clsx` または `classnames` を使用

```tsx
<div className={clsx(
  "px-4 py-2 rounded-lg",
  "bg-accentColor text-white",
  isActive && "opacity-100",
  !isActive && "opacity-50"
)}>
```

## Git ワークフロー

### ブランチ
- `main`: 本番
- `dev`: 開発
- `feature/{機能名}`: 機能開発

### コミットメッセージ
- 日本語で記述
- 動詞で始める: 「追加」「修正」「削除」「更新」

```
例:
- Header_05 を追加
- Blog_03 のアイコンを lucide-react に変更
- 未使用画像を削除
- README に画像命名規則を追記
```

## 注意事項

### 使用禁止
- `@heroicons/react` - lucide-react を使用
- `react-feather` - lucide-react を使用
- 画像のスネークケース命名 - ケバブケースを使用
- microCMS 直接呼び出し - xxxFetch 関数を使用

### レスポンシブ対応
- モバイルファースト
- ブレークポイント: `lg:` (1024px以上)
- 例: `className="px-4 lg:px-10"`

### Image コンポーネント
- 必ず `next/image` を使用
- `width`, `height` を指定
- 適切な `alt` を設定

```tsx
<Image
  src="/top/kv-01.jpg"
  alt="キービジュアル"
  width={1200}
  height={600}
  className="w-full h-auto object-cover"
/>
```
