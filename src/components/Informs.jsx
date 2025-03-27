
const Inform = ({info}) =>{
    return(
    <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
       {info.map(inf=>(
        <div style={{width:'800px',fontSize:20,marginBottom:25}} key={inf.title}>
           <li><strong>{inf.title}</strong> {inf.descriptions}</li>
        </div>
       ))}
    </div>
    )
}

export default Inform