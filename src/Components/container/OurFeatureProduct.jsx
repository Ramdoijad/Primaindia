import React from 'react';

const projects = [
    { href: "https://primelandindia.com/the-one/", imgSrc: "https://primelandindia.com/img/prime-projects/1.jpg", alt: "THE ONE" },
    { href: "https://primelandindia.com/reserve/", imgSrc: "https://primelandindia.com/img/prime-projects/2.jpg", alt: "RESERVE" },
    { href: "https://primelandindia.com/iconia/", imgSrc: "https://primelandindia.com/img/prime-projects/3.jpg", alt: "ICONIA" },
    { href: "https://primelandindia.com/greenfield/", imgSrc: "https://primelandindia.com/img/prime-projects/4.jpg", alt: "GREEN FIELDS" },
    { href: "#", imgSrc: "https://primelandindia.com/img/prime-projects/5.jpg", alt: "GREEN FIELDS Balanagar" },
    { href: "https://primelandindia.com/pedda-amberpet/", imgSrc: "https://primelandindia.com/img/prime-projects/6.jpg", alt: "PEDDA AMBERPET" },
    { href: "#", imgSrc: "https://primelandindia.com/img/prime-projects/7.jpg", alt: "KOHEDA" },
    { href: "#", imgSrc: "https://primelandindia.com/img/prime-projects/8.jpg", alt: "CHIKKABALLAPPUR" }
];

const FeaturedProjects = () => {
    return (
        <section className="primeland-area" style={{padding:"150px",backgroundColor:"#382456"}}>
            <div className="container">
                <div className="row" style={{color:"white"}}>
                    <div className="col-xl-12">
                        <div className="sec-title float-left" style={{height:"44px"}}>
                            <div className="title" style={{fontSize:"36px",fontFamily:"poppins sans-serif",color:"white",fontWeight:"700"}}>OUR FEATURED <span style={{lineHeight:"44px",fontSize:"36px",color:"white"}}> PROJECTS</span></div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {projects.map((project, index) => (
                        <div className="col-xl-3 col-lg-3 col-md-3" key={index}>
                            <div className="card mt-4" style={{textDecoration:"none",border:"none"}}>
                                <div className="img-holder">
                                    <a href={project.href} target="_blank" rel="noopener noreferrer">
                                        <img src={project.imgSrc} alt={project.alt} className="card-img-top" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default FeaturedProjects;
