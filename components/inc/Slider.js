import React from "react";

const Slider = () => {
    return (
        <>
                <div className="section">

                    <div className="container">
                        
                        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-indicators">
                              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div className="carousel-inner">
                              <div className="carousel-item active">
                                <img src="images/cover/music.png" className="d-block w-100" alt="..." />
                                <div className="carousel-caption d-none d-md-block">
                                </div>
                              </div>
                              <div className="carousel-item">
                                <img src="images/cover/2.png" className="d-block w-100" alt="..." />
                                <div className="carousel-caption d-none d-md-block">
    
                                </div>
                              </div>
                              <div className="carousel-item">
                                <img src="images/cover/3.png" className="d-block w-100" alt="..." />
                                <div className="carousel-caption d-none d-md-block">
                            
                                </div>
                              </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                              <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                              <span className="carousel-control-next-icon" aria-hidden="true"></span>
                              <span className="visually-hidden">Next</span>
                            </button>
                        </div>  

                    </div>
                    
                </div>
        </>
    )
}

export default Slider