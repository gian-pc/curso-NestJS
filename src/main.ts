import { pokemon} from './bases/02-objects';
import './style.css'


const app = document.querySelector<HTMLDivElement>('#app')!;

app.innerHTML = `
  <div>
  
    <h1>hello ${pokemon.name}</h1>
    
  </div>
`
