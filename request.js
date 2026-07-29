export function httpresponse(type) {
    const responses = {
        200: "OK",
        201: "Created",
        301: "Moved Permanently",
        302: "Found",
        400: "Bad Request",
        401: "Unauthorized",
        403: "Forbidden",
        404: "Not Found",
        500: "Internal Server Error"
    };

    return {
        type,
        message: responses[type] ?? "Unknown Status"
    };
}
