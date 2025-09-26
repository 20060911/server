var app = require("express")();
var mineflayer = require("mineflayer");
app.get("/", function(request, response) {
  mineflayer.createBot({
    host: request.query.host,
    port: Number(request.query.port),
    username: request.query.username
  });
  response.send("OK");  
});
app.listen(3000);
