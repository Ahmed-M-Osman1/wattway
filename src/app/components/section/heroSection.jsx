import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
    return (
        <section id="hero-section" className="bg-half-170 pb-lg-5 pb-md-4 d-table w-100" style={{ backgroundImage: "url('/images/bg/section1.png')", backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
            <div className="bg-overlay bg-new bg-gradient opacity-8"></div>
            <div className="container">
                <div className="row position-relative" style={{ zIndex: '1' }}>
                    <div className="col-md-7 col-12 d-flex align-items-center justify-content-center">
                        <div className="title-heading text-center">
                            <h1 className="heading text-white title-dark mb-4 font-weight-bold">Introducing WattWay</h1>
                            <p className="para-desc text-white-50">Creating pathways to a sustainable future, offering cutting-edge solutions to support your EV journey.</p>
                            <div className="mt-4 pt-2">
                                <Link href="#download" className="btn btn-primary-v2 me-3">Download now</Link>
                                <Link href="/page-contact" className="btn btn-primary-v2 me-1">Contact us</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5 col-12 mt-4 pt-2 mt-sm-0 pt-sm-0 d-flex align-items-center">
                        <div className="carousel-cell d-flex justify-content-center">
                            <Image
                                src='/images/app/wattwayAvailable.png'
                                width={0}
                                height={0}
                                sizes="80vw"
                                style={{ width: '73%', height: '50%' }}
                                className="img-fluid"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
