import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function ServiceSection() {
    return (
        <section id="services" className="bg-half-170 pb-lg-5 pb-md-4 d-table w-100" style={{
            backgroundImage: "url('/images/bg/service.jpg')",
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            minHeight: '90vh'
        }}>
        <div className="container">
    <div className="row position-relative" style={{ zIndex: '1' }}>
    <div className="col-md-7 col-12 mt-lg-5">
    </div>
    <div className="col-md-5 col-12 mt-4 pt-2 mt-sm-0 pt-sm-0">
        <div className="shape-before">
            <div className="carousel-cell d-flex justify-content-center">
                <ul className="list-unstyled text-white fs-4">
                    <h2>Our Services</h2>
                    <li>1. eMSP</li>
                    <li>2. Data & Insights</li>
                    <li>3. Call Center as a Service</li>
                    <li>4. Maintenance as a Service</li>
                </ul>
            </div>
        </div>
    </div>
    </div>
        </div>
        </section>
    );
}

