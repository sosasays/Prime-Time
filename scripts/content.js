const injectedTime = document.createElement('div');
injectedTime.setAttribute('class', 'injectTime');
injectedTime.innerText = '00:00:00';

const body = document.querySelector('body');
body.appendChild(injectedTime);