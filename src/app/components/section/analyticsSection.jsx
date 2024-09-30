import React from "react";
import Link from "next/link";
import { AiOutlineCheckCircle, FiArrowRight } from "../../assets/icons/vander";
import PhotoSlider from './components/slider';

export default function AnalyticsSection() {
    return (
        <div  id="about" className="container mt-100 mt-60">
            <div className="row align-items-center">
                <div className="col-lg-5 col-md-6 order-md-1 order-2 mt-4 mt-sm-0 pt-2 pt-sm-0">
                    <PhotoSlider />
                </div>
                <div className="col-lg-7 col-md-6 order-md-2 order-1">
                    <div className="ms-lg-5">
                        <div className="section-title">
                            <h4 className="title mb-4 text-center">
                                WattWay: Simplifying EV Charging <br /> Across the UAE
                            </h4>
                            <p className="text-muted para-desc mb-0">
                                WattWay is the UAE’s first Electric Mobility Service Provider (e-MSP), connecting EV drivers with all available charging stations across the country. Our platform provides real-time access to charging points, streamlining the EV charging experience for drivers and Charging Point Operators (CPOs).
                            </p>
                            <ul className="list-unstyled text-muted mt-3">
                                <li className="mb-0">
                                    <span className="text-primary h5 me-2">
                                        <AiOutlineCheckCircle className="align-middle" />
                                    </span>
                                    Real-time access to all EV charging points via one app
                                </li>
                                <li className="mb-0">
                                    <span className="text-primary h5 me-2">
                                        <AiOutlineCheckCircle className="align-middle" />
                                    </span>
                                    Comprehensive monitoring solution for Charging Point Operators (CPOs)
                                </li>
                                <li className="mb-0">
                                    <span className="text-primary h5 me-2">
                                        <AiOutlineCheckCircle className="align-middle" />
                                    </span>
                                    Seamless EV charging experience across the UAE
                                </li>
                                <li className="mb-0">
                                    <span className="text-primary h5 me-2">
                                        <AiOutlineCheckCircle className="align-middle" />
                                    </span>
                                    Ability to book charging slots for your EV at stations
                                </li>
                                <li className="mb-0">
                                    <span className="text-primary h5 me-2">
                                        <AiOutlineCheckCircle className="align-middle" />
                                    </span>
                                    Provides directions to charging stations
                                </li>
                            </ul>
                            <div className="mt-4">
                                <Link href="#" className="btn btn-soft-primary">
                                    Try for free <FiArrowRight className="fea icon-sm" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
