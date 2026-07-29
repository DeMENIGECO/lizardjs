# Contributing to LizardJS 🦎

Grazie per il tuo interesse nel contribuire a **LizardJS**!

LizardJS è una libreria **open source full-stack per JavaScript e Node.js**. Bug fix, nuove funzionalità, miglioramenti alla documentazione e suggerimenti sono tutti benvenuti.

## 📖 Prima di iniziare

Prima di contribuire, ti consigliamo di leggere:

* la [documentazione di LizardJS](https://lizard.js.org/)
* le [issue aperte](https://github.com/DeMENIGECO/lizardjs/issues)
* le [pull request aperte](https://github.com/DeMENIGECO/lizardjs/pulls)

Controlla anche che la tua idea o il tuo bug non siano già stati segnalati.

---

## 🍴 Fork del repository

Per iniziare a lavorare sul progetto, crea un fork del repository:

```bash
git clone https://github.com/DeMENIGECO/lizardjs.git
```

Entra nella directory:

```bash
cd lizardjs
```

Puoi quindi creare un branch dedicato alla tua modifica:

```bash
git checkout -b my-change
```

È consigliato utilizzare un nome descrittivo per il branch, ad esempio:

```text
fix-cookie-parser
add-http-feature
docs-api
```

---

## 💻 Sviluppare LizardJS

LizardJS è scritto in JavaScript ed è progettato per essere eseguito con Node.js.

La struttura principale del repository è:

```text
lizardjs/
├── http.js
├── request.js
└── cookie.js
```

I moduli principali devono rimanere semplici e indipendenti.

Quando aggiungi una nuova funzionalità, cerca di mantenerla coerente con lo stile e l'architettura già utilizzati nel progetto.

---

## 🧪 Testa sempre le modifiche

Prima di aprire una Pull Request, assicurati che il codice funzioni realmente.

Esegui gli esempi e i test necessari con Node.js e verifica che:

* non vengano introdotti errori;
* le API esistenti continuino a funzionare;
* il comportamento delle funzionalità già presenti non cambi involontariamente;
* la nuova funzionalità funzioni come previsto.

Se la modifica riguarda una funzionalità esistente, prova anche i casi normali e quelli di errore.

---

## 🐛 Segnalare un bug

Hai trovato un bug?

Apri una **Bug Report** tramite GitHub Issues.

Includi più informazioni possibili, ad esempio:

* versione di LizardJS;
* versione di Node.js;
* sistema operativo;
* codice necessario per riprodurre il problema;
* comportamento atteso;
* comportamento ottenuto;
* eventuale errore o stack trace.

Per i crash, utilizza invece il template **Crash Report**.

---

## 💡 Proporre una funzionalità

Hai un'idea per migliorare LizardJS?

Apri una **Feature Request**.

Spiega:

1. cosa vorresti aggiungere;
2. quale problema risolverebbe;
3. come immagini che dovrebbe essere utilizzata;
4. eventuali alternative che hai già provato.

Se possibile, includi un esempio di API.

---

## 🔀 Pull Request

Quando hai terminato le modifiche, fai commit e push del tuo branch:

```bash
git add .
git commit -m "Add my change"
git push origin my-change
```

Successivamente apri una Pull Request verso il repository principale di LizardJS.

### Una buona Pull Request dovrebbe

* avere un titolo chiaro;
* descrivere cosa è stato modificato;
* spiegare perché è stata fatta la modifica;
* includere eventuali test effettuati;
* modificare solamente ciò che è necessario.

Evita Pull Request enormi che modificano molte parti del progetto senza una ragione precisa.

---

## 📝 Commit

Utilizza messaggi di commit brevi e descrittivi.

Esempi:

```text
Add cookie deletion
Fix HTTP response handling
Improve request module
Update documentation
```

Evita messaggi poco descrittivi come:

```text
fix
update
stuff
changes
```

---

## 📚 Documentazione

La documentazione ufficiale di LizardJS si trova su:

**https://lizard.js.org/**

Se aggiungi o modifichi un'API, ricordati di aggiornare anche la documentazione quando necessario.

La documentazione deve riflettere il comportamento reale di LizardJS.

Non documentare funzionalità che non sono ancora implementate.

---

## 🎨 Stile del codice

Cerca di mantenere il codice:

* semplice;
* leggibile;
* coerente con il codice esistente;
* facilmente comprensibile;
* senza complessità non necessaria.

Evita di aggiungere dipendenze quando una funzionalità può essere implementata utilizzando le API native di Node.js.

---

## 🚫 Cosa non fare

Non inviare Pull Request che:

* introducono codice intenzionalmente malevolo;
* modificano funzionalità senza una motivazione;
* rompono API esistenti senza necessità;
* includono file generati o personali;
* modificano grandi parti del progetto senza motivo;
* aggiungono funzionalità non documentate quando la documentazione è necessaria.

---

## 🦎 Prima di inviare una Pull Request

Controlla questa checklist:

* [ ] Ho testato le mie modifiche.
* [ ] Non ho introdotto errori.
* [ ] Le funzionalità esistenti continuano a funzionare.
* [ ] Ho aggiornato la documentazione se necessario.
* [ ] Il codice è coerente con il progetto.
* [ ] Il commit ha un messaggio descrittivo.
* [ ] La Pull Request descrive chiaramente le modifiche.

---

## 📄 Licenza

Contribuendo a LizardJS accetti che il tuo contributo venga distribuito secondo la licenza utilizzata dal progetto.

Consulta il file [`LICENSE`](LICENSE) per maggiori informazioni.

---

## 🌐 Link utili

* **Documentazione:** https://lizard.js.org/
* **Repository:** https://github.com/DeMENIGECO/lizardjs
* **Issues:** https://github.com/DeMENIGECO/lizardjs/issues
* **Pull Requests:** https://github.com/DeMENIGECO/lizardjs/pulls

Grazie per aver contribuito a **LizardJS**! 🦎💚
