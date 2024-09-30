'use client'
import React, { useState } from "react";

export default function Faq() {
    let [activeIndex, setActiveIndex] = useState(0);

    let accordionData = [
        {
            id: 1,
            title: 'How does WattWay help EV drivers?',
            desc: 'WattWay connects EV drivers with all available charging stations across the UAE through one app. The platform provides real-time access to charging points, allowing drivers to locate, book, and navigate to charging stations effortlessly.'
        },
        {
            id: 2,
            title: 'Can Charging Point Operators (CPOs) monitor their stations using WattWay?',
            desc: 'Yes, WattWay offers a comprehensive monitoring solution for CPOs, enabling them to track usage, performance, and manage charging points efficiently.'
        },
        {
            id: 3,
            title: 'Is the WattWay app free for EV drivers?',
            desc: 'The WattWay app is free to download for EV drivers, giving them access to real-time charging information, navigation, and station bookings. However, fees for charging services may apply based on the CPOs’ rates.'
        },
        {
            id: 4,
            title: 'How do I book a charging station using WattWay?',
            desc: 'With the WattWay app, you can easily search for available charging stations, check station details, and book a slot to charge your vehicle at a convenient time.'
        },
        {
            id: 5,
            title: 'Does WattWay provide navigation to charging stations?',
            desc: 'Yes, the app provides built-in navigation, guiding EV drivers directly to the nearest or most convenient charging station, ensuring a seamless experience.'
        },
        {
            id: 6,
            title: 'How does WattWay ensure charging station availability?',
            desc: 'WattWay provides real-time updates on the availability of charging stations across the UAE. EV drivers can check station occupancy and status before heading to the location, ensuring they find available chargers.'
        },
        {
            id: 7,
            title: 'Is WattWay compatible with all EV charging stations in the UAE?',
            desc: 'WattWay aggregates all publicly available EV charging stations in the UAE, making it a one-stop platform for drivers, regardless of the charging station brand or operator.'
        },
        {
            id: 8,
            title: 'Can I track my charging session through the WattWay app?',
            desc: 'Yes, EV drivers can monitor their charging sessions, including the charging status, estimated time remaining, and other useful information, directly from the app.'
        },
        {
            id: 9,
            title: 'How does WattWay support EV adoption in the UAE?',
            desc: 'WattWay makes EV ownership more convenient by simplifying the charging process, ensuring that drivers have easy access to charging stations and helping CPOs maintain an efficient network. This contributes to the wider adoption of electric vehicles in the UAE.'
        },
        {
            id: 10,
            title: 'How can I get support or assistance with WattWay?',
            desc: 'You can reach out to our customer support team through the app for any assistance or queries regarding your charging experience or our platform.'
        }
    ];

    return (
        <>
            <div id={'faq'} className="row justify-content-center">
                <div className="col-12">
                    <div className="section-title mb-4 pb-2 text-center">
                        <h4 className="title mb-3">Frequently Asked Questions</h4>
                        <p className="text-muted mx-auto para-desc mb-0">
                            Learn more about how WattWay simplifies electric vehicle charging for drivers and Charging Point Operators (CPOs) across the UAE.
                        </p>
                    </div>
                </div>
            </div>

            <div  className="row justify-content-center">
                <div className="col-lg-10 mt-4 pt-2">
                    <div className="accordion" id="buyingquestion">
                        <div className="row">
                            <div className="col-md-6">
                                {accordionData.slice(0, 5).map((item, index) => (
                                    <div className="accordion-item rounded border-0 shadow mt-3" key={index}>
                                        <h2 className="accordion-header" id={`heading${item.id}`}>
                                            <button className={`${activeIndex === item.id ? '' : 'collapsed'} accordion-button border-0 bg-white`} onClick={() => activeIndex === item.id ? setActiveIndex(0) : setActiveIndex(item.id)}>
                                                {item.title}
                                            </button>
                                        </h2>
                                        {activeIndex === item.id ? (
                                            <div id={`collapse${item.id}`} className="show accordion-collapse border-0 collapse">
                                                <div className="accordion-body text-muted bg-white">
                                                    {item.desc}
                                                </div>
                                            </div>
                                        ) : ''}
                                    </div>
                                ))}
                            </div>

                            <div className="col-md-6">
                                {accordionData.slice(5, 10).map((item, index) => (
                                    <div className="accordion-item rounded border-0 shadow mt-3" key={index}>
                                        <h2 className="accordion-header" id={`heading${item.id}`}>
                                            <button
                                                className={`${activeIndex === item.id ? '' : 'collapsed'} accordion-button border-0 bg-white`}
                                                onClick={() => activeIndex === item.id ? setActiveIndex(0) : setActiveIndex(item.id)}>
                                                {item.title}
                                            </button>
                                        </h2>
                                        {activeIndex === item.id ? (
                                            <div id={`collapse${item.id}`} className="show accordion-collapse border-0 collapse">
                                                <div className="accordion-body text-muted bg-white">
                                                    {item.desc}
                                                </div>
                                            </div>
                                        ) : ''}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
