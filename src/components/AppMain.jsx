import Inform from "./Informs"
import { info } from "../data"
import Button from "./Button"
import { useState } from "react"
import { differences } from "../data"

const AppMain = ()=>{

const [content,setContent] = useState('нажми на кнопку')

  const handleClick = (q) => {
    return setContent(q)
  }

    return (
        <div>
            <h3 style={{textAlign:'center',fontSize:30}}>Чем мы отличаемся от других</h3>
           <Inform info={info}/>
            <h3 style={{textAlign:'center',fontSize:30}}>Наш подход к обучению</h3>
            {/* <div style={{display:'flex',alignItems:'center',gap:'30px'}}>
            <Button ClickBro={()=>handleClick('way')} />
            <Button ClickBro={()=>handleClick('easy')}/>
            <Button ClickBro={()=>handleClick('program')}/> 
            </div>
            <p style={{textAlign:'center',fontSize:20}}>{differences[content]}</p> */}
            
        </div>
    )
}
export default AppMain