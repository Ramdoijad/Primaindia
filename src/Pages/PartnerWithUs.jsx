import React from 'react';

const PartnerWithUs = () => {
  return (
  <div  style={{backgroundColor: "#f6f6f6"}}>
      <div style={{padding: "20px",}}>
      <div style={{ textAlign: "center", marginBottom: "20px", margin:"80px 100px 0px 100px"}}>
        <h3>Partner With Us</h3>
        <p>
          We are always on the lookout for new opportunities and seek to collaborate
          with people who share our vision, values, and philosophy. We value and
          appreciate the importance of collaboration and have always placed a premium
          on our partnerships.
        </p>
      </div>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "flex-start", gap: "20px",margin:"0px 50px 0px 50px" }}>
        <div style={{ width: "45%" }}>
          <h4>Land Owners</h4>
          <p>
            Collaboration is at the heart of everything we do and have always placed
            a premium on “win-win” relationships.
          </p>
          <p>
            We seek to collaborate and partner with land owners who hold large land
            parcels in the south of India. From planning to permissions, development
            to delivery, marketing to sales, we go beyond the norm to develop
            progressive and inclusive communities.
          </p>
          <p>
            We are actively looking for land in all the prominent suburbs in Hyderabad
            and Bengaluru. If you are a Land Owner and would like to discuss your
            property with us, kindly write to us at info@primelandindia.com or call us
            on 040-23121212.
          </p>
        </div>
        <div style={{ width: "45%" }}>
          <h4>Channel Partners</h4>
          <form action="" style={{ backgroundColor: "white", padding: "20px", borderRadius: "8px" }}>
            <dl>
              <dd><input type="text" name="name" placeholder="Name" style={{ width: "100%", marginBottom: "10px", padding: "8px" }} /></dd>
              <dd style={{ display: "flex", gap: "10px" }}>
                <input type="text" name="email" placeholder="Email" style={{ flex: 1, padding: "8px" }} />
                <input type="text" name="phone" placeholder="Phone" style={{ flex: 1, padding: "8px" }} />
              </dd>
              <dd>
                <fieldset style={{ border: "1px solid black", padding: "10px" }}>
                  <legend>Message</legend>
                  <textarea name="message" rows="4" style={{ width: "100%", padding: "8px" }}></textarea>
                </fieldset>
              </dd>
            </dl>
            <button type="submit" style={{ padding: "15px",width:"100%",borderRadius:"10px", backgroundColor: "#382456", color: "#fff", border: "none", cursor: "pointer" }}>
              Send Your Message
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
  )
}

export default PartnerWithUs;
