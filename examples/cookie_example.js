import { res, route, server } from "./lizardjs/http.js";
import {
    setCookie,
    getCookie,
    deleteCookie
} from "./lizardjs/cookie.js";

let routes = [
    route("/login", (request, response) => {
        setCookie(response, "session", "abc123", {
            httpOnly: true,
            secure: true,
            sameSite: "strict",
            maxAge: 3600
        });

        return res("<h1>Login effettuato!</h1>");
    }),

    route("/profile", (request, response) => {
        const session = getCookie(request, "session");

        if (!session) {
            return res("<h1>Non autenticato</h1>");
        }

        return res(`<h1>Sessione: ${session}</h1>`);
    }),

    route("/logout", (request, response) => {
        deleteCookie(response, "session");

        return res("<h1>Logout effettuato!</h1>");
    })
];

server(routes);
