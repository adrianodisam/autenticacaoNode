const http = require("http");
const server = http.createServer((request, response) => {
  // get  / hello/:nome   -> olá mundo ${nome}
  if (request.method == "GET" && /^\/hello\/\w+$/.test(request.url)) {
    const [, , name] = request.url.split("/");
    response.writeHead(200);
    response.end(`hello ${name}!`);
    return;
  }
  // get  / hello   -> olá mundo
  if (request.method == "GET" && request.url.startsWith("/hello")) {
    response.writeHead(200);
    response.end("olá mundo");
    return;
  }
  response.writeHead(404);
  response.end("Not found");
});

server.listen(3000, () => {
  console.log("server start");
});
