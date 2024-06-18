import React from "react";

const WhatWeDo = () => {
  return (
    <div style={{ backgroundColor: "#f6f6f6"}}>
      <div style={{ marginLeft: "400px",marginTop:"100px",paddingTop:"100px" }}>
        <div style={{marginLeft:"50px",marginBottom:"50px"}}>
          <h2>
            <span
              style={{
                fontWeight: "800",
                fontSize: "36px",
                marginLeft: "80px",
              }}
            >
              WHY WE DO.
            </span>
            WHAT WE DO.
          </h2>
          <p style={{ color: "#828282" }}>
            Doing it Right is the core of who we are, Our Vision and our Mission
            are the reason
          </p>
          <p style={{ color: "#828282", marginLeft: "15px" }}>
            why we do what we do. We’re relentlessly focused on creating
            exceptional life-
          </p>
          <p style={{ color: "#828282", marginLeft: "100px" }}>
            spaces to create increased value for everyone.
          </p>
        </div>
        <div style={{ display: "flex", marginLeft: "-196px",paddingBottom:"60px" }}>
          <div style={{ backgroundColor: "white",paddingRight:"30px",height:"250px" ,paddingTop:"40px",border:"1px solid black"}}>
            <img
              src="https://primelandindia.com/img/vision.png"
              alt=""
              style={{
                width: "80px",
                height: "80px",
                borderRadius: "50%",
                objectFit: "cover",
                marginLeft: "50px",
                marginBottom:"30px"
              }}
            />
            <span style={{marginLeft:"20px",fontWeight:"800",fontSize:"20px"}}>Our Vision</span>
            <div>
              <p style={{width:"500px",paddingLeft:"40px"}}>
                "To deliver thoughtfully crafted communities that elevates
                properties from developments into extraordinary places to live,
                work and shop".
              </p>
            </div>
        
          </div>
          <span style={{padding:"20px",fontWeight:"800"}}></span>
          <div style={{ backgroundColor: "white",paddingRight:"30px",height:"250px" ,paddingTop:"40px",border:"1px solid black" }}>
            <img
              src="https://primelandindia.com/img/mission.png"
              alt=""
              style={{
                width: "80px",
                height: "80px",
                borderRadius: "50%",
                objectFit: "cover",
                marginLeft: "50px",
                marginBottom:"30px"
              }}
            />
            <span style={{marginLeft:"20px",fontWeight:"800",fontSize:"20px"}}>Our Mission</span>
            <div>
              <p style={{width:"500px",paddingLeft:"40px"}}>
                "To shape lifestyles that are inclusive for all and to promote a
                positive change in all the areas we operate in".
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
