import { SpaRounded } from '@mui/icons-material'
import React from 'react'

const Footer = () => {
  return (
    <div style={{
      display:"flex",
      justifyContent:"space-between",
      color:"gray",
      flexDirection:"row",
      alignItems:"center",
      padding:"1.25rem",
      position:"fixed",
      bottom:"0",
      left:0,
      right:0,
      backgroundColor:"#000"
    }}>
     <span>Youtube-clone</span><span>Built with &#x2661; by Rohit Pandey </span><span>Copyright &copy; 2023
     </span>
    </div>
  )
}

export default Footer