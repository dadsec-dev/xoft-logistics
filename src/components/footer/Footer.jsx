import React from 'react';
import './footer.css';
import Facebook from '../../assets/Facebook.png';
import youtube from '../../assets/youtube.png';
import twitter from '../../assets/Twitter.png';


const Footer = () => {
  return (
    <div className='footer'>


      <div className='f-deets'>
        <h1>Xoft logistics</h1>
        <p>ABN: 71 667 7415675</p>
        <p>Address: Frizy street, cleeland, QLD 4163 Australia.</p>
        <p>Email: admin@info.com</p>

      </div>



      <div className='socials'>
       <a href="http://"> <img src={Facebook} alt='facebook' /></a>
       <a href="http://"><img src={youtube} alt='youtube' /></a> 
       <a href="http://"><img src={twitter} alt='twitter' /></a> 
      </div>
    </div>
  )
}

export default Footer