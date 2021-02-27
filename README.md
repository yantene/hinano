# siggre

## 開発

### 環境構築

依存パッケージをインストール。

```bash
npm ci
```

### Build

フロントエンドおよびバックエンドをビルドし、
`/dist` 下に出力する。

```bash
npm run build
```

### 開発用サーバの起動

```bash
npm run dev
```

開発用のサーバを起動する。
フロントエンドおよびバックエンドのソースコードの変更を検知して、
自動でビルドし直される。

### Lint & Format

フロントエンドおよびバックエンドに対する eslint は以下で実行する。
PR 作成前は必ず実行および指摘事項を修正すること。

```bash
npm run lint
```

フロントエンドおよびバックエンドに対する
eslint の fix および prettier の実行は以下で実行する。

```bash
npm run format
```

### Test

```bash
npm test
```
