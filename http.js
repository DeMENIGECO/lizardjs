import http from "node:http";

export function res(content, options = {}) {
    return {
        content,
        status: options.status ?? 200,
        headers: options.headers ?? {
            "Content-Type": "text/html; charset=utf-8"
        }
    };
}

export function route(path, response) {
    return {
        path,
        response
    };
}

export function server(routes, options = {}) {
    const port = options.port ?? 3000;
    const host = options.host ?? "localhost";

    const httpServer = http.createServer((req, res) => {
        const currentRoute = routes.find(route => route.path === req.url);

        if (!currentRoute) {
            res.writeHead(404, {
                "Content-Type": "text/plain; charset=utf-8"
            });

            res.end("404 - Not Found");
            return;
        }

        const response = currentRoute.response;

        res.writeHead(response.status, response.headers);
        res.end(response.content);
    });

    httpServer.listen(port, host, () => {
        console.log(`LizardJS server running at http://${host}:${port}`);
    });

    return httpServer;
}
