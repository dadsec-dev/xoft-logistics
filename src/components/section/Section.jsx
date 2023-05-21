import React from 'react';
import './section.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init({
  duration:1200,
});

const Section = () => {
  return (
    <div>
      <div className='section'>
        <h1 className='section-h1' data-aos="fade-down">Xoft Logistics</h1>

        <p className='section-p1' data-aos="zoom-out">Xoft Logistics Limited is a leading logistics service provider in sub-Saharan Africa, offering top-notch services. We specialize in inbound logistics with a focus on providing custom-made solutions to meet the needs of our clients. Our integrated logistics service covers the entire supply chain, helping clients gain a competitive advantage.</p>
      </div>
    </div>
  )
}

export default Section