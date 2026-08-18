# Sheeep's Zone

一个基于 MkDocs Material 的技术博客与学习笔记站点，主要用于整理 SLAM、计算机视觉和相关算法知识。

## 1. 项目简介

这个仓库不是传统应用代码，而是一个文档型静态站点。内容以 Markdown 形式组织，使用 MkDocs 构建，并通过 GitHub Pages 自动部署为公开网站。

目标包括：

- 记录 SLAM 相关理论和实践笔记
- 分享算法原理与代码分析
- 维护稳定的技术知识库结构
- 让内容可以通过 GitHub Pages 轻松发布和分享

## 2. 仓库结构

```text
Sheeep-Zone/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Pages 部署工作流
├── docs/
│   ├── index.md                # 首页
│   ├── SLAM-Basics-SIFT.md     # SIFT 文章
│   ├── SLAM-Basics-GFTT.md     # GFTT 文章
│   ├── SLAM-Basics-SURF.md     # SURF 文章
│   ├── images/                 # 文章图片
│   ├── javascripts/
│   └── stylesheets/
├── mkdocs.yml                  # MkDocs 配置
├── requirements.txt            # Python 依赖清单
├── DEVELOPMENT.md              # 开发与发布流程说明
├── README.md                   # 项目说明
├── .gitignore                  # 忽略规则
├── site/                       # 站点构建产物（自动生成）
└── .venv/                      # 本地虚拟环境（本地使用）
```

## 3. 技术栈

- Python 3.12
- MkDocs
- MkDocs Material
- GitHub Actions
- GitHub Pages

## 4. 本地开发环境

### 4.1 克隆仓库

```bash
git clone https://github.com/qiqiqihy/Sheeep-Zone.git
cd Sheeep-Zone
```

### 4.2 创建虚拟环境

```bash
python3 -m venv .venv
source .venv/bin/activate
```

### 4.3 安装依赖

```bash
python -m pip install --upgrade pip
pip install -r requirements.txt
```

### 4.4 启动本地预览

```bash
mkdocs serve
```

浏览器访问：

```text
http://127.0.0.1:8000
```

## 5. 写作与维护规范

### 5.1 文章命名规范

推荐使用以下命名：

- `SLAM-Basics-SIFT.md`
- `SLAM-Basics-GFTT.md`
- `SLAM-Basics-SURF.md`

规范要求：

- 文件名统一使用大写英文 + 中划线 + 简短描述
- 文章标题与文件名尽量一致
- 每篇文章都要保持独立的主题边界

### 5.2 目录组织规范

- 所有正文均放在 `docs/`
- 图片统一放在 `docs/images/`
- 通用样式放在 `docs/stylesheets/`
- 自定义 JS 放在 `docs/javascripts/`
- 避免在根目录随意散落资源文件

### 5.3 导航规范

如果新增文章，需要在 `mkdocs.yml` 中同步更新 `nav` 配置：

```yaml
nav:
  - Home: index.md
  - SLAM Basics:
      - SIFT特征: SLAM-Basics-SIFT.md
      - GFTT: SLAM-Basics-GFTT.md
      - SURF: SLAM-Basics-SURF.md
```

### 5.4 标题结构规范

建议文章使用统一结构：

```markdown
# 标题

## 1. 背景与动机

## 2. 基本概念

## 3. 算法原理

## 4. 代码分析

## 5. 实验与结论

## 6. 参考资料
```

这样便于站点导航、内容检索和长期维护。

## 6. 发布流程

本仓库使用 GitHub Actions 自动部署到 GitHub Pages。流程如下：

1. 提交代码到 `main` 分支
2. GitHub Actions 自动触发
3. 安装 Python 和依赖
4. 运行 `mkdocs build --strict`
5. 将构建产物部署到 GitHub Pages

## 7. 推荐提交规范

建议采用清晰的提交信息：

```bash
git add .
git commit -m "docs: add SIFT feature article"
git push origin main
```

常用类型：

- `docs:`：文档内容更新
- `fix:`：修复配置或链接问题
- `feat:`：新增页面/导航/功能
- `chore:`：工程化清理

## 8. 维护建议

- 定期更新 `requirements.txt` 中的版本
- 及时检查站点构建是否仍然通过
- 避免手工修改 `site/` 产物
- 每新增文章都同步更新导航和首页摘要
- 参考资料、图片和代码示例尽量统一保存到 `docs/`

## 9. 未来扩展方向

这个站点后续可以进一步扩展：

- 增加更多 SLAM 算法专题
- 拆分为更细的分类导航
- 增加文章标签和索引页
- 引入更系统的知识图谱结构
- 增加数学公式、代码案例和可视化说明

## 10. 结论

这个仓库适合长期维护为一个技术分享站点。它的价值不在于“代码量”，而在于“知识结构清晰、发布流程稳定、内容可持续演进”。只要遵守统一的文档规范和自动化部署流程，就能让这个站点长期保持可维护性和可访问性。
