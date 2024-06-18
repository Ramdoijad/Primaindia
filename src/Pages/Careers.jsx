import React from 'react';
import { Link } from 'react-router-dom';
const Careers = () => {
  return (
    <div style={{ backgroundColor: "#f6f6f6" }}>
      <div>
      <div style={{ position: 'relative', height: '354px', backgroundImage: `url('https://primelandindia.com/img/blog-bg.jpg')`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
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
       Careers
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
        Careers
        </div>
      </div>
    </div>
        <div style={{ display: "flex",paddingTop:"80px",paddingBottom:"80px", justifyContent: "center", alignItems: "flex-start", gap: "20px", margin: "0px 50px 0px 50px" }}>
          <div style={{ width: "45%" }}>
            <p>At Primeland, we think differently. We are passionate about everything we do and always look to create lasting value for both people and communities.</p>
            <p>We always believed, an individual with a purpose can make a difference to the organisation and a team with a purpose can change the dynamics of the market. We are built on the strength of our people and have always encouraged and empowered our people to reach their full potential.</p>
            <p>We are always looking for passionate and committed professionals who want to make an impact. If you are passionate, ambitious and believe in our purpose send us a one-page CV of your accomplishments to <span style={{fontWeight:"bold",fontSize:"20px"}}>hr@primelandgroup.com</span> or simply fill in the form below with your CV. We will revert to you at the earliest.</p>
          </div>
          <div style={{ width: "45%" }}>
            <form action="" style={{ backgroundColor: "white", padding: "20px", borderRadius: "5px" }}>
              <dl>
                <dd>
                  <input type="text" name="name" placeholder="Name" style={{ width: "100%", marginBottom: "10px", padding: "16px",borderRadius:"5px" }} />
                </dd>
                <dd>
                  <input type="text" name="email" placeholder="Email" style={{ width: "100%", marginBottom: "10px", padding: "16px",borderRadius:"5px"}} />
                </dd>
                <dd>
                  <input type="text" name="phone" placeholder="Phone" style={{ width: "100%", marginBottom: "10px", padding: "16px",borderRadius:"5px"  }} />
                </dd>
                <dd>
                  <input type="text" placeholder='Applying For Position' name="position" style={{ width: "100%", marginBottom: "10px",padding: "16px",borderRadius:"5px"  }} />
                </dd>
                <dd>
                  <fieldset>
                    <legend>Upload CV</legend>
                    <input type="file" name="cv" />
                  </fieldset>
                </dd>
              </dl>
              <button type="submit" style={{ padding: "15px", width: "100%", borderRadius: "10px", backgroundColor: "#382456", color: "#fff", border: "none", cursor: "pointer" }}>
               Apply Now
              </button>
            </form>
          </div>
        </div>
      </div>
      <style jsx>{`
        @media (min-width: 768px) {
          .partner-section {
            flex-direction: row;
            justify-content: center;
            align-items: flex-start;
            margin: 0px 50px 0px 50px;
          }
          .partner-item {
            width: 45%;
          }
        }
        @media (min-width: 800px) {
          .partner-section {
            margin: 0px 100px 0px 100px;
          }
        }
      `}</style>
    </div>
  );
};

export default Careers;
