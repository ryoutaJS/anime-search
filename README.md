# anime-search

## 概要

シーズンやタイトルでアニメを検索できる Web アプリを作成しました。
検索結果は`annict`というサイトの人気順で表示されます。

- [サイトの URL](https://anime-search-iota.vercel.app/)

## 作成した目的

- 次のシーズンでは、何のアニメを放送するか知りたかったから
- 特定のアニメが次いつ放送予定か知りたかったから
- GraphQL を使用したかったから

## 使用技術

#### フロントエンド

- Next.js `14.2.5`
- TypeScript
- ChakraUI
- apollo/client
- GraphQL

#### 外部 API

- Annict API
  - アニメ情報の取得で使用

#### 実行環境

- Vercel

## 画面イメージ

### トップページ

- 現在放送中のアニメの一覧を annict というサイトの人気順で表示

<img width="1440" alt="トップページ" src="https://github.com/user-attachments/assets/dc22aae4-56ab-4092-b6a9-a1072f80c088">

### シーズンでアニメを検索

1. シーズンを選択
2. 検索ボタンをクリック
3. 検索結果を表示

![シーズン検索](https://github.com/user-attachments/assets/7fdc3225-ae61-4217-836a-996862ecc1ae)

### タイトルでアニメを検索

1. 検索バーにタイトルを入力して Enter
2. 検索結果を表示

![タイトル検索](https://github.com/user-attachments/assets/ecdf7ada-f684-4724-85ea-38a29abde2bb)

## システム構成図

![システム構成図](https://github.com/user-attachments/assets/bd291557-4f1f-4d54-a259-1c829f731f28)

ざっくり説明すると

- フレームワークは Next.js
- UI ライブラリは Chakra UI
- ホスティングは Vercel
- アニメデータは Annict API から
