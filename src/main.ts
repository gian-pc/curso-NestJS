import { pokemons} from './bases/02-objects';
import './style.css'


const app = document.querySelector<HTMLDivElement>('#app')!;

app.innerHTML = `
  <div>
  
    <h1>hello ${pokemons.join(',')}</h1>
    
  </div>
`
