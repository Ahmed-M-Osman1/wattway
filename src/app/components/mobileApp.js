import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BsApple, FaGooglePlay, MdKeyboardArrowRight, FiSmartphone } from "../assets/icons/vander";

export default function MobileApp() {
    return (
        <div id='download' className="container mt-100 mt-60">
            <div className="row align-items-center">
                <div className="col-lg-5 col-md-6 order-md-1 order-2 mt-4 mt-sm-0 pt-2 pt-sm-0">
                    <Image
                        src='/images/app/ios-android.png'
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: '100%', height: 'auto' }}
                        className="img-fluid"
                        alt="App preview"
                    />
                </div>

                <div className="col-lg-7 col-md-6 order-md-2 order-1">
                    <div className="ms-lg-5">
                        <div className="section-title">
                            <h4 className="title mb-4 text-center">Powering Your EV Journey and Download WattWay App Now!</h4>
                            <p className="text-muted para-desc mb-0">
                                Seamlessly discover and manage EV charging stations through WattWay—your go-to app for real-time updates, smart booking, and effortless charging experiences across the UAE.
                            </p>

                            {/* Centering the buttons */}
                            <div className="my-4 d-flex justify-content-center">
                                <Link href="#" className="btn btn-lg btn-primary mt-2 me-2">
                                    <BsApple className="align-middle" /> App Store
                                </Link>
                                <Link href="#" className="btn btn-lg btn-primary mt-2">
                                    Play Store <FaGooglePlay className="align-middle" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
