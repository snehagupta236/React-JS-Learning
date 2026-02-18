import  { useState } from 'react'

const App = () => {

  const [title,setTitle] = useState('')
  const [details,setDetails] = useState('')
  const [task, settask] = useState([])

  const submitHandler = (e)=>{
    e.preventDefault()
   
    const copyTask = [...task];
    copyTask.push({title,details})
    settask(copyTask)
    


    setTitle('')
    setDetails('')
    
  }
  const DeleteNote = (idx)=>{
    const CopyTask = [...task];
    CopyTask.splice(idx,1);
    settask(CopyTask);

    
  }
  return (
    <div className='h-screen lg:flex bg-gray-500 text-shadow-indigo-300 '> 
      <form onSubmit={(e)=>{ 
        submitHandler(e)
      }} className="flex flex-col gap-4 lg:w-1/2 items-start  p-10">
        <h1 className='text-3xl font-bold'>Add Notes</h1>
        { /* //phela input */ }
        <input type="text" 
        placeholder='Enter notes heading'
         className='px-5 py-2 font-medium w-full border-2 outline-none rounded ' 
         value={title}
         onChange = {(e)=>{
          setTitle(e.target.value)
         }}
         />

         {/* /Detailed input */}
         <textarea type="text" 
        placeholder='Write details'
         className='px-5 py-2 w-full font-medium h-32 flex items-start flex-row border-2 outline-none rounded ' 
         value={details}
         onChange = {(e)=>{
          setDetails(e.target.value)
         }} />
         
         <button className='bg-black text-white active:bg-blue-200 font-medium px-5 py-2 w-full outline-none rounded'>Add Note</button>
        

      </form>
      <div className=' lg:w-1/2 lg:border-l  p-10'>
          <h1 className='text-4xl font-bold'>Recent  Notes</h1>
          <div className='flex gap-5 flex-wrap items-start justify-start h-[90%] overflow-auto mt-5'>
          {task.map(function(elem,idx){
            return <div key={idx} className=" flex justify-between items-start flex-col mt- relative h-52 w-40 rounded-2xl pt-7 p-4 bg-cover text-black bg-[url('https://tse1.mm.bing.net/th/id/OIP.icSiCVX_KaMMEe4OWRadYgHaJl?rs=1&pid=ImgDetMain&o=7&rm=3')]">
              
              <div>
                <h3 className=' leading-tight text-lg  font-bold  break-all'>{elem.title}</h3>
              <p className=' mt-4 leading-tight font-semibold text-xs  text-amber-700 break-all'>{elem.details}</p>
              </div>
              <button onClick= {()=>{
                DeleteNote(idx)
              }} className= 'bg-red-700 w-full rounded-full py-1  text-xs text-white font-bold'>Delete</button>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default App