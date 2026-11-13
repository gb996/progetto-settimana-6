// Atelier — Week Project Settimana VI
//
// Aggiungi qui il codice JavaScript se serve.
// Per la Versione Base spesso non serve niente: tutto si fa in HTML+SCSS.
// Per le versioni Intermedia e Avanzata: filtri lavori, toggle tema, validazione form.


/* tema scuro*/
  document.addEventListener('DOMContentLoaded', function () {
  const toggleBtn = document.getElementById('toggle-tema');
  const htmlEl = document.documentElement;

  // Parte dalla preferenza di sistema (cambia in 'light' se vuoi un default fisso)
  const preferenzaSistema = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const temaIniziale = preferenzaSistema ? 'dark' : 'light';

  applicaTema(temaIniziale);

  toggleBtn.addEventListener('click', function () {
    const temaAttuale = htmlEl.getAttribute('data-bs-theme');
    const nuovoTema = temaAttuale === 'dark' ? 'light' : 'dark';
    applicaTema(nuovoTema);
  });

  function applicaTema(tema) {
    htmlEl.setAttribute('data-bs-theme', tema);
    toggleBtn.textContent = tema === 'dark' ? 'Tema chiaro' : 'Tema scuro';
  }
});
