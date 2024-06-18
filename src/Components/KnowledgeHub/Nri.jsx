import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router-dom'
const Nri = () => {
  return (
    <div>
    <div style={{ position: 'relative', height: '354px', backgroundImage:`url('https://primelandindia.com/img/nri-bg.jpg')`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
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
         NRI
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
           NRI
           </div>
           
         </div>
         
       </div>
       <div style={{textAlign:"center",padding:"100px"}}>
       <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Who is a NRI?</Accordion.Header>
        <Accordion.Body>
        As defined by the Foreign Exchange Management Act of 1999 (FEMA), Non Resident Indian (NRI) is a citizen of India, who stays abroad for employment/carrying on business or vocation outside India or stays abroad under circumstances indicating an intention for an uncertain duration of stay abroad is a non-resident. Non-resident foreign citizens of Indian Origin are treated at par with Non Resident Indian (NRIs).
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Are foreign nationals of Indian origin allowed to purchase immovable property in India?</Accordion.Header>
        <Accordion.Body>
         Yes, foreign nationals of Indian origin, whether Resident in India or abroad, have been granted general permission to purchase immovable property in India.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>What should be the method of payment for purchasing Residential immovable property in India by foreign nationals of Indian origin under the general permission?</Accordion.Header>
        <Accordion.Body>
        The purchase consideration should be met either out of inward remittances in foreign exchange through normal banking channels or out of funds from NRE/ FCNR accounts maintained with banks in India.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>What way the Non-Resident Indian can finance the flat?</Accordion.Header>
        <Accordion.Body>
        NRI/PIO can avail of housing loan in Rupees from an Authorized Dealer or a Housing Finance Institution subject to certain terms and conditions laid down in Regulation 8 of Notification No. FEMA 4/2000-RB dated May 3, 2000 viz. Foreign Exchange Management (Borrowing and lending in rupees) Regulations, 2000, as amended from time to time. Authorized Dealers/ Housing Finance Institutions can also lend to the NRIs/ PIOs for the purpose of repairs/renovation/ improvement of residential accommodation owned by them in India. Such a loan can be repaid (a) by way of inward remittance through normal banking channel or (b) by debit to the NRE / FCNR (B) / NRO account of the NRI / PIO or (c) out of rental income from such property; or (d) by the borrower's close relatives, as defined in section 6 of the Companies Act, 1956, through their account in India by crediting the borrower's loan account.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>Can Non-Resident Indians staying abroad purchase property through an agent or through a power of attorney?</Accordion.Header>
        <Accordion.Body>
        The Non-Resident Indians who are staying abroad may enter into an agreement through their relatives and/ or by executing the Power of Attorney in their favour as it is not possible for them to be present for completing the formalities of purchase (negotiating with the builder or Developer, drafting and signing of agreements, taking possession, etc.). These formalities can be completed through some known person who can be given the Power of Attorney for this purpose. Power of Attorney should be executed on the stamp paper before the proper authorities in foreign countries. Power of Attorney cannot be drafted on the stamp paper bought in India.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header>Are there any formalities to be completed by foreign nationals of Indian origin for purchasing Residential immovable property in India?</Accordion.Header>
        <Accordion.Body>
        They are required to file a declaration in form IPI 7 with the Central Office of Reserve Bank at Mumbai within a period of 90 days from the date of purchase of immovable property or final payment of purchase consideration along with a certified copy of the document evidencing the transaction and bank certificate regarding the consideration paid.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="6">
        <Accordion.Header>Can NRI / PIO rent out the residential / commercial property purchased out of foreign exchange / rupee funds?</Accordion.Header>
        <Accordion.Body>
        Yes, NRI/PIO can rent out the property without the approval of the Reserve Bank. The rent received can be credited to NRO / NRE account or remitted abroad. Powers have been delegated to the Authorized Dealers to allow repatriation of current income like rent, dividend, pension, interest, etc. of NRIs/PIO who do not maintain an NRO account in India based on an appropriate certification by a Chartered Accountant, certifying that the amount proposed to be remitted is eligible for remittance and that applicable taxes have been paid/provided for.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="7">
        <Accordion.Header>Do Non-Resident Indians i.e. Indian citizens resident abroad require permission of Reserve Bank to acquire any immovable property in India?</Accordion.Header>
        <Accordion.Body>
        No specific permission is required by Non-Resident Indian nationals to acquire immovable Property in India other than agricultural/ plantation/ farmhouse.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="8">
        <Accordion.Header>Do Non-Resident Indians require permission to transfer any immovable property in India to a person resident in India?</Accordion.Header>
        <Accordion.Body>
        No specific permission is required by Non-Resident Indians to transfer any immovable property in India to a person resident in India.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="9">
        <Accordion.Header>Do Non-Resident Indians require permission to transfer any immovable property to a person of Indian origin resident outside India/ Non-Resident Indian?</Accordion.Header>
        <Accordion.Body>
        No specific permission is required for said transfer of any immovable property, other than agricultural, or plantation property or farm house.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="10">
        <Accordion.Header>What are the provisions for remittance of sale of proceeds of any immovable property by Non-Resident Indians/ Person of Indian origin, Resident outside India?</Accordion.Header>
        <Accordion.Body>
        NRI/PIO may repatriate the sale proceeds of immovable property a) If the property was acquired out of foreign exchange sources i.e. remitted through normal banking channels/by debit to NRE/FCNR (B) account. The amount to be repatriated should not exceed the amount paid for the property: 1.In foreign exchange received through normal banking channel 2. By debit to NRE account (foreign currency equivalent, as on the date of payment) or debit to FCNR (B) account. Repatriation of sale proceeds of residential property purchased by NRI/PIO out of foreign exchange is restricted to not more than two such properties. Capital gains, if any, may be credited to the NRO account from where the NRI/PIO may repatriate an amount up to $1 million, per financial year, as discussed below. b) If the property was acquired out of Rupee sources, NRI or PIO may remit an amount up to $1 million, per financial year, out of the balances held in the NRO account (inclusive of sale proceeds of assets acquired by way of inheritance or settlement), for all the bonafide purposes to the satisfaction of the Authorized Dealer bank and subject to tax compliance.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="11">
        <Accordion.Header>What is the position regarding Refund of purchase consideration on account of non-allotment of flats/ plots/ cancellation of bookings/ deals in respect of immovable property purchased by NRIs/ PIOs in India?</Accordion.Header>
        <Accordion.Body>
        With a view to allow credit to NRE/ FCNR account of refund of purchase consideration by seller on account of cancellation of bookings/ deals for purchase of Residential, commercial property, Reserve Bank clarified that it will be in order for authorized dealers to allow Non-Resident Indians/ Persons of Indian Origin to credit refund of application/ earnest money/ purchase consideration made by the housing building agencies/ seller on account of non-allotment of flat/ plot/ cancellation of bookings/ deals for purchase of Residential commercial property, together with interest, if any (net of income tax payable thereon),to NRE/ FCNR account, provided, the original payment was made out of NRE/ FCNR account of the account-holder or remittance from outside India through normal banking channels and the authorized dealer is satisfied about the genuineness of the transaction.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="11">
        <Accordion.Header>Where can one contact with RBI for clarifications/ approvals etc. in respect of immovable property in India?</Accordion.Header>
        <Accordion.Body>
        The Chief General Manager, Reserve Bank of India, Central Office, Exchange control Department, Foreign Investment Division (III), Mumbai - 400 001
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
       </div>
       </div>
  )
}

export default Nri
