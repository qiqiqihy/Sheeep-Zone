# Sheeep's Zone 开发流程文档

## 1. 项目定位

这个仓库是一个基于 MkDocs Material 的技术博客 / 知识库，主要用于整理和发布 SLAM 相关技术内容。

- 文档源文件位于 `docs/`
- 站点配置位于 `mkdocs.yml`
- 生成后的静态站点位于 `site/`
- GitHub Actions 自动在提交到指定分支后构建并部署到 GitHub Pages

## 2. 目录说明

```text
Sheeep-Zone/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Pages 自动部署
├── docs/
│   ├── index.md                # 首页
│   ├── SLAM-Basics-SIFT.md     # SIFT 文章
│   ├── SLAM-Basics-GFTT.md     # GFTT 文章
│   ├── SLAM-Basics-SURF.md     # SURF 文章
│   ├── images/                 # 图片资源
│   ├── javascripts/
│   └── stylesheets/
├── mkdocs.yml                  # MkDocs 主配置
├── requirements.txt            # Python 依赖
├── site/                       # 构建产物（可选提交 / 可忽略）
├── .gitignore                  # Git 忽略规则（建议补充）
├── README.md                   # 项目说明（建议补充）
└── DEVELOPMENT.md              # 本文档
```

## 3. 技术栈

- Python 3.x
- `mkdocs`
- `mkdocs-material`
- GitHub Actions
- GitHub Pages

## 4. 本地开发环境准备

### 4.1 创建虚拟环境

```bash
cd Sheeep-Zone
python3 -m venv .venv
source .venv/bin/activate
```

### 4.2 安装依赖

```bash
pip install -r requirements.txt
```

### 4.3 验证安装

```bash
mkdocs --version
```

## 5. 开发和写作流程

### 5.1 新增或修改文章

1. 在 `docs/` 下创建或修改 Markdown 文件。
2. 如果要在导航中显示，更新 `mkdocs.yml` 中的 `nav` 配置。
3. 若引用图片、脚本或样式文件，放在 `docs/` 对应目录中。
4. 文章中可以使用 Material 主题特性，例如：
   - 代码高亮
   - 提示框
   - 公式
   - 交叉引用

### 5.2 本地预览

```bash
mkdocs serve
```

打开浏览器访问：

```text
http://127.0.0.1:8000
```

该命令会自动监听文档修改，实时刷新页面。

### 5.3 本地构建

```bash
mkdocs build --strict
```

该命令会输出到 `site/` 目录，检查是否存在 Markdown 语法、链接或配置错误。

## 6. 发布流程

### 6.1 当前仓库的自动部署方式

当前 GitHub Actions 文件为：

- `.github/workflows/deploy.yml`

它会在提交到 `main` 分支时执行：

1. checkout 代码
2. 安装 Python
3. 安装 `mkdocs-material`
4. 运行 `mkdocs gh-deploy --force`

这会将站点发布到 GitHub Pages。

### 6.2 约定建议

建议明确以下规则：

- 内容开发在 `dev` / feature 分支进行
- 合并到 `main` 后自动部署
- 避免直接手工修改 `site/` 生成产物
- 如果需要保留构建输出，可使用 CI 生成，不要随手提交

## 7. 典型提交流程

```bash
git checkout -b dev
# 编写文档
mkdocs serve
# 本地检查
mkdocs build --strict
# 提交
git add .
git commit -m "docs: add new SLAM article"
git push origin dev
# 提交 PR / 合并到 main
```

## 8. 需要注意的旧化问题

当前仓库中存在一些“老化”风险，建议优先处理：

1. 依赖未显式固定：
   - `requirements.txt` 为空或缺失时，安装环境容易漂移。
   - 现有工作流直接执行 `pip install mkdocs-material`，版本不固定。

2. CI 只写死在 `main` 分支：
   - 当项目长期在 `dev` 分支开发时，部署触发逻辑可能不符合预期。

3. `site/` 是构建产物但被提交到仓库：
   - 这类目录通常不应作为源代码版本库的一部分。
   - 更推荐让 CI 生成并发布，或至少从 Git 版本控制中忽略。

4. 项目文档不完整：
   - 缺少 README
   - 缺少明确的开发/发布规范
   - 缺少版本依赖说明

5. 缺少工程化检查：
   - 没有明确的 lint / build 验收步骤
   - 没有本地验证脚本

## 9. 建议的优化方案

### 方案 A：保守升级

- 增加 `requirements.txt`
- 固定 `mkdocs-material` 版本
- 让部署工作流明确使用 `main` 或 `dev` 策略
- 增加 `.gitignore`，忽略 `site/`

### 方案 B：更现代的流程

- 使用 `pyproject.toml` 管理依赖
- 增加 `make build` / `make serve` 脚本
- 使用 GitHub Pages 的正式 Pages 工作流
- 为每次文档修订建立 PR

## 10. 建议的实操 checklist

在下一次更新时，建议按以下流程推进：

- [ ] 补充 `.gitignore`
- [ ] 增加 `README.md`
- [ ] 固定 `mkdocs-material` 版本
- [ ] 验证 `mkdocs build --strict` 可通过
- [ ] 确认 GitHub Actions 分支策略
- [ ] 决定是否忽略 `site/` 目录
- [ ] 更新导航和首页说明
- [ ] 统一文档、图片和引用路径

## 11. 结论

这个仓库本质上是一个“文档型静态站点”，核心价值在于使用 Markdown 组织 SLAM 技术分享内容，并通过 GitHub Pages 自动部署成公开站点。它已经具备最基本的博客功能，但从工程化角度看，仍有明显的改进空间：依赖固定、发布策略、忽略规则和文档规范都值得补齐。
