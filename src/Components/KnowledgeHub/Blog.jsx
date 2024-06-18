import React from 'react'
import { Link } from 'react-router-dom'
const Blog = () => {
  return (
    <div>
 <div style={{ position: 'relative', height: '354px', backgroundImage:`url('https://primelandindia.com/img/blog-bg.jpg')`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
      <h3 style={{
        textAlign: 'center',
        color: '#fff',
        padding: '20px',
        fontSize:"48px",
        margin: 0, 
        height: '100%', 
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        fontFamily:"Poppins,sans-serif" ,
         fontWeight:"700"
      }}>
      Blog
      </h3>

      
      <div style={{
        position: 'absolute',
        bottom: '20px', // Adjust bottom position as needed
        left: '20px', // Adjust left position as needed
        color: '#fff',
        fontSize: '16px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start', // Align items to the start (left) of the container
      }}>
       
        <Link to='/' style={{
            color:"white",
            textDecoration:"none",
          marginLeft:"200px",
          marginBottom:"-22px", 
          fontWeight:"bold"// Optional: Adjust margin between links
        }}>
          Home
        </Link>

        {/* Company Overview link */}
        <div style={{marginLeft:"300px",fontWeight:"bold"}}>
        Blog
        </div>
        
      </div>
      
    </div>
    <div style={{textAlign:"center",padding:"100px"}}>
        <h1 style={{    color: "#3a3a3a",
    fontWeight: "700"}}>Updated Soon !!</h1>
    </div>
    </div>
  )
}

export default Blog
