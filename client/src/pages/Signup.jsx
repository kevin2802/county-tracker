import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import{set}from 'mongoose';


export default function Signup() {
    const [formData,setFormData] = useState({})
    const [error,setError]=useState(false);
    const [loading,setLoading]=useState(false);

    const handleChange=(e)=>{//need to save changes in state
        setFormData({...formData,[e.target.id]:e.target.value});
    }
    const handleSubmit = async (e)=>{
        e.preventDefault();
        try {
            setLoading(true);
            setError(false);
            const res = await fetch('/server/auth/signup',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json',
                },
                body: JSON.stringify(formData)
            });
            const data = await res.json();
            console.log(data);
            setLoading(false);
            //when using fetch to show error need to do this:
            if(data.success === false){
                setError(true);
                return;
            }
        }catch(error){
            setLoading(false);
            setError(true);

        }
        //since we are using fetch need to add method headers and body
        
    };
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign-Up</h1>
      <form onSubmit={handleSubmit}className='flex flex-col gap-4'>
        <input type= "text" placeholder = 'Username' id = 'username' className='bg-slate-100 p-3 rounded-lg' onChange={handleChange}/>
        <input type= "email" placeholder = 'Email' id = 'email' className='bg-slate-100 p-3 rounded-lg' onChange={handleChange}/>
        <input type= "password" placeholder = 'Password' id = 'password' className='bg-slate-100 p-3 rounded-lg' onChange={handleChange}/>
        <button disabled = {loading} className = 'bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-85' >{loading ? 'Loading...':'Sign Up'}</button>
      </form>
      <div className='flex gap-2 mt-5'>
        <p>Have an account?</p>
        <Link to='/sign-in'>
        <span className='text-blue-500'>Sign in</span>
        </Link>
      </div>
      <p className='text-red-700 mt-5'>{error && "Something went wrong! Try a different username/email:("}</p>
    </div>

  )
}
