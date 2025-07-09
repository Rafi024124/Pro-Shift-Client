import React from 'react';
import Banner from '../banner/Banner';
import Services from '../services/Services';
import LogoSlider from '../logoSlider/LogoSlider';
import BenefitSection from '../benefitSection/BenefitSection';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <LogoSlider></LogoSlider>
            <BenefitSection></BenefitSection>
        </div>
    );
};

export default Home;