// index.js
const port = process.env.PORT || 8080; 

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/clever_cloud_intro.html'); 
});

server.listen(port, () => {
  console.log(`应用已在端口 ${port} 上就绪`);
});
