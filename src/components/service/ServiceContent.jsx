import React from 'react'

const ServiceContent = () => {
  return (
    <div className="service-content">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-xl-6 col-lg-5">
                    <h2 className="section-title title-center"><span>My</span> Experties</h2>
                </div>
            </div>
            <div className="row g-md-4 g-sm-3 g-4 justify-content-between">
                <div className="col-lg-4 col-sm-6">
                    <div className="single-service-box">
                        <div className="part-icon">
                            {/* <Lottie animationData={WebAnimation} loop={true} /> */}
                        </div>
                        <div className="part-txt">
                            <h3>Web Designing</h3>
                            <p>I excel in web development, proficient in both front-end and back-end technologies. My focus is on creating user-friendly, responsive websites that prioritize performance and security.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                    <div className="single-service-box">
                        <div className="part-icon">
                            <span><i className="fa-thin fa-object-ungroup"></i></span>
                        </div>
                        <div className="part-txt">
                            <h3>UI Designing</h3>
                            <p>I'm a skilled UI designer with a keen eye for aesthetics and usability. My expertise lies in crafting visually appealing and intuitive user interfaces that enhance the overall user experience</p>
                        </div>
                    </div>
                </div>
                
                <div className="col-lg-4 col-sm-6">
                    <div className="single-service-box">
                        <div className="part-icon">
                            <span><i className="fa-thin fa-mobile"></i></span>
                        </div>
                        <div className="part-txt">
                            <h3>Mobile Development</h3>
                            <p>Skilled mobile developer adept at crafting efficient and user-centric apps. Specializing in building mobile solutions that deliver exceptional user experiences and high performance.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                    <div className="single-service-box">
                        <div className="part-icon">
                            <span><i className="fa-thin fa-list-tree"></i></span>
                        </div>
                        <div className="part-txt">
                            <h3>Architecture Planning</h3>
                            <p>Experienced software architect specializing in strategic planning and design. Proficient in crafting innovative and efficient software architectural solutions.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                    <div className="single-service-box">
                        <div className="part-icon">
                            <span><i className="fa-thin fa-database"></i></span>
                        </div>
                        <div className="part-txt">
                            <h3>Database Design</h3>
                            <p>Experienced database designer with a proven track record in designing robust and efficient database systems. Proficient in creating well-structured data architectures that optimize performance and scalability. </p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                    <div className="single-service-box">
                        <div className="part-icon">
                            <span><i className="fa-thin fa-palette"></i></span>
                        </div>
                        <div className="part-txt">
                            <h3>Logo Design</h3>
                            <p>Creative logo designer with a knack for crafting impactful brand identities. Specializing in translating brand essence into memorable visual representations. Proficient in creating professional logos.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ServiceContent