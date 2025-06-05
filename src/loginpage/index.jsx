import './index.css'
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage=()=>{

    const result=useSelector(state=>{
        return state.user
    })

    const [password,setPassword]=useState("")

    const [status,setStatus]=useState(false)

    const nav=useNavigate()

    const loginfun=(e)=>{
        e.preventDefault()
        result.map(item=>{
            if (item.password==password){
                nav("/finalpage")
            }
            else{
               setStatus(true)
            }
        })
    }

    return(
        <div className='main4'>
           <div className='main5'>
              <h1 className='head2'>Signin to your <br/>PopX account</h1>
              <p>Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit,</p>
              <form onSubmit={loginfun}>
                <fieldset>
                    <legend>Email Address</legend>
                    <input className='inputname' type='email' required/>
                </fieldset>
                <fieldset>
                    <legend>Password</legend>
                    <input className='inputname' type='password' onChange={(e)=>{setPassword(e.target.value)}} required/>
                </fieldset>
                 {status?<p className='status'>Sorry, Password is wrong</p>:<></>}
                <button type='submit' className='button'>Login</button>
              </form>
           </div>
        </div>
    )
}

export default LoginPage;