import React from "react";
import Link from "next/link";
import { AiFillLinkedin, BiLogoFacebook, AiOutlineInstagram, AiOutlineTwitter, FiMail, IoIosArrowForward } from "../../assets/icons/vander";
import Image from "next/image";

export default function Footer({ top }) {
    return (
        <footer className="footer bg-footer">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="footer-py-60">
                            <div className="row">
                                <div className="col-lg-3 col-md-3 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0 order-4 order-md-1">
                                    <ul className="list-unstyled social-icon foot-social-icon mb-0">
                                        <li className="list-inline-item">
                                            <Link href="mailto:support@wattway.com" className="rounded">
                                                <FiMail className="align-middle" />
                                            </Link>
                                        </li>
                                        <li className="list-inline-item">
                                            <Link href="https://linkedin.com/company/wattway" target="_blank" className="rounded">
                                                <AiFillLinkedin />
                                            </Link>
                                        </li>
                                        <li className="list-inline-item">
                                            <Link href="https://www.facebook.com/wattway" target="_blank" className="rounded">
                                                <BiLogoFacebook />
                                            </Link>
                                        </li>
                                        <li className="list-inline-item">
                                            <Link href="https://www.instagram.com/wattway" target="_blank" className="rounded">
                                                <AiOutlineInstagram />
                                            </Link>
                                        </li>
                                        <li className="list-inline-item">
                                            <Link href="https://twitter.com/wattway" target="_blank" className="rounded">
                                                <AiOutlineTwitter />
                                            </Link>
                                        </li>
                                    </ul>
                                    <div className={'m-2'}>
                                    <Link href="/">
                                        <Image src='/images/logo.png' width={95} height={95} alt="WattWay Logo" />
                                    </Link>
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-3 col-12 order-1 order-md-2">
                                    <h6 className="footer-head">Company</h6>
                                    <ul className="list-unstyled footer-list mt-4">
                                        <li>
                                            <Link href="/#about" className="text-foot d-flex align-items-center">
                                                <IoIosArrowForward className="me-1" /> About us
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/#services" className="text-foot d-flex align-items-center">
                                                <IoIosArrowForward className="me-1" /> Services
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/#reviews" className="text-foot d-flex align-items-center">
                                                <IoIosArrowForward className="me-1" /> Reviews
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/#faq" className="text-foot d-flex align-items-center">
                                                <IoIosArrowForward className="me-1" /> FAQ
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/#download" className="text-foot d-flex align-items-center">
                                                <IoIosArrowForward className="me-1" /> Download
                                            </Link>
                                        </li>
                                    </ul>
                                </div>

                                <div className="col-lg-3 col-md-3 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0 order-2 order-md-3">
                                    <h6 className="footer-head">Useful Links</h6>
                                    <ul className="list-unstyled footer-list mt-4">
                                        <li>
                                            <Link href="/page-contact" className="text-foot d-flex align-items-center">
                                                <IoIosArrowForward className="me-1" /> Contact Us
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/#hero-section" className="text-foot d-flex align-items-center">
                                                <IoIosArrowForward className="me-1" /> Home
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/#services" className="text-foot d-flex align-items-center">
                                                <IoIosArrowForward className="me-1" /> Services
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/terms-of-service" className="text-foot d-flex align-items-center">
                                                <IoIosArrowForward className="me-1" /> Terms of Service
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/privacy-policy" className="text-foot d-flex align-items-center">
                                                <IoIosArrowForward className="me-1" /> Privacy Policy
                                            </Link>
                                        </li>
                                    </ul>
                                </div>

                                <div className="col-lg-3 col-md-3 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0 order-3 order-md-4">
                                    <h6 className="footer-head">Resources</h6>
                                    <ul className="list-unstyled footer-list mt-4">
                                        <li>
                                            <Link href="/#faq" className="text-foot d-flex align-items-center">
                                                <IoIosArrowForward className="me-1" /> FAQ
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/page-contact" className="text-foot d-flex align-items-center">
                                                <IoIosArrowForward className="me-1" /> Support
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/#about" className="text-foot d-flex align-items-center">
                                                <IoIosArrowForward className="me-1" /> Company History
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="footer-py-30 footer-bar bg-footer">
                <div className="container">

                    <div className="row align-items-center">
                        <div className="col-sm-8 mt-4 mt-sm-0">
                            <div className="text-sm-end text-center">
                                <p className="mb-0 text-muted">
                                    2024 © WattWay. Powered by <i className="mdi mdi-heart text-danger"></i> <Link href="https://yourcompanywebsite.com" target="_blank" className="text-reset">WattWay</Link>.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
