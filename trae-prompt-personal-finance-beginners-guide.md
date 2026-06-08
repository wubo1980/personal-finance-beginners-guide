# Trae 建站提示词 — Personal Finance for Beginners Guide

## 一、项目定位

**站名**：Personal Finance for Beginners Guide  
**目标用户**：18-35 岁的理财新手（英语母语者），没有任何理财基础，被财务术语吓到的人  
**核心使命**：用大白话让理财小白理解「钱是怎么回事」，建立最基本的财务健康习惯  
**变现方式**：Google AdSense 广告 + 亚马逊 affiliate（推荐理财书籍/工具）  
**对标风格**：NerdWallet、The Balance 的"入门向"部分，但要更亲民、更视觉化  
**SEO 主关键词**：personal finance for beginners, how to budget, saving money tips, credit score explained, investing for beginners

---

## 二、站点结构与页面规划

共 **12 个页面**：1 个首页 + 10 个内容页 + 1 个about/privacy。

### 首页 (index.html)
- 站点标题 + 一句话 tagline："Your first step to financial freedom — no jargon, no shame."
- 大 hero 区域，用半透明渐变背景 + 简洁 CTA
- 所有 10 个内容页的卡片式导航，每张卡片配一个小图标（Font Awesome 免费版）
- 底部简洁的站点信息

### 内容页（共 10 篇）

| # | 页面 slug | 标题 | 核心内容 |
|:-:|:----------|:-----|:---------|
| 1 | budgeting-101 | Budgeting 101: How to Actually Stick to a Budget | 50/30/20 法则、零基预算、App 推荐（Mint/YNAB）、常见误区 |
| 2 | emergency-fund | Emergency Fund: Your Financial Safety Net | 为什么需要、存多少（3-6个月）、怎么一步步攒、放哪里 |
| 3 | saving-vs-investing | Saving vs Investing: What's the Difference? | 核心区别、各自适合的场景、什么时候该转、复利效应（可视化） |
| 4 | credit-score-basics | Credit Score Explained: What It Is & Why It Matters | 分数范围、影响因素、怎么提升、常见误解 |
| 5 | debt-management | How to Get Out of Debt: A Beginner's Plan | 雪球法 vs 雪崩法、协商技巧、避免坏债、心理建设 |
| 6 | investing-101 | Investing for Beginners: Stocks, Bonds & ETFs | 股票/债券/ETF 最基本解释、定投概念、券商推荐（Robinhood/Fidelity）、风险警示 |
| 7 | retirement-basics | Retirement Accounts: 401(k), IRA & Roth IRA Explained | 3 种账户区别、税收优惠、雇主匹配、什么时候开始都不嫌早 |
| 8 | tax-basics | Taxes for Beginners: What You Need to Know | W-2/1099、退税是什么、deduction vs credit、免费报税工具 |
| 9 | insurance-101 | Insurance for Beginners: What You Actually Need | 健康/车/租客/人寿 — 优先级排序、不买贵的只买对的 |
| 10 | bank-accounts | Checking vs Savings: What's the Difference & How to Use Both | 利率、ATM 费用、高收益储蓄账户、信用合作社 vs 大银行 |

### 关于/隐私页
- about.html（简单自我介绍）
- privacy.html（AdSense 需要的隐私政策模板）

---

## 三、设计规范

### 🎨 色彩体系

```
主色：    #1B4F72 (深蓝)    — 信任、专业、稳重
辅色：    #27AE60 (绿)      — 金钱、增长、正面
强调色：  #F39C12 (琥珀金)  — 财富、亮点、CTA 按钮
背景：    #F8FAFC (浅灰白)   — 干净、不刺眼
文字主：  #1A202C (深灰)    — 阅读舒适
文字辅：  #718096 (中灰)    — 次要信息
边框/分割：#E2E8F0
```

- **CTA 按钮**：琥珀金背景 + 深色文字（hover 时微加深）
- **链接**：绿色（hover 变深绿）
- **卡片**：白色背景 + 微阴影（box-shadow: 0 2px 8px rgba(0,0,0,0.06)）

### 🔤 字体方案（全部 0 版权费 — Google Fonts）

| 用途 | 字体 | 权重 | fallback |
|:----|:----|:----|:---------|
| 标题/大标题 | **Playfair Display** | 700, 900 | Georgia, serif |
| 副标题 | **Inter** | 600 | system-ui, sans-serif |
| 正文 | **Inter** | 400, 500 | system-ui, sans-serif |
| 数字/数据 | **JetBrains Mono** | 400 | monospace |

原因：
- Playfair Display 用于标题 → 营造「可靠的财务顾问」气质，有质感但不老气
- Inter 用于正文 → 现代、易读、在屏幕和移动端都清晰
- JetBrains Mono 用于数字表格 → 等宽字体方便对齐数额
- 全部 MIT/SIL OFL 开源许可，无版权风险

### 📐 页面布局规范

- **最大内容宽度**：1100px，居中
- **Hero 区域**：全屏宽，半透明叠加层文字
- **卡片网格**：桌面 3 列，平板 2 列，手机 1 列（CSS Grid）
- **正文**：最大 720px 阅读宽度，行高 1.8
- **列表**：用 emoji 或 Font Awesome 图标作为 bullet point
- **表格式内容**：水平滚动支持，手机端可横向滑动

### 📱 响应式断点

- 桌面 ≥ 1024px
- 平板 768px - 1023px
- 手机 < 768px

---

## 四、🌟 背景图策略（重要）

**每个页面必须有一张独特的半透明背景图**，根据页面主题设计。使用 CSS 伪元素或绝对定位的背景层，opacity: 0.08-0.15，确保文字完全可读。

具体方案：

| 页面 | 背景图概念 | 色彩倾向 |
|:----|:----------|:---------|
| 首页 | 一个人站在岔路口，路有两条（一条通向储蓄罐，一条通向增长图表）—— 代表选择与未来 | 暖蓝渐变 |
| budgeting-101 | 简约的饼图/圆环分割线稿，像 50/30/20 法则的视觉抽象 | 蓝绿 |
| emergency-fund | 雨伞或屋顶的抽象线稿，象征保护和安全 | 蓝 |
| saving-vs-investing | 两棵不同大小的树，一棵矮但粗壮（储蓄），一棵高但正在生长（投资）| 绿+金 |
| credit-score-basics | 温度计或进度条的抽象线条，从红到绿 | 红→绿渐变 |
| debt-management | 一个人正在解开绳结的抽象线图，象征摆脱债务 | 琥珀 |
| investing-101 | 向上延伸的阶梯或增长折线，配小圆点代表股票 | 绿+金 |
| retirement-basics | 远处的地平线和日落，一条小路通向远方 | 暖橘+蓝 |
| tax-basics | 文件夹、文件、计算器的扁平线稿堆叠 | 蓝+灰 |
| insurance-101 | 盾牌线稿，周围有各种小图标（车/家/人）环绕 | 蓝 |
| bank-accounts | 三个不同形状的容器（罐子/盒子/瓶子），代表不同类型的账户 | 蓝+绿 |

**技术实现方式**：
1. 用 CSS `::before` 伪元素 + `background-image: url(...)` 设置背景图
2. 背景图使用 PNG/SVG，带有透明通道
3. 或者使用 CSS 的 `mix-blend-mode: overlay` + 低 opacity 图片
4. 图片尽量使用 SVG 矢量图（体积小、缩放不失真）
5. 如果找不到合适的 SVG，使用 Unsplash 的高质量免版权照片，裁切后用 CSS 降低透明度
6. 背景图路径统一放在 `/images/bg/` 目录下

**资源来源**：
- SVG 插图：unDraw (undraw.co) — 开源免费，可改色
- 照片：Unsplash (unsplash.com) — CC0 免版权
- 图标：Font Awesome 6 Free (fontawesome.com) — MIT 许可

---

## 五、技术栈与代码要求

### 技术选择
- **框架**：纯 HTML5 + CSS3 + 原生 JavaScript（Tailwind CSS 可接受，但需要纯静态，无需 Node 构建步骤）
- **或**：Next.js 静态导出（`next export`），如果选择此方案则必须确保所有页面预渲染为静态 HTML，且能在 Vercel 直接部署
- **最佳推荐**：用纯 HTML/CSS/JS，最简单、零依赖、直接部署
- **SEO**：每个页面必须有独立的 `<title>`、`<meta name="description">`、`<meta name="keywords">`、Open Graph meta tags

### 性能要求
- Google Lighthouse 评分 ≥ 85（Mobile）、≥ 95（Desktop）
- 图片懒加载（loading="lazy"）
- 字体使用 `display=swap`
- CSS 压缩（内联关键 CSS，异步加载非关键 CSS）
- 禁止使用大型 JS 框架（React/Vue 全量包），纯原生或极轻量

### 目录结构
```
personal-finance-beginners-guide/
├── index.html                  # 首页
├── budgeting-101.html
├── emergency-fund.html
├── saving-vs-investing.html
├── credit-score-basics.html
├── debt-management.html
├── investing-101.html
├── retirement-basics.html
├── tax-basics.html
├── insurance-101.html
├── bank-accounts.html
├── about.html
├── privacy.html
├── css/
│   ├── style.css               # 主样式
│   └── responsive.css           # 响应式
├── js/
│   └── main.js                  # 交互逻辑（滚动、菜单等）
├── images/
│   ├── bg/                      # 各页面的半透明背景图
│   │   ├── home-bg.svg
│   │   ├── budgeting-bg.svg
│   │   ├── emergency-bg.svg
│   │   ├── saving-bg.svg
│   │   ├── credit-bg.svg
│   │   ├── debt-bg.svg
│   │   ├── investing-bg.svg
│   │   ├── retirement-bg.svg
│   │   ├── tax-bg.svg
│   │   ├── insurance-bg.svg
│   │   └── bank-bg.svg
│   ├── hero-main.jpg           # 首页大图（如有）
│   └── icon-placeholder.svg    # 备用图标
├── favicon.ico
└── sitemap.xml                 # 站点地图，必须包含所有页面
```

---

## 六、内容写作指南

### 每篇文章结构
1. **H1 标题**（SEO 主关键词）
2. **引语**（2-3句，点明「为什么这个对你有用」）
3. **核心内容**（用 H2/H3 分级，列表、表格、引用框穿插）
4. **关键数据**（用数字/百分比时用 JetBrains Mono 等宽字体，视觉突出）
5. **可操作步骤**（Call to action，让读者此刻就能做的一件事）
6. **常见误区/FAQ**（2-3个常见误解）
7. **内部链接**（链接到本站其他相关页面，形成内容网络）

### 写作风格
- **永远不用行业黑话**。如果涉及专业术语（如 APR、compound interest），第一句就用大白话解释
- **用类比**。比如「复利就像滚雪球，坡越长雪球越大」
- **短段落**。每段不超过 3-4 句
- **多用列表和表格**，少用长段落
- **语气**：朋友式、鼓励型、不评判。不用「你应该」，用「你可以试试」
- **每个页面**至少 800 字内容，目标 1000-1500 字
- **全部用英文** — 目标用户是英语母语者

### SEO 关键词布局建议

| 页面 | 主要关键词 |
|:----|:----------|
| 首页 | personal finance for beginners, money management basics |
| budgeting-101 | how to budget, beginner budget, 50 30 20 rule |
| emergency-fund | emergency fund, how much to save, financial safety net |
| saving-vs-investing | saving vs investing, difference between saving and investing |
| credit-score-basics | credit score explained, what is credit score, how to improve credit |
| debt-management | how to get out of debt, debt payoff plan, snowball method |
| investing-101 | investing for beginners, stocks vs bonds, how to start investing |
| retirement-basics | 401k explained, IRA vs Roth IRA, retirement planning |
| tax-basics | taxes for beginners, tax deduction vs credit, how to file taxes |
| insurance-101 | insurance for beginners, what insurance do I need |
| bank-accounts | checking vs savings, high yield savings account |

---

## 七、交互与动效（适度）

- **导航栏**：固定在顶部，滚动时缩小高度
- **卡片 hover**：轻微上浮（translateY(-4px)） + 阴影加深
- **滚动渐入**：内容块在滚动到视口时从 opacity:0 渐变为 opacity:1（用 Intersection Observer API，纯原生 JS，不要用库）
- **链接 hover**：底部下划线从左向右展开
- **禁止过场动画**、禁止弹窗、禁止自动播放音频/视频

---

## 八、必须避免的坑

1. ❌ 不要用任何需要付费许可的字体、图标、图片
2. ❌ 不要在代码中硬编码中文（所有界面文本为英文）
3. ❌ 不要用 eval()、document.write()、内联 onclick
4. ❌ 不要使用 Cookie 弹窗（AdSense 需要的话会自己处理，不要自己加）
5. ❌ 不要有 broken links（每个页面之间的内部链接必须有效）
6. ❌ 不要有空白页面（每篇文章内容量充足）
7. ❌ 不要放任何医疗建议、投资承诺（避免法律风险）
8. ❌ 不要用占位文本（lorem ipsum）

---

## 九、交付要求

请按照以下顺序构建：
1. 先生成 sitemap.xml 和页面路由规划
2. 再生成首页（index.html）和样式表
3. 给每个内容页生成背景图（SVG 或安排 Unsplash 图片）
4. 依次生成 10 个内容页
5. 生成 about.html 和 privacy.html
6. 最后检查所有内部链接和 meta tags

**整个站点生成后，确保所有页面可以通过点击导航互访，无死链。**
