import { useState } from "react"
import { Button } from "@mui/material";
export default function Addshortcut(){
    const [ontrue,setontrue]=useState(false)
    function Addshort(){
        setontrue(ontrue=>!ontrue)
    }
    return <>
    <div style={{display:"flex",flexDirection:'column',justifyContent:'center',alignItems:'center',marginTop:30,color:'white'}}>
    {
        ontrue&&
        <div style={{background: 'rgba(81, 67, 70, 1.00)',paddingLeft:20,paddingRight:20,width:512,height:280.6,borderRadius:15,display:"flex",flexDirection:"column"}}>
        <h3>Add shortcut</h3>
        <label htmlFor="name" style={{marginTop:20}}>Name</label>
        <input type="text" style={{width:475,height:26}} placeholder="" />
        <label htmlFor="name" style={{marginTop:20}}>URL</label>
        <input type="text" style={{width:475,height:26}}  placeholder=""/>
        <div style={{display:"flex",flexDirection:"row",marginTop:30,justifyContent:"flex-end"}}>
        <Button variant="outlined" onClick={Addshort} style={{marginRight:10,borderRadius:50,color:'white'}}>Cancel</Button>
        <Button variant="outlined" onClick={Addshort} style={{marginRight:10,borderRadius:50,color:'white'}}>Done</Button>
        </div>

        </div>
    }
    {
       !ontrue &&
       <div> <img src="./src/assets/add.png" onClick={Addshort} style={{height:40,width:40,background:'white',borderRadius:50}}/>
       <p>Add shortcut</p>
       </div>
    }
   
   
      
    </div>
    </>
}
