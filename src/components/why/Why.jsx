import React from "react";
import "./why.css";
import efficient from "../../assets/efficient.jpeg";
import customized from "../../assets/customized.jpeg";
import networks from "../../assets/networks.jpeg";
import expertise from "../../assets/expertise.png";
import customer from "../../assets/customer.jpeg";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init({
  duration:1200,
});

const Why = () => {
  return (
    <div className="why">
      <div className="y">
        <h1 data-aos="slide-up">Why Xoft Logistics Limited ?</h1>
      </div>

      <div className="why-flex">
        <div className="blocks" data-aos="slide-up">
          <img src={efficient} alt="" />

          <div>
            <h3>Reliable and Efficient Services</h3>

            <p>
              At Xoft Logistics Limited, reliability, and efficiency are at the
              core of our operations. We understand the critical role that
              logistics plays in the success of businesses. That's why we have
              built a reputation for delivering dependable services you can rely
              on. Our dedicated team works tirelessly to ensure your goods and
              materials are handled carefully and transported efficiently to
              their destination. With our streamlined processes and advanced
              tracking systems, you can trust us to meet your logistics needs
              with precision and timeliness.
            </p>
          </div>
        </div>



        <div className="blocks" data-aos="slide-up">
          <img src={customized} alt="" />

          <div>
            <h3>Customized Solutions</h3>

            <p>
            One size does not fit all regarding logistics. Every business has unique requirements and challenges. That's why we offer customized solutions tailored to your specific needs. Our team takes the time to understand your business, objectives, and logistical requirements. With this knowledge, we develop personalized logistics strategies that optimize your supply chain and drive operational efficiency. Whether you need specialized handling, time-sensitive deliveries, or complex distribution solutions, we have the expertise to design and implement the correct answer.
            </p>
          </div>
        </div>


        <div className="blocks" data-aos="slide-up">
          <img src={networks} alt="" />

          <div>
            <h3>Extensive Network and Resources</h3>

            <p>
            As a leading logistics service provider, we have established an extensive network and have access to a wide range of resources. Our partnerships with reliable carriers, warehouses, and suppliers enable us to provide comprehensive logistics services across sub-Saharan Africa. Whether your goods must be transported by road, air, or sea, we have the network and resources to facilitate smooth and efficient operations. Our well-equipped warehouses ensure secure storage and efficient handling of your goods. At the same time, our advanced technology systems allow for seamless tracking and monitoring at every stage of the supply chain.

            </p>
          </div>
        </div>


        <div className="blocks" data-aos="slide-up">
          <img src={expertise} alt="" />

          <div>
            <h3>Expertise and Industry Knowledge</h3>

            <p>
            With years of experience in the logistics industry, our team of experts brings valuable expertise and industry knowledge to every project we undertake. We stay up-to-date with the latest trends, technologies, and best practices in logistics to ensure that we provide our clients with the most efficient and innovative solutions. Our team's deep understanding of the logistics landscape in sub-Saharan Africa allows us to navigate potential challenges and provide proactive solutions. When you partner with Xoft Logistics Limited, you can trust that your logistics operations are in the hands of knowledgeable professionals who are dedicated to your success.

            </p>
          </div>
        </div>


        <div className="blocks" data-aos="slide-up">
          <img src={customer} alt="" />

          <div>
            <h3>Customer Satisfction</h3>

            <p>
            At Xoft Logistics Limited, customer satisfaction is our top priority. We go the extra mile to ensure our clients receive exceptional service and support throughout their logistics journey. Our dedicated customer service team can address any queries or concerns, providing timely and efficient assistance. We believe in building long-term partnerships based on trust, transparency, and open communication. Your success is our success, and we are committed to working closely with you to achieve your business goals.
            </p>
          </div>
        </div>


      </div>
    </div>
  );
};

export default Why;
