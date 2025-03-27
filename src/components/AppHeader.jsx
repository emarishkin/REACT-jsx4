import { useState } from 'react'
import logo from '/logo.png'



const AppHeader = () =>{

const [now,setNow] = useState(new Date())

setInterval(()=>setNow(new Date()),1000)

    return(
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'0 40px',borderBottom:'2px solid black'}}> 
           <div style={{display:'flex',alignItems:'center'}}>
            <img style={{width:60,height:60}} src={logo} alt="" />
            <h1 style={{marginLeft:'10px'}}>Мой Сайт</h1>
           </div>
            <span style={{fontSize:'50px'}}>{now.toLocaleTimeString()}</span>
        </div>
    )
}
    export default AppHeader