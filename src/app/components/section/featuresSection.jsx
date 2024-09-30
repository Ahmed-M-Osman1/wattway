import React from "react";
import Link from "next/link";
import Image from 'next/image';
import { featureData } from "../../data/application";

export default function FeaturesSection() {
    return (
        <section id={"services"} className="section overflow-hidden pb-4">
            <div className="container">
                <h1 className="mb-4 text-primary font-weight-bold text-center">WattWay</h1>
                <div className="row justify-content-center">
                    {featureData.map((item, index) => {
                        let Icon = item.icon;
                        return (
                            <div className="col-lg-4 col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0" key={index}>
                                <div className="card p-4 rounded features features-classic feature-primary">
                                    {/* Use Bootstrap d-flex to align image and text next to each other */}
                                    <div className="d-flex align-items-center">
                                        {/* Image */}
                                        <div className="fea-icon rounded bg-primary shadow icon me-3">
                                            <Image src={Icon} alt={item.alt} width={65} height={55}/>
                                        </div>
                                        <div className="content">
                                            <h5 className="title   text-dark">{item.title}</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
