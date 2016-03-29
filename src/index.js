const handlers = {};
let count = 0;

export default function scriptHandler(type, handler) {
  (handlers[type] = handlers[type] || []).push(handler);
  count++;

  if (count === 1) window.addEventListener('load', load);

  console.log(`Registered ${type}`);
}

function load() {
  const scripts = document.getElementsByTagName('script');

  Array.prototype.forEach.call(scripts,
    script => (handlers[script.type] || []).forEach(handler => handler(script.innerHTML, script)));
}