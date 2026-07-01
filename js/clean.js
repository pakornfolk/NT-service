const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// replace links
html = html.replace(/href="#booking"/g, 'href="booking.html"');

// remove CSS
const cssStart = html.indexOf('  /* ─── BOOKING FORM ─── */');
const cssEnd = html.indexOf('</style>');
if (cssStart !== -1 && cssEnd !== -1) {
  html = html.substring(0, cssStart) + html.substring(cssEnd);
}

// remove HTML section
const htmlStart = html.indexOf('<!-- ─── BOOKING FORM ─── -->');
const htmlEndStr = '<section id="Day">';
const htmlEnd = html.indexOf(htmlEndStr);
if (htmlStart !== -1 && htmlEnd !== -1) {
  html = html.substring(0, htmlStart) + html.substring(htmlEnd);
}

// remove JS section
const jsStart = html.indexOf('<!-- Firebase SDK -->');
const jsEnd = html.indexOf('</body>');
if (jsStart !== -1 && jsEnd !== -1) {
  html = html.substring(0, jsStart) + html.substring(jsEnd);
}

fs.writeFileSync('index.html', html);
console.log('Cleaned index.html');
