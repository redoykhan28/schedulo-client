import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Info from '../Info/Info';
import Section3 from '../Section3/Section3';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <section className='w-11/12 mx-auto'>
                <Banner></Banner>
            </section>
            <section className='w-11/12 mx-auto mt-28'>
                <Info></Info>
            </section>
            <section className='w-11/12 mx-auto mt-20'>
                <Services></Services>
            </section>
            <section className='w-11/12 mx-auto mt-20'>
                <Section3></Section3>
            </section>
            <section className='w-11/12 mx-auto my-20'>
                <Contact></Contact>
            </section>
        </div>
    );
};

export default Home;