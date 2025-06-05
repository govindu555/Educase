import { Link } from 'react-router-dom';
import './index.css'

const HomePage=()=>{
    return(
        <div className="main">
            <div className="main2">
                <h1 className='head'>Welcome to PopX</h1>
                <p>Lorem ipsum dolor sit amet,</p>
                <p>consectetur adipiscing elit,</p>
                <div><Link to="/accountpage"><button className='b1'>Create Account</button></Link></div>
                <div> <button className='b2'>Already Registered?Login</button></div>
                </div>
        </div>
    )
}

export default HomePage;