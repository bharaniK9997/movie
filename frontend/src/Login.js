import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axiox from 'axios'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import {Link} from 'react-router-dom'


function Login() {

       // const [name,setName]=useState()
        const [email,setEmail]=useState()
        const [password,setPassword]=useState()
        const navigate=useNavigate()


        const handleSubmit=(e)=>{
                e.preventDefault()
                axiox.post('http://localhost:3001/login',{email,password}).then(
                    result=> {console.log(result)
                        toast(result.data);
                        if(result.data === "success"){
                            
                            navigate('/app')
                        }
                }
                ).catch(
                    err=>console.log(err)
                )
        }



  return (
    <div className='signupcolor'>
    <div className='signup1'>
            <div className='signup2'>
                <h2 className='design'>LogIn</h2>
                <form onSubmit={handleSubmit}>
                    <div className='signup3'>
                        <label htmlFor='email' className='margin'>Email</label>
                        <input type='email' placeholder='Enter Email' autoComplete='on' name="email" className='form-control rounded-0' onChange={(e)=>setEmail(e.target.value)}></input>
                    </div>
                    <div className='signup3'>
                        <label htmlFor='email' className='margin'>Password</label>
                        <input type='password' placeholder='Enter Password' autoComplete='on' name="password" className='form-control rounded-0' onChange={(e)=>setPassword(e.target.value)}></input>
                    </div>
                    <button type='submit' className='register'>Sign In</button>
                </form>
                <hr className='hrlinereg'></hr>
                <div className='login'>Don't Have an account? <Link to='/register'  className='login1'>Register</Link></div>
            </div>
        </div>
    </div>
  )
}

export default Login