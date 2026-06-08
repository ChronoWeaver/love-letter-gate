# Love Letter Gate

一个手机优先的静态表白网页：先回答几道只有你们知道的小问题，全部答对后解锁信封，最后打开一封表白信。

## 项目结构

- `index.html`: 页面结构
- `styles.css`: 视觉样式、信封、动画和响应式布局
- `app.js`: 题目、答案、提示语和表白信正文
- `questions.md`: 正式题库、答案规则和测试呈现要求
- `assets/paper-background.png`: 页面背景资产
- `design/concept.png`: 初始视觉概念图

## 修改内容

题目在 `app.js` 的 `questions` 数组里。每一题的 `correct` 是正确答案的序号，从 `0` 开始。

表白信正文在 `app.js` 的 `letterParagraphs` 数组里，每一段是一行字符串。

## 本地预览

这个项目是纯静态页面，可以直接双击打开 `index.html`。如果想用本地服务器预览：

```bash
python3 -m http.server 4173
```

然后打开 `http://127.0.0.1:4173`。

## GitHub Pages

仓库创建并推送后，在 GitHub 仓库里打开 `Settings` -> `Pages`，选择 `Deploy from a branch`，分支选 `main`，目录选 `/root`。

如果你已经安装并登录 GitHub CLI，也可以用：

```bash
gh repo create love-letter-gate --public --source=. --remote=origin --push
```
