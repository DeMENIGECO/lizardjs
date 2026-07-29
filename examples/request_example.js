import { res, route, server } from "./lizardjs/http.js";
import { httpresponse } from "./lizardjs/request.js";

let notFound = res(
    "<h1>Pagina non trovata</h1>",
    httpresponse(404)
);

let routes = [
    route("/", res("<h1>Hello, Lizard!</h1>")),
    route("/404", notFound)
];

server(routes);
