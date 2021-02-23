# uchiwa

## development

### build

```bash
npm run build
```

`frontend/` および `backend/` をビルドし、
`dist/` 下に成果物を出力します。

### start

```bash
npm start
```

`dist/` 下に出力した成果物を実行します。

### dev

```bash
npm run dev
```

ファイルの変更を検知しながら都度ファイルをビルドし、
`http://localhost:3000` で表示します。
オートリロードはしないので適宜手動でリロードしてください。

### lint

```bash
npm run lint
```

ファイルを lint します。
コミット前に必ず実行してください。

### lint:fix

```bash
npm run lint:fix
```

ファイルを自動修正およびフォーマットします。

### test

```bash
npm test
```

テストを実行します。
コミット前に必ず実行してください。
