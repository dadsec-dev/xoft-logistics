import React from 'react';
import './hero.css';
// import heroimg from '../../assets/heroimg.png';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init({
  duration:1200,
});

const Hero = () => {
  return (
    <div className='hero'>
        <div className='herotext'>
            <h1 data-aos="zoom-in">Delivering Excellence in Sub-Saharan Africa</h1>
        </div>
    </div>
  )
}

export default Hero