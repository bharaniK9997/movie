import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axiox from 'axios'
import { useNavigate } from 'react-router-dom'



function Register() {

        const [name,setName]=useState()
        const [email,setEmail]=useState()
        const [password,setPassword]=useState()
        const navigate=useNavigate()



        const handleSubmit=(e)=>{
                 e.preventDefault()
                // console.log(e);
               
                axiox.post('http://localhost:3001/register',{name,email,password}).then(
                    result=> {console.log(result)
                    navigate('/login')
                }
                ).catch(
                    err=>console.log(err)
                )
            
        }



  return (
    <>
    <div className='signupcolor'>
        <div className='signup1'>
        
            <div className='signup2'>
                <h2 className='design'>Register</h2>
                <form onSubmit={handleSubmit}>
                <div className='signup3'>
                        <label htmlFor="email" className='margin'>Name :</label>
                        <input type='text' placeholder='Enter Name' autoComplete='off' name="email" required  onChange={(e)=>setName(e.target.value)}></input>
                    </div>
                    <div className='signup3'>
                        <label htmlFor='email' className='margin'>Email :</label>
                        <input type='email' placeholder='Enter Email' autoComplete='off' name="email" required onChange={(e)=>setEmail(e.target.value)}></input>
                    </div>
                    <div className='signup3'>
                        <label htmlFor='email1' className='margin'>Password:</label>
                        <input type='password' placeholder='Enter Password' autoComplete='off' name="password" required onChange={(e)=>setPassword(e.target.value)}></input>
                    </div>
                    <button type='submit' className='register'>SignUP</button>
                </form>
                <hr className='hrlinereg'></hr>
                <div className='login'>Already Have an account? <Link to='/login'  className='login1'>Login</Link></div>
                </div>
            </div>
            </div>
    </>
  )
}

export default Register