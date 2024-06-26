import { useState } from 'react'


function App() {
  const [length, setLength] = useState(8)

  return (
    <>
    <h1 className='mt-10 text-4xl'>Password Generator</h1>
    <div className='rounded-lg mx-auto my-5 w-2/5 h-auto bg-gradient-to-r from-slate-900 to-slate-700 flex flex-wrap flex-col ali justify-between py-8 '>
    <div className='w-auto flex justify-center mb-4 '>
      <input className='text-gray-950 w-80 px-2 py-1 rounded-lg rounded-r-none outline-none' type="text" name="" id="" placeholder='create new password' />
      <button className='bg-black px-2 rounded-lg rounded-l-none hover:bg-blue-500 hover:text-black duration-200'>copy</button>
    </div>
    <div className='flex justify-center gap-4'>
      <input onChange=''type="range" name="" id="slider" />
      <label htmlFor="slider">Length: {length}</label>
      <input type="checkbox" name="" id="chars" />
      <label htmlFor="chars">Characters</label>
      <input type="checkbox" name="" id="chars" />
      <label htmlFor="chars">Characters</label>
    </div>
    </div>
    </>
  )
}

export default App
