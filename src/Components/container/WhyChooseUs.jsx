import React from 'react'

const WhyChooseUs = () => {
  return (
    <div className='maindiv' style={{backgroundColor:"blue",backgroundImage:`url("https://primelandindia.com/img/why-choose-bg.jpg")`}}>
     <div style={{display:"flex",paddingTop:"120px"}}>
     <div className='' style={{backgroundColor:"#382456",color:"white",width:"390px", height:"528px",marginLeft:"160px"}}>
<div style={{padding:'30px'}}>
<img src="https://primelandindia.com/img/home-1.png" alt="" style={{marginTop:"25px",marginLeft:"15px"}}/>
        <h3 style={{marginTop:"20px"}}>WHY PEOPLE</h3>
        <h3>CHOOSE <span style={{fontWeight:"bolder"}}>PRIMELAND</span></h3>
        <p style={{marginTop:"20px"}}>We work with a purpose and the purpose is to</p>
        <p style={{marginTop:"-15px"}}>create value for everyone.</p>
       </div>
       <div style={{paddingRight:"90px"}}>
       <button style={{height:"70px",width:"380px",backgroundColor:"#f39314",color:"white",marginRight:"100px"}}><span style={{marginRight:"200px",fontSize:"16px",fontWeight:"bold"}}>About Us</span></button>
       </div>
      </div>
    <div>
    <div className='' style={{display:"flex"}}>
         <div className='firstbox' style={{backgroundColor:"#f39314",padding:"45px"}}>
             <h1 style={{fontWeight:"700",fontSize:"30px"}}>01</h1>
              <h4 style={{fontWeight:"700",fontSize:"25px",color:"white"}}>Passion</h4>
              <p style={{fontWeight:"bold",height:"150px",width:"320px",lineHeight:"25px",fontSize:"15px",color:"white"}}>We are passionate about what we do and we believe that Real Estate Development can change the landscape of the markets and also to the people’s lives. We’re relentlessly focused on growth opportunities to create increased value for everyone.</p>
         </div>
         <div className='secondbosx'>
         <div className='firstbox' style={{backgroundColor:"white",padding:"45px"}}>
             <h1 style={{fontWeight:"700",fontSize:"30px"}}>02</h1>
              <h4 style={{fontWeight:"700",fontSize:"25px",color:"#27282c"}}>Value Creation</h4>
              <p style={{color:"#828282",fontWeight:"bold",height:"150px",width:"320px",lineHeight:"25px",fontSize:"15px"}}>We work with a purpose and the purpose is to create value for every stake holder that is associated with us, whether it is a minute detail, a complex design, or a business transaction. We have constantly evolved to the changing markets to promote a positive change.</p>
         </div>
         </div>
      </div>
      <div className='' style={{display:"flex"}}>
      <div className='secondbosx'>
         <div className='firstbox' style={{backgroundColor:"white",padding:"45px"}}>
             <h1 style={{fontWeight:"700",fontSize:"30px"}}>03</h1>
              <h4 style={{fontWeight:"700",fontSize:"25px",color:"#27282c"}}>Commitment</h4>
              <p style={{color:"#828282",fontWeight:"bold",height:"150px",width:"320px",lineHeight:"25px",fontSize:"15px"}}>We do what we say and believe in doing the right thing. We are honest about what we think and commit only when we have conviction. We celebrate progress not just results. We believe everything we do has to be of the highest possible standard at all times.</p>
         </div>
         </div>
         <div className='firstbox' style={{backgroundColor:"#f39314",padding:"45px",marginBottom:"60px"}}>
             <h1 style={{fontWeight:"700",fontSize:"30px"}}>04</h1>
              <h4 style={{fontWeight:"700",fontSize:"25px",color:"white"}}>Sustainability</h4>
              <p style={{fontWeight:"bold",height:"150px",width:"320px",lineHeight:"25px",fontSize:"15px",color:"white"}}>What some call difficult, we love doing it. We go beyond property development to creating meaningful and sustainable communities that are built to last. We care for nature and constantly the best practices to significantly reduce the negative impact on the environment.</p>
         </div>
       
      </div>
    </div>
     </div>
    </div>
  )
}

export default WhyChooseUs
