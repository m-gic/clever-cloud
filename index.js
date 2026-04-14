const http = require('http');
const fs = require('fs');
const exec = require("child_process").exec;
const PORT = process.env.PORT || 3000; 


app.get('/', (req, res) => {
  // 使用 path.join 确保路径在服务器环境正确
  res.sendFile(path.join(__dirname, 'clever_cloud_intro.html'));
});

app.listen(port, () => {
  console.log(`应用已在端口 ${port} 上就绪`);
});
