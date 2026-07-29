# 🦎 LizardJS

**Open Source Full-Stack JavaScript Platform**

LizardJS è una piattaforma open source per creare applicazioni web full-stack con **JavaScript e Node.js**.

LizardJS non sostituisce Node.js: è costruito sopra Node.js e fornisce strumenti e API semplici per sviluppare applicazioni web.

> 🚧 **LizardJS è attualmente in sviluppo.**
> Le API possono cambiare nelle versioni future.

## ✨ Caratteristiche

Attualmente LizardJS include:

* 🌐 Server HTTP e routing
* 📡 Gestione delle risposte HTTP
* 🍪 Gestione dei cookie
* 🧩 API modulari
* 🟢 Compatibilità con Node.js

Sono previste altre funzionalità full-stack nelle versioni future.

## 📦 Struttura

La libreria è organizzata in moduli:

```text
lizardjs/
├── http.js
├── request.js
└── cookie.js
```

### `http.js`

Gestisce il server HTTP, le route e le risposte:

```js
import { res, route, server } from "./lizardjs/http.js";

let html = res("<h1>Hello, Lizard!</h1>");

let routes = [
    route("/", html)
];

server(routes);
```

Il progetto può essere eseguito direttamente con Node.js:

```bash
node app.js
```

### `request.js`

Contiene strumenti relativi alle risposte HTTP.

Per esempio:

```js
import { httpresponse } from "./lizardjs/request.js";

let response = httpresponse(404);

console.log(response);
```

Risultato:

```js
{
    type: 404,
    message: "Not Found"
}
```

### `cookie.js`

Fornisce funzioni per gestire i cookie:

```js
import {
    setCookie,
    getCookie,
    deleteCookie
} from "./lizardjs/cookie.js";
```

Esempio:

```js
setCookie(response, "session", "abc123", {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    maxAge: 3600
});
```

Per leggere un cookie:

```js
let session = getCookie(request, "session");
```

Per eliminarlo:

```js
deleteCookie(response, "session");
```

## 🚀 Obiettivo

L'obiettivo di LizardJS è fornire un ecosistema JavaScript **semplice, modulare e completo** per sviluppare applicazioni web full-stack senza dover costruire ogni componente da zero.

LizardJS vuole rimanere vicino a JavaScript e Node.js, offrendo API intuitive senza nascondere completamente il funzionamento sottostante.

## 🛣️ Roadmap

La roadmap è ancora in fase di definizione.

Possibili funzionalità future:

* [ ] Gestione delle sessioni
* [ ] Autenticazione
* [ ] Database
* [ ] File statici
* [ ] Middleware
* [ ] API REST
* [ ] Template engine
* [ ] Utility per il frontend
* [ ] Altri strumenti HTTP

## 📄 Licenza

LizardJS è distribuito sotto **MIT License**.

Vedi il file [`LICENSE`](LICENSE) per il testo completo della licenza.

---

**LizardJS** 🦎
*Build the web with JavaScript.*
