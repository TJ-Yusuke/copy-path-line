"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = activate;
exports.deactivate = deactivate;
const vscode = require("vscode");
function activate(context) {
    const disposable = vscode.commands.registerCommand("extension.copyPathWithLineL", () => {
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            return;
        }
        const { document, selection } = editor;
        const relativePath = vscode.workspace.asRelativePath(document.uri);
        const startLine = selection.start.line + 1;
        let text;
        if (selection.isSingleLine) {
            text = `${relativePath} L${startLine}`;
        }
        else {
            const endLine = selection.end.line + 1;
            text = `${relativePath} L${startLine}-L${endLine}`;
        }
        vscode.env.clipboard.writeText(text);
        vscode.window.setStatusBarMessage(`Copied: ${text}`, 2000);
    });
    context.subscriptions.push(disposable);
}
function deactivate() { }
//# sourceMappingURL=extension.js.map