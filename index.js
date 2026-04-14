// index.js
const express = require('express'); // 必须引入 express
const app = express();              // 初始化 app

const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/clever_cloud_intro.html');
});

// 注意：如果你直接使用 app.listen，就不需要额外定义 server 对象
app.listen(port, () => {
  console.log(`应用已在端口 ${port} 上就绪`);
});
