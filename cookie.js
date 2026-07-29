export function setCookie(response, name, value, options = {}) {
    let cookie = `${name}=${encodeURIComponent(value)}`;

    if (options.maxAge !== undefined) {
        cookie += `; Max-Age=${options.maxAge}`;
    }

    if (options.domain) {
        cookie += `; Domain=${options.domain}`;
    }

    if (options.path) {
        cookie += `; Path=${options.path}`;
    }

    if (options.expires) {
        cookie += `; Expires=${new Date(options.expires).toUTCString()}`;
    }

    if (options.httpOnly) {
        cookie += "; HttpOnly";
    }

    if (options.secure) {
        cookie += "; Secure";
    }

    if (options.sameSite) {
        cookie += `; SameSite=${options.sameSite}`;
    }

    response.setHeader("Set-Cookie", cookie);
}

export function getCookie(request, name) {
    const cookies = request.headers.cookie;

    if (!cookies) {
        return undefined;
    }

    const cookie = cookies
        .split(";")
        .map(cookie => cookie.trim())
        .find(cookie => cookie.startsWith(`${name}=`));

    if (!cookie) {
        return undefined;
    }

    return decodeURIComponent(cookie.substring(name.length + 1));
}

export function deleteCookie(response, name, options = {}) {
    let cookie = `${name}=; Max-Age=0`;

    if (options.path) {
        cookie += `; Path=${options.path}`;
    }

    if (options.domain) {
        cookie += `; Domain=${options.domain}`;
    }

    cookie += "; Expires=Thu, 01 Jan 1970 00:00:00 GMT";

    if (options.httpOnly) {
        cookie += "; HttpOnly";
    }

    if (options.secure) {
        cookie += "; Secure";
    }

    if (options.sameSite) {
        cookie += `; SameSite=${options.sameSite}`;
    }

    response.setHeader("Set-Cookie", cookie);
}
