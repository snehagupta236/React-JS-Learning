import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {
  const [userData, setuserData] = useState([])
  const [index, setindex] = useState(1)
  const getData = async ()=>{
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`)
    setuserData(response.data)                          
  }
  useEffect(function(){
      getData()
  },[index])

  let printUserData = <h3 className='text-gray-300 text-xs absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold'>Loading....</h3>

  if(userData.length > 0){
    printUserData  = userData.map(function(elem,idx){

         return <div key={idx}>
          <a href={elem.url} target='_blank' >
         <div className='h-40 w-44 overflow-hidden bg-white rounded-xl'>
           <img className='h-full w-full object-cover' src={elem.download_url} alt="" />
         </div>
         <h2 className='font-bold text-lg'>{elem.author}</h2>
         </a>
         </div>
    })
  }
  return (
    <div className='bg-black overflow-auto h-screen p-4 text-white'> 
            <div className='flex  flex-wrap gap-4 p-2'>
              {printUserData}
            </div>
             <div className='flex  h-[80%] justify-center gap-6 items-center p-4'>
              <button className='bg-amber-400 text-sm cursor-pointer active:scale-95 text-black rounded px-4 py-2 font-semibold'
              onClick={()=>{
                if(index>1){
                  setindex(index-1)
                  setuserData([])
                }
                  
              }}
              >
                Prev
                </button>
                <h4>page {index}</h4>
              <button  className='bg-amber-400 text-sm cursor-pointer active:scale-95 text-black rounded px-4 py-2 font-semibold'
              onClick={()=>{
                 setindex(index+1)
                 setuserData([])
              }}
              >
               Next
                </button>
             </div>
    </div>
  )
}

export default App