
// import { charmander } from './bases/03-classes';
// import { charmander } from './bases/04-injection';
import { charmander } from './bases/05-decorators';

import './style.css'


const app = document.querySelector<HTMLDivElement>('#app')!;

app.innerHTML = `
  <div>
  
    <h1>hello ${charmander.name}</h1>
    
  </div>
`
