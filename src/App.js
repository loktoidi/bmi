
import './App.css';
import { useState } from 'react'

function App() {
  const [height,setHeight] = useState('')
  const [weight,setWeight] = useState('')
  const [bmi,setBmi] = useState(0)

function calculate(e) {
  e.preventDefault()
  const conversion = weight / (height * height)
  setBmi(conversion)

}

  return (
    
   <form onSubmit={calculate}>
    <h3>bmi calculator</h3>
    <div>
      <label>height</label>
      <input type="number" value={height} onChange={e => setHeight(e.target.value)} />
    </div>

    <div>
      <label>weight</label>
      <input type="number" value={weight} onChange={e => setWeight(e.target.value)} />
    </div>

    <button type="button" onClick= {calculate}>calculate</button>
    
    <div>
      <label>bmi on </label>
      <output>{bmi.toFixed(1)}</output>
    </div>
   
   </form>
  );
}

export default App;