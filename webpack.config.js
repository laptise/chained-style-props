const path = require("path");
module.exports = {
  // モジュールバンドルを行う起点となるファイルの指定
  // 指定できる値としては、ファイル名の文字列や、それを並べた配列やオブジェクト
  // 下記はオブジェクトとして指定した例
  entry: {
    bundle: "./src/index.ts",
  },
  output: {
    filename: "lib.js",
    library: "chained-style-props",
    libraryTarget: "umd",
    globalObject: "this",
  },
  // モジュールとして扱いたいファイルの拡張子を指定する
  // 例えば「import Foo from './foo'」という記述に対して"foo.ts"という名前のファイルをモジュールとして探す
  // デフォルトは['.js', '.json']
  resolve: {
    extensions: [".ts", ".js"],
  },
  devServer: {
    // webpack-dev-serverの公開フォルダ
    static: {
      directory: path.join(__dirname, "dist"),
    },
  },
  // モジュールに適用するルールの設定（ここではローダーの設定を行う事が多い）
  module: {
    rules: [
      {
        // 拡張子が.tsで終わるファイルに対して、TypeScriptコンパイラを適用する
        test: /\.ts$/,
        loader: "ts-loader",
      },
    ],
  },
};
