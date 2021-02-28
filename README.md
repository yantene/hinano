# siggre

## 開発

### 環境構築

バックエンドの依存パッケージをインストール。

```bash
npm ci
```

フロントエンドの依存パッケージをインストール。

```bash
(cd frontend/ && npm ci)
```

### Build

フロントエンドおよびバックエンドをビルドし、
`/dist` 下に出力する。

```bash
npm run build
```

ビルド結果のサーバを起動する。

```bash
npm start
```

ビルド結果を削除する。

```bash
npm run clean
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
