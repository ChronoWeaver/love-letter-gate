# Love Letter Gate

一个手机优先的静态表白网页：先回答几道只有你们知道的小问题，全部答对后获得通关密码并解锁信封，最后打开一封表白信。首页也可以输入密码 `0326` 跳过测试。

进度条由 40 个像素格组成，记录从 2026 年 5 月 1 日到 6 月 10 日共同走过的 40 天。15 道题会依次点亮背景像素，通关后拼成爱心；信件末尾还藏有相识第 41 天的彩蛋。

每道题答对后的提示语首字连起来是隐藏句子：从遇见你那天起我就慢慢喜欢你了。

## 项目结构

- `index.html`: 页面结构
- `styles.css`: 像素风视觉样式、答题动画和响应式布局
- `app.js`: 题目、答案、提示语和表白信正文
- `questions.md`: 正式题库、答案规则和测试呈现要求
- `assets/paper-background.png`: 早期纸质背景资产，当前像素风版本未使用
- `design/concept.png`: 初始视觉概念图
- `design/pixel-concept.png`: 像素风改版概念图

## 修改内容

题目在 `app.js` 的 `questions` 数组里。每一题的 `correct` 是正确答案的序号，从 `0` 开始。

表白信正文在 `app.js` 的 `letterParagraphs` 数组里，每一段是一行字符串。

四位通关密码在 `app.js` 的 `passcode` 常量里，当前为 `0326`。

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
