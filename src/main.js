import './style.css'
import header from './html/header.html?raw'
import footer from './html/footer.html?raw'
import javascriptLogo from './javascript.svg'
import egorLogo from '/ico.webp'
import { setupCounter } from './js/counter.js'

document.querySelector('#header').innerHTML = header

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://egor.life/" target="_blank">
      <img src="${egorLogo}" class="logo" alt="Egor logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hi dev <3 </h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      use hover
    </p>
  </div>
`

document.querySelector('#footer').innerHTML = footer

setupCounter(document.querySelector('#counter'))