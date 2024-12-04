import "./App.css"
export default function Search(){
    return(
        <div id="Search" style={{display:"flex"}}>
        <img src="./src/assets/web.png" style={{width:15,height:15,justifyContent:"center",alignItems:"center",paddingTop:15,paddingLeft:15,paddingRight:15}}/>
        <input type="text" id="inp" placeholder="Search Google or type a URL"/>
        <img src="./src/assets/google-voice.png" style={{width:25,height:20,justifyContent:"center",alignItems:"center",paddingTop:13,paddingLeft:20,paddingRight:13}}/>
        <img src="./src/assets/googlescan.png" style={{width:25,height:25,justifyContent:"center",alignItems:"center",paddingTop:10,paddingRight:15}}/>
        </div>
        
    )
}