import React from 'react';

const Contact = () => {
  return (
    <div>
      <div style={{ position: 'relative' }}>
        <div style={{ 
          height: '354px', 
          backgroundImage: `url('https://primelandindia.com/img/blog-bg.jpg')`, 
          backgroundPosition: 'center', 
          backgroundSize: 'cover',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          color: '#fff',
          fontFamily: "Poppins, sans-serif",
          fontWeight: "700",
          fontSize: "48px",
        }}>
          <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '20px', borderRadius: '8px' }}>
            Get In Touch With Us
          </div>
        </div>
        <div style={{ 
          backgroundColor: "white", 
          paddingTop: "40px", 
          paddingBottom: "40px", 
          display: "flex", 
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
          margin: "0px 50px",
          position: 'relative',
          zIndex: 1
        }}>
          <div style={{ width: "100%", display: 'flex', justifyContent: 'center', gap: '20px' }}>
            <div style={{ 
              width: "30%", 
              backgroundColor: "white", 
              padding: "20px", 
              borderRadius: "8px",
              textAlign: "center",
              boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)"
            }}>
              <img height="50px" src="../../src/assets/world.png" alt="" />
              <p style={{fontWeight: "bold", marginBottom: "10px"}}>Corporate Office</p>
              <p>My Home Hub, 7th Floor, Block 2, Madhapur,</p>
              <p>Hitechcity Hyderabad, Telangana 500033.</p>
            </div>
            <div style={{ 
              width: "30%", 
              backgroundColor: "white", 
              padding: "20px", 
              borderRadius: "8px",
              textAlign: "center",
              boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)"
            }}>
              <img src="../../src/assets/map.png" alt="" />
              <p style={{fontWeight: "bold", marginBottom: "10px"}}>Bangalore Office</p>
              <p>40/1A, 1st floor, Basappa Complex,</p>
              <p>Lavelle Road, behind Rotary Club,</p>
              <p>Bengaluru, Karnataka 560001</p>
            </div>
            <div style={{ 
              width: "30%", 
              backgroundColor: "white", 
              padding: "20px", 
              borderRadius: "8px",
              textAlign: "center",
              boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)"
            }}>
              <img src="../../src/assets/images.jpeg" height="60px" alt="" />
              <p style={{fontWeight: "bold", marginBottom: "10px"}}>Mail Us</p>
                 
              <p>info@primelandindia.com</p>
            </div>
          </div>
        </div>
      </div>
      <div style={{ 
        display: "flex", 
        backgroundColor: "white", 
        paddingTop: "40px", 
        paddingBottom: "40px", 
        justifyContent: "center", 
        alignItems: "flex-start", 
        gap: "20px", 
        margin: "0px 50px",
        position: 'relative',
        zIndex: 1
      }}>
        <div style={{ width: "45%", display: 'flex', flexDirection: 'column' }}>
          <div style={{ backgroundColor: "white", padding: "20px", borderRadius: "8px", marginBottom: "20px" }}>
            <p style={{fontWeight:"bolder"}}>DROP US A LINE</p>
            <h1><span style={{fontWeight:"bolder"}}>SEND YOUR </span>MESSAGE</h1>
            <p>If you have questions or would like more information on our works, please complete the form and we’ll aim to get back to you within 24 hours.</p>
          </div>
          <form action="" style={{ backgroundColor: "white", padding: "20px", borderRadius: "8px", flex: 1 }}>
            <dl>
              <dd><input type="text" name="name" placeholder="Name" style={{ width: "100%", marginBottom: "10px", padding: "8px" }} /></dd>
              <dd style={{ display: "flex", gap: "10px" }}>
                <input type="text" name="email" placeholder="Email" style={{ flex: 1, padding: "8px" }} />
                <input type="text" name="phone" placeholder="Phone" style={{ flex: 1, padding: "8px" }} />
              </dd>
              <dd>
                <fieldset style={{ border: "1px solid black", padding: "10px" }}>
                  <legend>Your Message</legend>
                  <textarea name="message" rows="4" style={{ width: "100%", padding: "8px" }}></textarea>
                </fieldset>
              </dd>
            </dl>
            <button type="submit" style={{ padding: "15px", width: "100%", borderRadius: "10px", backgroundColor: "#f39314", color: "#fff", border: "none", cursor: "pointer" }}>
              Send Your Message
            </button>
          </form>
        </div>
        <div style={{ width: "45%", display: 'flex', alignItems: 'center' }}>
          <img src="https://primelandindia.com/img/contact.png" alt="" style={{ width: '100%', borderRadius: '8px' }} />
        </div>
      </div>
    </div>
  );
};

export default Contact;
