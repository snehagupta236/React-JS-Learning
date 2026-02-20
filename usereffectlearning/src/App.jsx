import React, { useEffect, useState } from 'react'

const App = () => {

  const [a, setA] = useState(0)
  const[b,setB] = useState(0)

  function aChanging(){
    console.log("A badal rha hai");
  }
  function bChanging(){
    console.log("B badal rha hai");
  }
  useEffect(function(){
    aChanging()
  },[a])
   useEffect(function(){
    bChanging()
  },[b])


  return (
    <div>
      <h1>A is {a}</h1>
      <h1>B is{b}</h1>
      <button onClick={()=>{
        setA(a+1)
      }}>change A</button>
      <button onClick={()=>{
        setB(b-1)
      }}>change B</button>
    </div>
  )
}

export default App