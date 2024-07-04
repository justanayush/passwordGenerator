import { useCallback, useState,useEffect, useRef } from 'react'


function App() {
  const [length, setLength] = useState(8);
  const [isCharAllowed,setisCharAllowed] = useState(false);
  const [isNumsAllowed,setisNumsAllowed] = useState(false);
  const [password,setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let password = "";
    let passwordContent = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    
    if (isCharAllowed) {
      passwordContent += "!@#$%^&*(){}:<>?";
    }

    if (isNumsAllowed) {
      passwordContent += "0123456789";
    }

    for (let i = 1; i <= length; i++) {
        let charIndex = Math.floor((Math.random() * passwordContent.length) + 1);
        password += passwordContent[charIndex];
      }
    setPassword(password);
  },[length, isCharAllowed, isNumsAllowed , setPassword]);

 useEffect(() => {
    passwordGenerator();
    console.log(isNumsAllowed,isCharAllowed)
  }, [length, isCharAllowed, isNumsAllowed, passwordGenerator])

  const passwordRef = useRef(null);
  const copyPasswordToClipboard = useCallback(()=> {
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0, 999); <_-- can be used if there is need to select a range of text -- >
    window.navigator.clipboard.writeText(password);
  },[password])
  
  return (
    <>
    <h1 className='mt-10 text-4xl head'>Password Generator</h1>
    <div className='rounded-lg mx-auto my-5 w-2/5 h-auto bg-gradient-to-r from-slate-900 to-slate-700 shadow-2xl border-2 shadow-yellow-500 border-yellow-300 text-center flex flex-wrap flex-col ali justify-between py-8 '>

    <div className='w-auto flex justify-center mb-4 '>
      <input ref={passwordRef} readOnly value={password} className='font-semibold text-gray-950 w-80 px-2 py-1 rounded-lg rounded-r-none outline-none' type="text" name="" id="" placeholder='create new password' />
      <button onClick={copyPasswordToClipboard}className='bg-black px-2 rounded-lg rounded-l-none hover:bg-blue-500 hover:text-black duration-200'>copy</button>
    </div>

    <div className='flex justify-center gap-4'>
      <input min={6} max={18} onChange={(e) => {setLength(e.target.value)}} type="range" name="" id="slider" />
      <label htmlFor="slider">Length: {length}</label>
      <input defaultChecked={isCharAllowed} onChange={() => {setisCharAllowed((isCharAllowed) => !isCharAllowed)}} type="checkbox" name="" id="chars" />
      <label htmlFor="chars">Characters</label>
      <input defaultChecked={isNumsAllowed} onChange={() => {setisCharAllowed((isNumsAllowed) => !isNumsAllowed)}}type="checkbox" name="" id="nums" />
      <label htmlFor="nums">Numbers</label>
    </div>

    </div>
    
    </>
  )
}

export default App
