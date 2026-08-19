# Sheeep's Zone

一个基于 MkDocs Material 的技术博客与学习笔记站点，主要用于整理 SLAM、计算机视觉和相关算法知识。

## 1. 项目简介

这个仓库不是传统应用代码，而是一个文档型静态站点。内容以 Markdown 形式组织，使用 MkDocs 构建，并通过 GitHub Pages 自动部署为公开网站。

## 2. 仓库结构

```text
Sheeep-Zone/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Pages 部署工作流
├── docs/
│   ├── index.md                # 首页
│   ├── *.md                    # 博客正文
│   ├── images/                 # 图片资源
│   ├── javascripts/
│   └── stylesheets/
├── mkdocs.yml                  # MkDocs 配置
├── requirements.txt            # Python 依赖清单
├── README.md                   # 项目说明
├── .gitignore                  # 忽略规则
└── site/                       # MkDocs 生成的静态站点
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

### 4.5 验证安装和本地构建

```bash
mkdocs --version
mkdocs build --strict
```

`mkdocs build --strict` 会将站点生成到 `site/`，并在发现配置、链接或 Markdown 问题时报告错误。

## 5. 写作与维护规范

### 5.1 文章命名规范

推荐使用以下命名：

- `板块名-文章名.md`

### 5.2 目录组织规范

- 所有正文均放在 `docs/`
- 图片统一放在 `docs/images/`
- 通用样式放在 `docs/stylesheets/`
- 自定义 JS 放在 `docs/javascripts/`
- 避免在根目录随意散落资源文件

### 5.3 导航规范

如果新增文章，需要在 `mkdocs.yml` 中同步更新 `nav` 配置，例如：

```yaml
nav:
  - Home: index.md
  - SLAM Basics:
      - SIFT特征: SLAM-Basics-SIFT.md
      - GFTT特征: SLAM-Basics-GFTT.md
      - SURF特征: SLAM-Basics-SURF.md
```

### 5.4 新增或修改文章

1. 在 `docs/` 下创建或修改 Markdown 文件。
2. 如果文章需要显示在站点导航中，更新 `mkdocs.yml` 中的 `nav` 配置。
3. 将图片、样式和脚本分别放入 `docs/images/`、`docs/stylesheets/` 和 `docs/javascripts/`。
4. 使用 `mkdocs serve` 预览，并使用 `mkdocs build --strict` 验证构建。

文章建议包含清晰的标题层级、代码语言标注、图片说明和参考资料。数学公式可使用 Markdown 公式语法。

## 6. 发布流程

本仓库使用 GitHub Actions 自动部署到 GitHub Pages。流程如下：

1. 在 `dev` 或 feature 分支开发并完成本地检查
2. 合并到 `main` 分支
3. GitHub Actions 自动触发
4. 安装 Python 和 `requirements.txt` 中的依赖
5. 运行 `mkdocs build --strict`
6. 上传 `site/` 构建产物
7. 使用 GitHub Pages Actions 部署站点

对应的工作流文件是 `.github/workflows/deploy.yml`。通常不需要手动修改或提交 `site/`，部署时由 CI 自动生成。

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

## 9. 典型提交流程

```bash
git checkout -b dev
# 编写或修改文档
mkdocs serve
# 本地严格构建检查
mkdocs build --strict
git add .
git commit -m "docs: add new article"
git push origin dev
# 创建 PR，合并到 main 后自动发布
```

## 10. 未来扩展方向

这个站点后续可以进一步扩展：

- 增加更多 SLAM 算法专题
- 拆分为更细的分类导航
- 增加文章标签和索引页
- 引入更系统的知识图谱结构
- 增加数学公式、代码案例和可视化说明