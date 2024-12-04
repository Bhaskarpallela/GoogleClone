import { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import './App.css'
import Nav from "./Nav"
import Addshortcut from './Addshortcut'
import Search from './Search';

function App() {
 
  return (
    <>
    <Nav/>
     <div style={{background:'#3c3d3d',justifyContent:'center',alignItems:'center',paddingLeft:180,marginTop:100}}>
     <img src='./src/assets/Google.png' style={{}}/>
      </div>
      <div style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:50}}>
      <Search/>
      </div>
      <Addshortcut/>
      <button>customize</button>
    </>
  )
}

export default App
