import "./nav.css"
export default function Nav(){
    return(
        <>
        <div style={{display:"flex", flexDirection:"row",justifyContent:"flex-end",alignItems:"center",height:50}}>
        <ul>
      <li><a href="#">Gmail</a></li> 
      <li><a href="#">Images</a></li>
        </ul>
        </div>
        </>
    )
}