import { res, route, server } from "./lizardjs/http.js";

let html = res("<h1>Hello, Lizard!</h1>");

let routes = [
    route("/", html)
];

server(routes);
