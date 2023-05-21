import { Navbar, Footer } from "../../components";
import "./about.css";

import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init({
  duration:1200,
});

const About = () => {
  return (
    <div>
      <Navbar />

      <div className="abut">
        <h1 className="abuttext">ABOUT</h1>
      </div>

      <div className="asideabut" data-aos="zoom-in">
        <img
          src="https://cdn.discordapp.com/attachments/1105983110744641646/1109640665832362086/Australia0_1ww.png"
          alt="map"
        />

        <div className="abouttright" data-aos="zoom-out">
          <h2>
            Welcome to Xoft Logistics Limited, a leading logistics service
            provider in sub-Saharan Africa. We specialize in inbound logistics
            and offer custom-made solutions to meet the unique needs of our
            clients. Our integrated logistics service covers the entire supply
            chain, providing a competitive advantage for businesses.
          </h2>

          <p>
            <strong>Tailored Solutions for Inbound Logistics:</strong> At Xoft Logistics Limited,
            we deliver tailored solutions for inbound logistics. We understand
            the importance of efficiently managing, transporting and delivering
            goods and materials. Our expertise allows us to align our services
            with each client's requirements, whether small businesses or large
            corporations.
          </p>

          <p>
            <strong>Streamlining the Supply Chain:</strong> Our comprehensive logistics services
            empower clients to simplify their supply chain operations. From
            procurement and inventory management to warehousing, transportation,
            and distribution, we leverage our knowledge, resources, and network
            to optimize logistical processes. Businesses can gain a competitive
            edge in their respective industries by partnering with us.
          </p>

          <p>
            <strong>Commitment to Excellence and Sustainability:</strong> At Xoft Logistics
            Limited, we take pride in our commitment to excellence. Our team
            comprises highly skilled professionals who stay updated with the
            latest technological advancements and industry best practices. We
            are dedicated to providing exceptional customer service, building
            long-term partnerships based on trust, reliability, and
            transparency. Furthermore, we are deeply committed to sustainable
            practices and environmental responsibility. We actively seek ways to
            reduce our carbon footprint and promote eco-friendly initiatives in
            our operations. By choosing Xoft Logistics Limited as your logistics
            partner, you can be confident that your goods are handled with care
            and consideration for the environment.
          </p>

          <p>
            <strong>Experience the Xoft Logistics Limited Difference:</strong> Unlock the full
            potential of your supply chain by experiencing the Xoft Logistics
            Limited difference. Contact us today to discuss your logistics needs
            and witness how our expertise can drive your business forward.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
