# progetto-settimana-6

Atelier — Studio di architettura

Landing page per uno studio di architettura, basata su Bootstrap 5.3.3.

Struttura
Header: navbar sticky con logo, menu (Studio/Servizi/Contatti) e due toggle: tema chiaro/scuro e variante daltonismo (deuteranopia)
#studio: sezione hero a tutta altezza (70vh) con titolo, sottotitolo e CTA “Inizia progetto”
#servizi: griglia di 6 card (Interior design, Ristrutturazioni, Progettazione residenziale, Spazi commerciali, Bioarchitettura, Consulenza) con effetto hover
#contatti: form Bootstrap (nome, email, select tipo progetto, messaggio) su sfondo chiaro dedicato
Footer: info studio, link di navigazione e contatti
Funzionalità JS
Tema chiaro/scuro: rileva la preferenza di sistema all’avvio, poi toggle manuale tramite data-bs-theme su <html>(extra)
Variante deuteranopia: toggle indipendente che aggiunge/rimuove data-theme="deuteranopia" sul <body>, applicando una palette ad alto contrasto pensata per il daltonismo rosso-verde(extra)
In via di sviluppo per aggiungere altri temi daltonismo

CSS
Override mirati delle classi Bootstrap (.navbar, .card, .form-control, ecc.) invece di classi custom, per sfruttare la coerenza del framework
Tre livelli di tema sovrapponibili: default → scuro → deuteranopia (quest’ultimo con palette dedicata 
#0072B2/
#E69F00/
#D55E00, colori sicuri per il daltonismo)


Dipendenze
Bootstrap CSS/JS via CDN (jsdelivr)
File locali: assets/css/style.css, assets/js/script.js