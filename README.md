# Copy Path with Line (:L)

VS Code 拡張機能。エディタ上で選択中のファイルパスと行番号を `:L` 形式でクリップボードにコピーします。

## 出力フォーマット

| 選択 | 出力例 |
|------|--------|
| 単一行 | `src/extension.ts L42` |
| 複数行 | `src/extension.ts L42-L50` |

パスはワークスペースからの相対パスです。

## キーバインド

| OS | ショートカット |
|----|----------------|
| macOS | `Cmd + Alt + C` |
| Windows / Linux | `Ctrl + Alt + C` |

コマンドパレット (`Cmd+Shift+P`) から **Copy Path with Line (:L)** でも実行できます。

## 開発

```bash
npm install
npm run compile
```

VS Code で `F5` を押すと Extension Development Host が起動します。

## 要件

- VS Code 1.85.0 以上
