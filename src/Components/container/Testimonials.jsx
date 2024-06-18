import React from 'react';
import '../../styles/Testimonials.css'

const testimonials = [
    {
        name: "Anand Mishra",
        location: "Kompally, Hyderabad",
        image: "https://primelandindia.com/img/testi-1.png",
        text: "Best real estate company for the investment purpose in approved layouts with fabulous offers from the company."
    },
    {
        name: "Srinivas Rao",
        location: "Kondapur,Hyderabad",
        image: "https://primelandindia.com/img/testi-1.png",
        text: "I am happy that I purchased a villa with Primeland Group because the quality of materials they used are very great and long lasting."
    },
    {
        name: "Pradeep Kumar",
        location: "Indra Nagar,Bangalore",
        image: "https://primelandindia.com/img/testi-1.png",
        text: "Really impressed by the customer service team, they are extremely friendly and always helpful for a picky buyer like me."
    }
];

const Testimonials = () => {
    return (
        <section className="testimonial-area" style={{padding:"100px"}}>
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="sec-title float-left">
                            <p>Testimonials</p>
                            <div className="title">Our Customer <span>Words</span></div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {testimonials.map((testimonial, index) => (
                        <div className="col-xl-4 col-lg-4" key={index}>
                            <div className="single-testimonial-item text-center">
                                <div className="quote-icon"> 
                                    <span className="icon-quote1"></span> 
                                </div>
                                <div className="inner-content">
                                    <div className="client-info">
                                        <h3>{testimonial.name}</h3> 
                                        <span>{testimonial.location}</span> 
                                    </div>
                                    <div className="img-box"> 
                                        <img src={testimonial.image} alt={testimonial.name} /> 
                                    </div>
                                    <div className="text-box">
                                        <p>{testimonial.text}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Testimonials;
