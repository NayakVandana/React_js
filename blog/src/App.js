//controll component state thi controll thai 6e function and class ma same 6e

import './App.css';
import React,{useState} from 'react'
function App() {
  const [val,setVal]=useState("")

   return (
    <div className="App">
      <h1>Controlled Component </h1>
      <input type="text" value={val} onChange={(e)=>setVal(e.target.value)} />
   <h1>{val}</h1>
    </div>
  );

}
export default  App;