import './index.css'

const AccountPage=()=>{
    return(
        <div className='main3'>
            <div>
                <h1 className='head'>Create your</h1>
                <h1 className='head'>PopX account</h1>
                <form>
                    <fieldset>
                        <legend className='name'>Full Name<span>*</span></legend>
                        <input className='inputname' type='name' required/>
                    </fieldset>
                    <fieldset>
                        <legend className='number'>Phone number<span>*</span></legend>
                        <input className='inputname' type='name' required/>
                    </fieldset>
                    <fieldset>
                        <legend>Email address<span>*</span></legend>
                        <input className='inputname' type='email' required/>
                    </fieldset>
                    <fieldset>
                        <legend>Password<span>*</span></legend>
                        <input className='inputname' type='password' required/>
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