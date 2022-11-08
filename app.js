const http = require("http");
const { HandleRoutes } = require("./routes");

http.createServer(HandleRoutes)
    .listen(5080, "127.0.0.1", (err) => {
        if(err) throw err;
        console.log("App is live at http://127.0.0.1:5080")
    })