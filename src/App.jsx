
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useState } from 'react'
function App() {
    const [age,setAge]=useState(0)
 
  return (
    <>  <h2>{age} </h2>
        <button onClick={ ()=>setAge(age-1) } style={{backgroundColor:"Red",color:'white'}}> Decrese Age </button>
        <button onClick={()=>setAge(age+1)} style={{backgroundColor:"Green",color:"white"}}> Increse Age </button>
    </>
  )
}


export default App;
