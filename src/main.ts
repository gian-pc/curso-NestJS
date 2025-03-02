import { age, name } from './bases/01-types'
import './style.css'


const app = document.querySelector<HTMLDivElement>('#app')!;

app.innerHTML = `
  <div>
  
    <h1>hello ${name} ${age}</h1>
    
  </div>
`
