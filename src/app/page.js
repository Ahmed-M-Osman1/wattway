import React from "react";
import NavbarTwo from "./components/navbar/navbarTwo";
import ScrollTop from "./components/scrollTop";
import Partners from "./components/partners";
import Counter from "./components/counter";
import ClientOne from "./components/client/clientOne";
import Faq from "./components/faq";
import MobileApp from "./components/mobileApp";
import Footer from "./components/footer/footer";
import HeroSection from "./components/section/heroSection";
import FeaturesSection from "./components/section/featuresSection";
import AnalyticsSection from "./components/section/analyticsSection";
import ReviewsSection from "./components/section/reviewsSection";

export default function IndexApplication() {
    return (
        <>
            <NavbarTwo navClass="defaultscroll sticky" manuClass="navigation-menu nav-right nav-light" />
            <HeroSection />
            <Partners />
            <FeaturesSection />
            <AnalyticsSection />
            <Counter />
            <ReviewsSection />
            <ClientOne />
            <Faq />
            <MobileApp />
            <Footer />
            <ScrollTop />
        </>
    );
}
