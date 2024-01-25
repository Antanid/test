"use client"

import Header from "@/app/components/header";
import Seeking from "@/app/components/seeking";
import SeeMore from "@/app/components/see-more";
import CoreFeatures from "@/app/components/core-features";
import VerifiedProfiles from "@/app/components/verified-profiles";
import Reviews from "@/app/components/reviews";
import SignUp from "@/app/components/sign-up";
import Footer from "@/app/components/footer";
import {useEffect, useState} from "react";
import BurgerMenu from "@/app/components/burger-menu";

export default function Home() {
    const [isMenuOpen, setMenuOpen] = useState<boolean | null>(null);
    function handleChangeMenu () {
        setMenuOpen(prev => !prev)
    }
    return (
    <main>
<Header handleChangeMenu={handleChangeMenu} isMenuOpen={isMenuOpen}/>
        {isMenuOpen !== null &&  <BurgerMenu isMenuOpen={isMenuOpen}/>}
        <Seeking/>
        <SeeMore/>
        <CoreFeatures/>
        <VerifiedProfiles/>
        <Reviews/>
        <SignUp/>
        <Footer/>
    </main>
  );
}
