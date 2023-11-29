import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import vision from '../images/vision.jpg';
import comm1 from '../images/comm1.jpg';
import aboutmix from '../images/aboutmix .jpg';
import community1 from '../images/community1.webp';
import community2 from '../images/community2.webp';
import community3 from '../images/community3.jpg';
import community4 from '../images/community4.webp';
import community5 from '../images/community5.jpg';
import community6 from '../images/community6.jpg';
import Spotted from './Spotted';




function About() {
  return (
    <>
      <div>
        <span className='collab1'>ABOUT US</span>
        <br></br>
        <p className='collaba'></p>
        <iframe height='660' width='100%' src="https://www.youtube.com/embed/D0Qd_utHHvM?iv_load_policy=3&enablejsapi=1&disablekb=1&autoplay=0&controls=0&rel=0&loop=0&playsinline=1&modestbranding=1&autohide=1&branding=0&cc_load_policy=0&fs=0&quality=hd1080&wmode=transparent&height=100%25&width=100%25&origin=https%3A%2F%2Fwww.urbanmonkey.com&widgetid=1"></iframe>

      </div>

      <div>
        <span className='vision'>VISION</span>
        <img className='vision_img' src={vision}></img>
        <div className='para_vision '>
        <div className='px-5'><p>We aspire to create designs that are a blend of passion and love for our culture. We aim to help our community express and explore their inner street artist. We strive to encourage and uplift everyday artists by giving them the tools to overcome their challenges, and build a community of like-minded people. By helping one another, we believe our community has the power to change the world.</p></div>
        <div className='px-4'>
        <p>The hustle is real. There are no rules for achieving your goals and living the life that you want to live. We are determined to change the severe lack of representation and awareness of this multi-talented underground street community of India.</p></div>
        </div>
        
        <div>
        <span className='vision'>community</span>
        </div>
<div className='commu_main'>
<div><img className='comm1' src={comm1}></img>  </div> 
<div><b>we commit everyday to grow and help make</b>
<p>India's underground community the most powerful & rich underground community of the world</p></div>  
</div>   
      </div>

<div>
  <span className='timeline'> timeline</span>
</div>
<div className='mainmix'>
  <div className='paragraph'> <p>What started in 2013, with a simple goal of increasing awareness about the skate culture in Mumbai, has now evolved into a deep rooted passion towards accelerating the growth of our community. </p> 
  <p>Just like the community we represent, we are unorthodox in our methods, eccentric in our style, and determined in our approach. We strive to keep our work unique and smart, with room for a little magic.</p> </div>
  <div><img src={aboutmix }></img> </div>
 
</div>

<span className="monkey">URBAN MONKEY PLANET</span>


<div>
<div className='community-main'>
  <div><img src={community1}></img></div>
  <div><img src={community2}></img></div>
</div>


<div className='community-main'>
  <div><img src={community3}></img></div>
  <div><img src={community4}></img></div>
</div>


<div className='community-main'>
  <div><img src={community5}></img></div>
  <div><img src={community6}></img></div>
</div>
</div>
<Spotted/>
    </>

  )
}

export default About
