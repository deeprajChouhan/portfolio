import React from 'react'
import CountUp from 'react-countup'

const FunFactContent = () => {
    return (
        <div className="fun-fact">
            <div className="container">
                <div className="row g-0 gy-4">
                    <div className="col-md-3 col-6">
                        <div className="single-box single-box-2">
                            <div className="part-icon">
                                <span>
                                    <i className="fa-thin fa-list-check"></i>

                                </span>
                            </div>
                            <h2>
                                <span className="odometer" data-count="100,000 ">
                                    <CountUp end={100000} />
                                </span>
                                +
                            </h2>
                            <p>Lines of Code</p>
                        </div>
                    </div>
                    <div className="col-md-3 col-6">
                        <div className="single-box single-box-2">
                            <div className="part-icon">
                                <span>
                                    
                                <i className="fa fa-bug"></i>
                                </span>
                            </div>
                            <h2>
                                <span className="odometer" data-count="10000">
                                    <CountUp end={10000} />
                                </span>
                                +
                            </h2>
                            <p>Bugs Fixed</p>
                        </div>
                    </div>
                    <div className="col-md-3 col-6">
                        <div className="single-box single-box-2">
                            <div className="part-icon">
                                <span>
                                    <i className="fa-thin fa-mug-hot"></i>
                                </span>
                            </div>
                            <h2>
                                <span className="odometer" data-count="1000">
                                    <CountUp end={1000} />
                                </span>
                                +
                            </h2>
                            <p>Cups Of Coffee</p>
                        </div>
                    </div>
                    <div className="col-md-3 col-6">
                        <div className="single-box">
                            <div className="part-icon">
                                <span>
                                <i className="fa-thin fa-users"></i>
                                </span>
                            </div>
                            <h2>
                                <span className="odometer" data-count="100">
                                    <CountUp end={100} />
                                </span>
                            </h2>
                            <p>Best Project Scope </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default FunFactContent