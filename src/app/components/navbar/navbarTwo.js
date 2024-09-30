'use client'
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from 'next/navigation';

export default function NavbarTwo({ navClass, manuClass, navDark }) {
    let [scroll, setScroll] = useState(false);
    let [isMenu, setisMenu] = useState(false);
    let [searchBox, setSearchBox] = useState(false);
    let [manu, setManu] = useState('');
    let pathname = usePathname();

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
                                {/* Use native anchor links for smooth scrolling */}
                                <Link href="/#hero-section" onClick={() => setisMenu(false)}>Home</Link>
                            </li>
                            <li>
                                <Link href="/#services" onClick={() => setisMenu(false)}>Services</Link>
                            </li>
                            <li>
                                <Link href="/#about" onClick={() => setisMenu(false)}>About</Link>
                            </li>
                            <li>
                                <Link href="/#reviews" onClick={() => setisMenu(false)}>Reviews</Link>
                            </li>
                            <li>
                                <Link href="/#faq" onClick={() => setisMenu(false)}>Faq</Link>
                            </li>
                            <li>
                                <Link href="/#download" onClick={() => setisMenu(false)}>Download</Link>
                            </li>
                            <li>
                                <Link href="/page-contact" className="sub-menu-item" onClick={() => setisMenu(false)}>Contact us</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        </>
    );
}
