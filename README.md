# vue-api-calls-in-a-smart-way

[Vue API calls in a smart way](https://medium.com/canariasjs/vue-api-calls-in-a-smart-way-8d521812c322)

## 概要

Repository パターンと Factory パターンを利用して API をコールするサンプル。

### Repository パターン

DB などのデータソースへのアクセスを抽象化するパターン。

Repository はデータソースへのアクセスに必要なロジックをカプセル化したクラスやモジュールのこと。

Repository パターンを利用することで以下のようなメリットがある。

- データソースにアクセスするインターフェース（手段）を一元化。
- ビジネスロジックからデータソースへのアクセスを疎結合にする。

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

### Lints and fixes files

```
yarn lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
