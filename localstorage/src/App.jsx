import React from 'react'

const App = () => {
  const user={ 
    username: 'sneha', 
    age: 21, 
    city:Bharatpur 

  } 
  localStorage.setItem('user', JSON.stringify(user)) 
  const newuser = JSON.parse(localStorage.getItem('user')); console.log(newuser);
  return (
    <div>App</div>
  )
}

export default App