import React from 'react';
import Banner from '../banner/Banner';
import Services from '../services/Services';
import LogoSlider from '../logoSlider/LogoSlider';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <LogoSlider></LogoSlider>
        </div>
    );
};

export default Home;