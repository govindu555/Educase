import './index.css'

const LoginPage=()=>{
    return(
        <div className='main4'>
           <div className='main5'>
              <h1 className='head2'>Signin to your <br/>PopX account</h1>
              <p>Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit,</p>
              <form>
                <fieldset>
                    <legend>Email Address</legend>
                    <input className='inputname' type='email' required/>
                </fieldset>
                <fieldset>
                    <legend>Password</legend>
                    <input className='inputname' type='password' required/>
                </fieldset>
                <button type='submit' className='button'>Login</button>
              </form>
           </div>
        </div>
    )
}

export default LoginPage;