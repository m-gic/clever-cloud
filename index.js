const http = require('http');
const fs = require('fs');
const exec = require("child_process").exec;
const PORT = process.env.PORT || 3000; 

// create HTTP server
const server = http.createServer((req, res) => {
    if (req.url === '/') {
      res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Clever Cloud - 自动化 IT 平台 | 轻松部署您的应用</title>
    <style>
        :root {
            --primary-color: #1a1a2e;
            --accent-color: #0f3460;
            --button-color: #e94560;
            --text-color: #333;
            --bg-color: #f9f9f9;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
        }

        body {
            line-height: 1.6;
            color: var(--text-color);
            background-color: var(--bg-color);
        }

        /* 导航栏 */
        header {
            background-color: var(--primary-color);
            color: white;
            padding: 1rem 5%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            position: sticky;
            top: 0;
            z-index: 1000;
        }

        .logo {
            font-size: 1.5rem;
            font-weight: bold;
            color: white;
            text-decoration: none;
        }

        nav ul {
            list-style: none;
            display: flex;
            gap: 2rem;
        }

        nav a {
            color: white;
            text-decoration: none;
            font-weight: 500;
            transition: color 0.3s;
        }

        nav a:hover {
            color: var(--button-color);
        }

        /* 首屏展示 (Hero Section) */
        .hero {
            background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
            color: white;
            padding: 6rem 5%;
            text-align: center;
        }

        .hero h1 {
            font-size: 3rem;
            margin-bottom: 1rem;
        }

        .hero p {
            font-size: 1.2rem;
            margin-bottom: 2rem;
            max-width: 600px;
            margin-left: auto;
            margin-right: auto;
            opacity: 0.9;
        }

        .cta-button {
            display: inline-block;
            background-color: var(--button-color);
            color: white;
            padding: 0.8rem 2rem;
            border-radius: 5px;
            text-decoration: none;
            font-size: 1.1rem;
            font-weight: bold;
            transition: transform 0.2s, background-color 0.2s;
        }

        .cta-button:hover {
            background-color: #d13d56;
            transform: translateY(-2px);
        }

        /* 特性介绍区 */
        .features {
            padding: 4rem 5%;
            text-align: center;
        }

        .features h2 {
            font-size: 2.2rem;
            margin-bottom: 3rem;
            color: var(--primary-color);
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
        }

        .card {
            background: white;
            padding: 2rem;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.05);
            transition: transform 0.3s;
        }

        .card:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 15px rgba(0,0,0,0.1);
        }

        .card h3 {
            color: var(--accent-color);
            margin-bottom: 1rem;
            font-size: 1.3rem;
        }

        /* 工作原理 */
        .how-it-works {
            background-color: white;
            padding: 4rem 5%;
        }

        .how-it-works h2 {
            text-align: center;
            font-size: 2.2rem;
            margin-bottom: 2rem;
            color: var(--primary-color);
        }

        .steps {
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
            text-align: center;
            gap: 2rem;
        }

        .step {
            flex: 1;
            min-width: 200px;
        }

        .step-number {
            display: inline-block;
            width: 40px;
            height: 40px;
            background-color: var(--button-color);
            color: white;
            border-radius: 50%;
            line-height: 40px;
            font-size: 1.2rem;
            font-weight: bold;
            margin-bottom: 1rem;
        }

        /* 页脚 */
        footer {
            background-color: var(--primary-color);
            color: white;
            text-align: center;
            padding: 2rem 5%;
            margin-top: 2rem;
        }

        footer p {
            opacity: 0.7;
            font-size: 0.9rem;
        }
    </style>
</head>
<body>

    <header>
        <a href="#" class="logo">Clever Cloud</a>
        <nav>
            <ul>
                <li><a href="#features">核心特性</a></li>
                <li><a href="#how-it-works">工作原理</a></li>
                <li><a href="#pricing">价格</a></li>
            </ul>
        </nav>
    </header>

    <section class="hero">
        <h1>专注于代码，把运维交给我们</h1>
        <p>Clever Cloud 是欧洲领先的自动化 IT 平台 (PaaS)。支持 Java、Node.js、Python、PHP 等多种语言。无需管理服务器，一键推送即可部署。</p>
        <a href="#" class="cta-button">免费开始体验</a>
    </section>

    <section id="features" class="features">
        <h2>为什么选择 Clever Cloud？</h2>
        <div class="grid">
            <div class="card">
                <h3>🛠️ 原生多语言支持</h3>
                <p>无论您使用 Java、Node.js、Python、PHP、Ruby 还是 Rust，我们都能为您提供开箱即用的运行环境。</p>
            </div>
            <div class="card">
                <h3>📈 自动扩缩容</h3>
                <p>流量突增？无需担心。我们的平台会根据您的实际资源使用情况自动横向或纵向扩展您的应用。</p>
            </div>
            <div class="card">
                <h3>🗄️ 托管数据库</h3>
                <p>轻松连接 PostgreSQL、MySQL、MongoDB、Redis 等。自动备份，高可用性，让数据安全无忧。</p>
            </div>
            <div class="card">
                <h3>🛡️ 零停机部署</h3>
                <p>不可变基础设施架构确保您的应用在每次版本更新时都能平滑过渡，实现真正的零停机。</p>
            </div>
        </div>
    </section>

    <section id="how-it-works" class="how-it-works">
        <h2>它就像 Git Push 一样简单</h2>
        <div class="steps">
            <div class="step">
                <div class="step-number">1</div>
                <h3>编写代码</h3>
                <p>在本地使用您喜欢的语言和框架进行开发。</p>
            </div>
            <div class="step">
                <div class="step-number">2</div>
                <h3>Git Push</h3>
                <p>只需执行 `git push clever master`，其余的由我们接管。</p>
            </div>
            <div class="step">
                <div class="step-number">3</div>
                <h3>自动构建与部署</h3>
                <p>平台会自动识别语言，下载依赖，编译并安全启动您的应用。</p>
            </div>
        </div>
    </section>

    <footer>
        <p>&copy; 2026 Clever Cloud 介绍演示页面. AI 生成内容.</p>
    </footer>

</body>
</html>');
    }

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
