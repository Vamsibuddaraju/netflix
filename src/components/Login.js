import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
  const [isSignInToggle,setIsSignInToggle] = useState(true);
  const changePage = () => {
    setIsSignInToggle(!isSignInToggle);
  }
  return (
    <div className='relative'>
        <Header />
        <div>
          <img src='https://assets.nflxext.com/ffe/siteui/vlv3/655a9668-b002-4262-8afb-cf71e45d1956/5ff265b6-3037-44b2-b071-e81750b21783/IN-en-20240715-POP_SIGNUP_TWO_WEEKS-perspective_WEB_c6d6616f-4478-4ac2-bdac-f54b444771dd_large.jpg' alt='bg' />
        </div>
        <div className='w-4/12 bg-black flex flex-col absolute top-1/4 h-2/4 left-1/3 bg-opacity-85' >
          <form>
            <p className='text-3xl text-white ml-16 mt-4'>{isSignInToggle?"Sign In":"Sign Up"}</p>
            {!isSignInToggle&&<input placeholder='FullName' className='px-3 w-80 ml-16 mt-10 py-2 bg-gray-600 border rounded-md'></input>}
            <input placeholder='Email' className='px-3 w-80 ml-16 mt-4 mb-3 py-2 bg-gray-600 border rounded-md'></input>
            <input placeholder='Password' className='px-3 w-80 ml-16 mb-3 py-2 bg-slate-600 border rounded-md'></input>
            <button className='w-80 ml-16 bg-red-700 text-xl p-2 text-white border rounded-md'>{isSignInToggle?"Sign In":"Sign Up"}</button>
            <p onClick={changePage} className='text-white ml-16 mt-8 cursor-pointer'>{isSignInToggle?"New to Netflix? Sign up now.":"Already registered, Sign In"}</p>
          </form>
        </div>
    </div>
  )
}

export default Login