'use client'
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from 'next/navigation';
import {router} from "next/client";

export default function NavbarTwo({ navClass, manuClass, navDark }) {
    let [scroll, setScroll] = useState(false);
    let [isMenu, setisMenu] = useState(false);
    let [searchBox, setSearchBox] = useState(false);
    let [manu, setManu] = useState('');
    let pathname = usePathname();
    const router = useRouter();

    useEffect(() => {
        // Check if there's a hash in the URL
        if (router.isReady) {
            if (router.asPath.includes("#")) {
            const id = router.asPath.split("#")[1];
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }}
    }, [router]);

    useEffect(() => {
        setManu(pathname);

        function scrollHandler() {
            setScroll(window.scrollY > 50);
        }

        if (typeof window !== "undefined") {
            window.addEventListener('scroll', scrollHandler);
        }

        return () => {
            window.removeEventListener('scroll', scrollHandler);
        };
    }, [setManu]);

    // Toggle menu
    const toggleMenu = () => {
        setisMenu(!isMenu);
    };

    return (
        <>
            <header id="topnav" className={`${scroll ? "nav-sticky" : ""} ${navClass}`}>
                <div className="container">
                    <Link className="logo" href="/">
                        <span className="logo-light-mode">
                            <Image src='/images/logo.png' width={60} height={60} className="l-dark" alt=""/>
                            <Image src='/images/logo.png' width={60} height={60} className="l-light" alt=""/>
                        </span>
                        <Image src='/images/logo.png' width={110} height={30} className="logo-dark-mode" alt=""/>
                    </Link>
                    <div className="menu-extras">
                        <div className="menu-item">
                            <Link href="#" className={`navbar-toggle ${isMenu ? 'open' : ''}`} id="isToggle" onClick={() => toggleMenu()}>
                                <div className="lines">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div id="navigation" style={{ display: isMenu ? 'block' : 'none' }}>
                        <ul className={manuClass}>
                            <li>
                                <Link href="/#hero-section" onClick={(e) => {
                                    e.preventDefault();
                                    const section = document.getElementById('hero-section');
                                    section.scrollIntoView({ behavior: 'smooth' });
                                    setisMenu(false);
                                }}>Home</Link>
                            </li>
                            <li>
                                <Link href="/#services" onClick={(e) => {
                                    e.preventDefault();
                                    const section = document.getElementById('services');
                                    section.scrollIntoView({ behavior: 'smooth' });
                                    setisMenu(false);
                                }}>Services</Link>
                            </li>
                            <li>
                                <Link href="/#about" onClick={(e) => {
                                    e.preventDefault();
                                    const section = document.getElementById('about');
                                    section.scrollIntoView({ behavior: 'smooth' });
                                    setisMenu(false);
                                }}>About</Link>
                            </li>
                            <li>
                                <Link href="/#reviews" onClick={(e) => {
                                    e.preventDefault();
                                    const section = document.getElementById('reviews');
                                    section.scrollIntoView({ behavior: 'smooth' });
                                    setisMenu(false);
                                }}>Reviews</Link>
                            </li>
                            <li>
                                <Link href="/#faq" onClick={(e) => {
                                    e.preventDefault();
                                    const section = document.getElementById('faq');
                                    section.scrollIntoView({ behavior: 'smooth' });
                                    setisMenu(false);
                                }}>Faq</Link>
                            </li>
                            <li>
                                <Link href="/#download" onClick={(e) => {
                                    e.preventDefault();
                                    const section = document.getElementById('download');
                                    section.scrollIntoView({ behavior: 'smooth' });
                                    setisMenu(false);
                                }}>Download</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        </>
    );
}
