const http = require("http");

const app = http.createServer((req, res) => {
    res.write("Hello World");
    res.end();
});

app.listen(3000, () => {
    console.log("server on http://localhost:3000");
});