import React from 'react';
import {Navbar, Footer} from '../../components'
import './services.css';
import trace from '../../assets/trace.jpeg';
import stress from '../../assets/stress.jpeg';
import warehouse from '../../assets/warehouse.jpeg';
import fright from '../../assets/fright.jpeg';
import marine from '../../assets/marine.jpeg';
import project from '../../assets/project.jpeg';
import door from '../../assets/door.jpeg';
import financing from '../../assets/financing.jpeg'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init({
  duration:1200,
});


const Services = () => {
  return (
    <div>
        <Navbar />

        <div className='services'>
          <h1 className='servicestext'>Our Services</h1>

        </div>

        <div className="serv">
      {/* <div className="servtext">
        <h1 data-aos="slide-up">Why Xoft Logistics Limited ?</h1>
      </div> */}

      <div className="serve-flex">

      <div className="serveblocks" data-aos="slide-up">
          <img src={financing} alt="" />

          <div>
            <h3>Import Financing</h3>

            <p>
            At Xoft Logistics Limited, we understand the financial challenges of importing goods. We offer import financing services to help you manage your cash flow effectively. Our experienced team works closely with financial institutions to provide tailored financing solutions that meet your needs. Whether you require short-term financing, trade finance, or letters of credit, we support your import operations and ensure a seamless supply chain.

            </p>
          </div>
        </div>

        <div className="serveblocks" data-aos="slide-up">
          <img src={door} alt="" />

          <div>
            <h3>Door-2-Door Delivery</h3>

            <p>
            Our Door-2-Door service takes care of every aspect of your logistics needs, from pickup to final delivery. Our dedicated team coordinates the entire process, ensuring that your goods are collected from the point of origin and delivered directly to the designated destination. We handle all customs documentation, transportation, and last-mile delivery, providing a hassle-free and convenient logistics solution.

            </p>
          </div>
        </div>






        <div className="serveblocks" data-aos="slide-up">
          <img src={marine} alt="" />

          <div>
            <h3>Barge Marine Solutions</h3>

            <p>
            Xoft Logistics Limited provides efficient and cost-effective barge marine solutions for transporting goods via waterways. Whether you require bulk cargo transportation, heavy lift capabilities, or containerized shipping, our barge services offer a reliable and eco-friendly option. We ensure smooth operations and timely delivery while optimizing costs and minimizing environmental impact.
            </p>
          </div>
        </div>



        <div className="serveblocks" data-aos="slide-up">
          <img src={fright} alt="" />

          <div>
            <h3>Sea and Air Freight</h3>

            <p>
            As a leading logistics service provider, we offer sea and air freight solutions to meet your specific requirements. Our extensive network and partnerships with reliable carriers provide efficient and competitive shipping options. Whether you need cost-effective sea freight for large-volume shipments or time-sensitive air freight for urgent deliveries, we have the expertise and resources to manage your cargo carefully and deliver it to its destination on time.
            </p>
          </div>
        </div>

        <div className="serveblocks" data-aos="slide-up">
          <img src={project} alt="" />

          <div>
            <h3>Project Management</h3>

            <p>
            We offer comprehensive project management services for complex logistics projects. Our experienced project managers oversee every aspect of your project, from planning and coordination to execution and monitoring. We develop customized strategies and manage logistics activities, ensuring seamless integration and efficient operations. With our project management expertise, you can trust us to handle the complexities of your logistics projects with precision and professionalism.
            </p>
          </div>
        </div>


        <div className="serveblocks" data-aos="slide-up">
          <img src={warehouse} alt="" />

          <div>
            <h3>Warehousing</h3>

            <p>
            Our secure and strategically located warehouses are designed to meet your storage and distribution needs. We offer flexible warehousing solutions for short-term and long-term storage, inventory management, and order fulfillment. Our state-of-the-art facilities are equipped with advanced security systems, ensuring the safety of your goods. With our warehousing services, you can optimize your inventory management and streamline your supply chain.

            </p>
          </div>
        </div>


        <div className="serveblocks" data-aos="slide-up">
          <img src={stress} alt="" />

          <div>
            <h3>Haggle-Free Service</h3>

            <p>
            At Xoft Logistics Limited, we believe in providing a haggle-free experience for our clients. We offer transparent pricing and strive to deliver value beyond expectations. Our dedicated team works closely with you to understand your needs and provide accurate and competitive quotes. With our commitment to integrity and professionalism, you can trust us to deliver a hassle-free service that meets your logistics requirements.

            </p>
          </div>
        </div>


        <div className="serveblocks" data-aos="slide-up">
          <img src={trace} alt="" />

          <div>
            <h3>Track and Trace</h3>

            <p>
            With our advanced tracking and tracing capabilities, you can always stay updated on the status of your shipments. Our integrated systems allow for real-time monitoring, providing visibility and transparency throughout logistics. You can easily track your goods and access detailed information, ensuring peace of mind and enabling effective supply chain management.

            </p>
          </div>
        </div>


      </div>
    </div>
        <Footer />
    </div>
  )
}

export default Services