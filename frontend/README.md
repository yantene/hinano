# siggre frontend

とくに指定のない限り、
以下で出てくるコマンドは `/frontend/` ディレクトリ下で実行する。

## 開発環境構築

依存パッケージをインストール。

`/` ディレクトリ下で実行。

```bash
npm ci
```

## フロントエンド開発用サーバの起動

フロントエンドのみを開発するとき向け。
`/dist/public` にファイルが書き出されてしまうことに注意。

```bash
npm run dev:serve
npm start # dev:serve へのエイリアス
```

## Build

開発用ビルド。
バックエンドと統合させて開発するとき向け。
バックエンドから参照できるよう、`/dist/public` に出力される。

```bash
npm run dev
npm run dev:watch # ファイル変更を検知する場合
```

本番用ビルド。出力先は同上。

```bash
npm run build
```

## Lint & Format

eslint は以下で実行する。
PR 作成前には必ず実行および指摘事項を修正すること。

```bash
npm run lint
```

eslint の fix および prettier の実行は以下で実行する。

```bash
npm run format
```

## Test

```bash
npm test
```
