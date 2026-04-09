import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  const disposable = vscode.commands.registerCommand(
    "extension.copyPathWithLineL",
    () => {
      const editor = vscode.window.activeTextEditor;
      if (!editor) {
        return;
      }

      const { document, selection } = editor;
      const relativePath = vscode.workspace.asRelativePath(document.uri);
      const startLine = selection.start.line + 1;

      let text: string;
      if (selection.isSingleLine) {
        text = `${relativePath} L${startLine}`;
      } else {
        const endLine = selection.end.line + 1;
        text = `${relativePath} L${startLine}-L${endLine}`;
      }

      vscode.env.clipboard.writeText(text);
      vscode.window.setStatusBarMessage(`Copied: ${text}`, 2000);
    }
  );

  context.subscriptions.push(disposable);
}

export function deactivate() {}
