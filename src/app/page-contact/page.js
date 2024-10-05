import React from "react";
import Link from "next/link";
import { FiPhone, FiMail, FiMapPin } from '../assets/icons/vander';
import FooterSeven from "../components/footer/footerSeven";
import ScrollTop from "../components/scrollTop";
import NavbarTwo from "@/app/components/navbar/navbarTwo";
import Footer from "@/app/components/footer/footer";

export default function Contact() {
    return (
        <>
            <NavbarTwo navClass="defaultscroll sticky" manuClass="navigation-menu nav-right nav-light" />
            <section className="bg-half-170 d-table w-100" style={{ backgroundImage: "url('/images/bg/EV.png')" }}>
                <div className="bg-overlay bg-new bg-gradient opacity-8"></div>
                <div className="container">
                    <div className="row mt-5 justify-content-center">
                        <div className="col-12">
                            <div className="title-heading text-center">
                                <small className="text-white-50 mb-1 fw-medium text-uppercase mx-auto">Get in touch</small>
                                <h5 className="heading fw-semibold mb-0 page-heading text-white title-dark">Contact us</h5>
                            </div>
                        </div>
                    </div>

                    <div className="position-middle-bottom">
                        <nav aria-label="breadcrumb" className="d-block">
                            <ul className="breadcrumb breadcrumb-muted mb-0 p-0">
                                <li className="breadcrumb-item"><Link href="/">WattWay</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Contact Us</li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </section>

            <section className="section pb-0">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card border-0 text-center features feature-clean bg-transparent">
                                <div className="icons text-primary text-center mx-auto">
                                    <FiPhone className="d-block rounded h3 mb-0" />
                                </div>
                                <div className="content mt-3">
                                    <h5 className="footer-head">Phone</h5>
                                    <p className="text-muted">Get in touch with WattWay for any assistance related to EV charging.</p>
                                    <Link href="tel:+971-4-XXX-XXX" className="text-foot">+971 4 XXX XXX</Link> {/* Update with actual phone number */}
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 mt-4 mt-sm-0 pt-2 pt-sm-0">
                            <div className="card border-0 text-center features feature-clean bg-transparent">
                                <div className="icons text-primary text-center mx-auto">
                                    <FiMail className="d-block rounded h3 mb-0" />
                                </div>
                                <div className="content mt-3">
                                    <h5 className="footer-head">Email</h5>
                                    <p className="text-muted">Reach out to WattWay for more information or support.</p>
                                    <Link href="mailto:support@wattway.com" className="text-foot">support@wattway.com</Link> {/* Update with actual email */}
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 mt-4 mt-sm-0 pt-2 pt-sm-0">
                            <div className="card border-0 text-center features feature-clean bg-transparent">
                                <div className="icons text-primary text-center mx-auto">
                                    <FiMapPin className="d-block rounded h3 mb-0" />
                                </div>
                                <div className="content mt-3">
                                    <h5 className="footer-head">Location</h5>
                                    <p className="text-muted">WattWay HQ, Dubai Silicon Oasis, Dubai, UAE</p>
                                    <Link href="https://www.google.com/maps" data-type="iframe" className="video-play-icon text-foot lightbox">View on Google map</Link> {/* Update with actual map link */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container mt-100 mt-60 mb-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="section-title mb-5 pb-2 text-center">
                                <h4 className="title mb-3">Get In Touch !</h4>
                                <p className="text-muted para-desc mx-auto mb-0">Have any questions or need assistance? Reach out to WattWay and let us help you simplify your EV charging experience!</p>
                            </div>
                            <div className="custom-form">
                                <form >
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label className="form-label">Your Name <span className="text-danger">*</span></label>
                                                <input name="name" id="name" type="text" className="form-control" placeholder="Name :" />
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label className="form-label">Your Email <span className="text-danger">*</span></label>
                                                <input name="email" id="email" type="email" className="form-control" placeholder="Email :" />
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <div className="mb-3">
                                                <label className="form-label">Subject</label>
                                                <input name="subject" id="subject" className="form-control" placeholder="Subject :" />
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <div className="mb-3">
                                                <label className="form-label">Description<span className="text-danger">*</span></label>
                                                <textarea name="comments" id="comments" rows="4" className="form-control" placeholder="Message :"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="d-grid">
                                                <button type="submit" id="submit" name="send" className="btn btn-primary">Send Message</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
            <ScrollTop />
        </>
    )
}
