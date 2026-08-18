# 文章结构规范

本文档用于统一本仓库中技术文章的编写风格、命名方式、文件组织和内容结构。

## 1. 文章命名规范

- 文件名使用英文大写 + 中划线 + 简短描述
- 示例：
  - `SLAM-Basics-SIFT.md`
  - `SLAM-Basics-GFTT.md`
  - `SLAM-Basics-SURF.md`
- 名称尽量保持与标题一致
- 避免使用中文文件名或过长的文件名

## 2. 文章目录结构

```text
docs/
├── index.md
├── ARTICLE_GUIDELINES.md
├── SLAM-Basics-SIFT.md
├── SLAM-Basics-GFTT.md
├── SLAM-Basics-SURF.md
├── images/
│   ├── example-1.png
│   └── example-2.png
├── javascripts/
│   └── figure-ref.js
├── stylesheets/
│   └── extra.css
└── robots.txt
```

## 3. 标题规范

建议文章顶部保持以下结构：

```markdown
# 标题

> 适用范围：例如 SLAM / 特征提取 / 计算机视觉

## 1. 背景与动机
## 2. 基本概念
## 3. 算法原理
## 4. 代码分析
## 5. 实验或应用
## 6. 总结
## 7. 参考资料
```

## 4. 内容写作规范

### 4.1 语言风格

- 优先使用中文说明，必要时加入英文术语
- 保持专业、简洁、逻辑清晰
- 避免空泛表述，尽量附带例子和图示

### 4.2 代码规范

- 代码块要注明语言类型
- 关键代码片段建议突出重点
- 代码分析中应说明关键变量与执行逻辑

```markdown
```python
import cv2
print("example")
```
```

### 4.3 图片规范

- 图片统一放入 `docs/images/`
- 图片名称尽量语义化
- 若图片用于说明算法步骤，建议在正文中提前说明图示含义

### 4.4 引用规范

- 参考文献用列表方式罗列
- 建议标明原文名称、作者、年份和来源
- 若引用公式，需要使用 Markdown 公式语法

## 5. 导航规范

新增文章后，需要：

1. 将文章放入 `docs/`
2. 将文章路径加入 `mkdocs.yml` 的 `nav`
3. 更新首页展示内容（如有必要）

示例：

```yaml
nav:
  - Home: index.md
  - SLAM Basics:
      - SIFT特征: SLAM-Basics-SIFT.md
      - GFTT: SLAM-Basics-GFTT.md
      - SURF: SLAM-Basics-SURF.md
```

## 6. 提交规范

推荐提交说明如下：

```bash
git commit -m "docs: add SIFT article"
git commit -m "fix: broken navigation link"
git commit -m "chore: update MkDocs config"
```

## 7. 审核要求

在合并前建议检查：

- 标题是否清晰
- 文章是否包含合理结构
- 导航是否更新
- 图片是否引用正确
- 代码块是否正常显示
- 构建是否通过 `mkdocs build --strict`

## 8. 结论

统一规范后，站点更容易维护、检索和扩展，也能减少后续重构成本。每一篇文章都应该像一个独立的知识模块，既可阅读，也可长期演进。
