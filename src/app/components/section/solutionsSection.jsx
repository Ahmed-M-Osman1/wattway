import React from "react";
import Image from 'next/image';
import { solution } from "../../data/solution";

export default function SolutionsSection() {
    return (
        <section id="solution" className="section overflow-hidden pb-4">
            <div className="container">
                <h1 className="mb-4 text-primary font-weight-bold text-center">Our Solutions for</h1>
                <div className="row justify-content-center">
                    {solution.map((item, index) => {
                        let Icon = item.icon;
                        return (
                            <div className="col-lg-4 col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0" key={index}>
                                {/* Card with h-100 to ensure equal height */}
                                <div className="card p-4 rounded features features-classic h-100 d-flex flex-column">
                                    {/* Use Bootstrap d-flex to align image and text next to each other */}
                                    <div className="d-flex align-items-center mb-3">
                                        {/* Image */}
                                        <div className="fea-icon rounded shadow icon me-3">
                                            <Image src={Icon} alt={item.alt} width={65} height={55}/>
                                        </div>
                                        <div className="content">
                                            <h5 className="title text-dark">{item.title}</h5>
                                        </div>
                                    </div>
                                    {/* Add flex-grow to the content for proper alignment */}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
