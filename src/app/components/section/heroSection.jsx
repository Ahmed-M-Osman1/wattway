import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
    return (
        <section id="hero-section" className="bg-half-170 pb-lg-5 pb-md-4 d-table w-100" style={{ backgroundImage: "url('/images/bg/section1.png')", backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
    <div className="bg-overlay bg-primary .bg-gradient opacity-8"></div>
        <div className="container">
    <div className="row position-relative" style={{ zIndex: '1' }}>
    <div className="col-md-7 col-12 mt-lg-5">
    <div className="title-heading">
    <h1 className="heading text-white title-dark mb-4 font-weight-bold text-center">Introducing WattWay</h1>
        <p className="para-desc text-white-50 text-center">Creating pathways to a sustainable future, offering cutting-edge solutions to support your EV journey.</p>
    <div className="mt-4 pt-2 text-center">
        <Link href="#download" className="btn btn-primary me-3">Download now</Link>
        <Link href="/page-contact" className="btn btn-primary me-1">Contact us</Link>
    </div>
    </div>
    </div>
    <div className="col-md-5 col-12 mt-4 pt-2 mt-sm-0 pt-sm-0">
        <div className="shape-before">
            <div className="carousel-cell d-flex justify-content-center">
                <Image
                    src='/images/app/wattwayAvailable.png'
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{width: '83%', height: '60%'}}
                    className="img-fluid"
                    alt=""
                />
            </div>
        </div>
    </div>
    </div>
        </div>
        </section>
    );
}

