import './index.css'

import { useSelector } from 'react-redux';

const FinalPage=()=>{

    const result=useSelector(state=>{
        return state.user
    })

    return(
        <div className='main7'>
            <div>
                <h1 className="head3">Account Settings</h1>
                <div className='final'>
                    <img className='image' src='https://images.unsplash.com/photo-1631949136465-af801b6c5244?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YnVkZGhhfGVufDB8fDB8fHww'/>
                  <div>{
                     result.map(item=>(
                        <div>
                            <h1 className='head4'>{item.name}</h1>
                            <h1 className='head4'>{item.email}</h1>
                        </div>
                     ))
                    }
                  </div>
                </div>
                  <p>Lorem ipsum dolor sit amet,consectetur adipiscing<br/> elit,
                     Sed Diam Nonumy Eirmod Tempor Invidunt Ut<br/>
                     Labore Et Dolore Magna Aliquyam Erat, Sed Diam</p>
                     <hr/>
            </div>
        </div>
    )
}

export default FinalPage;