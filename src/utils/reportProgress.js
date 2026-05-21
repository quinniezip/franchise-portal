// Paste your Apps Script Web App URL here after deploying
const SHEETS_URL = 'https://script.google.com/macros/s/AKfycbzAm5y0c5ASvRAc0-BvuWGJWJ2ikz6aLOAf9l4UMDUR4ep__NyRtrBreP-1rFWM4CKTSA/exec';

export function reportProgress(data) {
  if (!SHEETS_URL) return;
  const partnerName = localStorage.getItem('partner_name') || '';
  const storeCode = localStorage.getItem('store_code') || '';
  const channels = (() => {
    try {
      return JSON.parse(localStorage.getItem('selected_channels') || '[]').join(', ');
    } catch { return ''; }
  })();

  fetch(SHEETS_URL, {
    method: 'POST',
    body: JSON.stringify({ partnerName, storeCode, channels, ...data }),
  }).catch(() => {}); // fail silently – never block the user
}
