import React from 'react'

const LoginPage = () => {
  const handleclick =()=>{
   alert('Welcome to Socialpedia')
  }
  return (
    <>
    <h2 className='p-5 text-3xl font-semibold bg-slate-100 text-cyan-300 text-center'>Socialpedia</h2>
    <div className='mx-auto mt-5 p-4 w-2/3 rounded-md bg-cyan-200'>
     <p className='text-slate-500 font-medium text-4xl'>
       Welcome To Socialpedia, the social media for social Gatther
     </p>
     <div className='bg-cyan-200 p-3 m-4 mt-8'>
      <form>
        <input type='email' required className='p-3 mt-4 rounded-xl text-lg w-full font-medium border-none' placeholder='Enter Your Email' />
        <input type='password' required className='p-3 mt-4 rounded-xl text-lg w-full font-medium border-none' placeholder='Enter Your Password' />
      </form>
      <button type='submit' onClick={()=>handleclick()} className='p-3 mt-12 w-full text-center bg-cyan-600 text-xl text-white font-semibold rounded-2xl'>Sign In</button>
     <p className=' p-2 hover:text-red-500'>Don't have account?Sign up here</p>
     </div>
    </div>
    </>
  )
}

export default LoginPage