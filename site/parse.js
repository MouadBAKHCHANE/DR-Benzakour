const fs = require('fs');
const html = fs.readFileSync('medenic.html', 'utf8');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const dom = new JSDOM(html);
const document = dom.window.document;

// Log the outerHTML of the appointment section or container
const appointmentNode = Array.from(document.querySelectorAll('section, div')).find(el => {
  return el.textContent.includes('Timely appointments') && el.className.includes('appointment');
});

if (appointmentNode) {
  fs.writeFileSync('appointment-section.html', appointmentNode.outerHTML);
  console.log('Saved to appointment-section.html');
} else {
  console.log('Not found');
}
