import './index.css'

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { add } from '../reduxpage';
import { useNavigate } from 'react-router-dom';

const AccountPage=()=>{

     const [data,setData]=useState({
        name:"",
        email:"",
        password:""
     })

     const nav=useNavigate()

     const dispatch=useDispatch()


     const alldata=(e)=>{
        const {name,value}=e.target
        setData({...data,[name]:value})
     }

    const submitfun=(e)=>{
        e.preventDefault()
        dispatch(add(data))
        nav("/loginpage")
    }

    return(
        <div className='main3'>
            <div className='main5'>
                <h1 className='head'>Create your<br/>PopX account</h1>
                <form onSubmit={submitfun}>
                    <fieldset>
                        <legend className='name'>Full Name<span>*</span></legend>
                        <input className='inputname' type='name' name="name" onChange={alldata} required/>
                    </fieldset>
                    <fieldset>
                        <legend className='number'>Phone number<span>*</span></legend>
                        <input className='inputname' type='name' required/>
                    </fieldset>
                    <fieldset>
                        <legend>Email address<span>*</span></legend>
                        <input className='inputname' type='email' name='email' onChange={alldata} required/>
                    </fieldset>
                    <fieldset>
                        <legend>Password<span>*</span></legend>
                        <input className='inputname' type='password' name='password' onChange={alldata} required/>
                    </fieldset>
                    <fieldset>
                        <legend>Company name</legend>
                        <input className='inputname' type='name'/>
                    </fieldset>
                    <h1 className='agency'>Are you an Agency?<span>*</span></h1>
                    <div>
                        <input id='radio1' type='radio' name='radio' required/><label className='radio' htmlFor='radio1'>Yes</label>
                        <input id='radio2' type='radio' name='radio' required/><label htmlFor='radio2'>No</label>
                    </div>
                    <button type='submit' className='button'>Create Account</button>
                </form>
            </div>
        </div>
    )
}

export default AccountPage;