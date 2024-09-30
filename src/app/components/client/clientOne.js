'use client'
import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

const TinySlider = dynamic(() => import('tiny-slider-react'), { ssr: false });
import 'tiny-slider/dist/tiny-slider.css';

export default function ClientOne({ bgWhite }) {
    let settings = {
        container: '.tiny-three-item',
        controls: false,
        mouseDrag: true,
        loop: true,
        rewind: true,
        autoplay: true,
        autoplayButtonOutput: false,
        autoplayTimeout: 3000,
        navPosition: "bottom",
        speed: 400,
        gutter: 12,
        responsive: {
            992: {
                items: 3
            },

            767: {
                items: 2
            },

            320: {
                items: 1
            },
        },
    };

    let clientsData = [
        {
            image: '/images/client/01.jpg',
            name: 'Ahmed Osman',
            desc: '"WattWay has completely transformed how I manage my electric vehicle charging. The app connects me to all available charging stations in real time, no matter where I am in the UAE. I love the seamless experience – I can book a charging slot in just a few taps and even get directions right within the app."'
        },
        {
            image: '/images/client/02.jpg',
            name: 'Carl Oliver',
            desc: '"As someone who frequently travels long distances in my EV, WattWay has been a lifesaver. No more guesswork or scrambling to find available chargers on the road. The real-time access to all charging points is fantastic, and I feel more confident planning my trips."'
        },
        {
            image: '/images/client/03.jpg',
            name: 'Barbara McIntosh',
            desc: '"WattWay has become an essential tool for my EV charging. It gives me peace of mind knowing I have real-time access to all available charging stations. The app is super easy to use, and I never have to worry about finding a charger again."'
        },
        {
            image: '/images/client/04.jpg',
            name: 'Jill Webb',
            desc: '"The simplicity and efficiency of WattWay make it stand out from other EV apps I’ve tried. Being able to book a slot and get directions to the nearest charging point is such a relief during busy days."'
        },
        {
            image: '/images/client/05.jpg',
            name: 'Dean Tolle',
            desc: '"WattWay is a must-have for any EV driver in the UAE. It takes away all the hassle of finding and using charging stations. I highly recommend this app for anyone who wants a smooth EV charging experience."'
        },
        {
            image: '/images/client/06.jpg',
            name: 'Christa Smith',
            desc: '"I’ve been using WattWay for a while now, and it’s become my go-to app for finding EV chargers. It’s user-friendly and reliable, with real-time updates that make my journeys stress-free."'
        },
    ];

    return (
            <div className="row">
                <div className="col-12">
                    <div className="tiny-three-item">
                        <TinySlider settings={settings}>
                            {clientsData.map((item, index) => {
                                return (
                                    <div className="tiny-slide" key={index}>
                                        <div className={`${bgWhite === true ? 'bg-white shadow' : ''} card border-0 text-center`}>
                                            <div className="card-body">
                                                <Image src={item.image} width={65} height={65} className="img-fluid avatar avatar-small rounded-circle mx-auto shadow" alt="" />
                                                <p className="text-muted mt-4">{item.desc}</p>
                                                <h6 className="text-primary">- {item.name}</h6>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </TinySlider>
                    </div>
                </div>
            </div>
    );
}
