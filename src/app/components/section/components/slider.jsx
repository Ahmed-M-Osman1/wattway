'use client'
import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

const TinySlider = dynamic(() => import('tiny-slider-react'), { ssr: false });
import 'tiny-slider/dist/tiny-slider.css';

export default function PhotoSlider() {
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
                items: 2
            },
            767: {
                items: 2
            },
            320: {
                items: 2
            },
        },
    };

    // Replace with your own 3 photos
    let photoData = [
        { image: '/images/app/booking.png' },
        { image: '/images/app/filter.png' },
        { image: '/images/app/wattniya.png' },
        { image: '/images/app/qr.png' },
        { image: '/images/app/directions.png' },
        { image: '/images/app/charging.png' },
    ];

    return (
        <div className="tiny-three-item">
            <TinySlider settings={settings}>
                {photoData.map((item, index) => (
                    <div className="tiny-slide" key={index}>
                        <Image
                            src={item.image}
                            width={300}
                            height={200}
                            className="img-fluid"
                            alt={`Slide ${index + 1}`}
                        />
                    </div>
                ))}
            </TinySlider>
        </div>
    );
}
