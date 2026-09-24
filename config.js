/**
 * CONFIG.JS - Parametri di collegamento al backend Apps Script.
 *
 * Compila questi due valori DOPO aver pubblicato il progetto Apps Script come Web App
 * (vedi README.md, sezione "Deploy backend"):
 *
 * 1) API_URL: l'URL "/exec" mostrato da Apps Script al termine della pubblicazione,
 *    del tipo https://script.google.com/macros/s/AKfycb.../exec
 *
 * 2) APP_KEY: DEVE essere identica, carattere per carattere, alla costante APP_KEY_
 *    definita in Auth.js sul backend. Non è un segreto "forte" (è visibile a chiunque
 *    ispezioni questo file su GitHub), ma filtra il traffico anonimo/automatico prima
 *    ancora della verifica Email+OTP. Usa una stringa lunga e casuale.
 */
window.MAGAZZINO_CONFIG = {
  API_URL: 'https://script.google.com/macros/s/AKfycbySvaW-bXt7iwjrqRdjiq4aKlS83LbqdPkEpwpdB1z1MjJ6dC7sRTiAHDhaczwCRRSp/exec',
  APP_KEY: 'ae251859b38c75425ea019a57e5b52ed24b76525a4526fab'
};
