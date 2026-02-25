import React from 'react'

const App = () => {
  const SubmitHandler=(e)=>{//form handling done page does not need to reload
    e.preventDefault()
    console.log("form submitted");
    
  }
  return (
    <div onSubmit={(e)=>{
      SubmitHandler(e)
    }}>
      <form>
        <input type="text" placeholder='enter your name' />
        <button>submit</button>
      </form>
    </div>
  )
}

export default App