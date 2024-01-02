import React from 'react';
import { useSpring, animated } from 'react-spring';
import Header from './header';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import mineImage from '../images/mining1.jpg';
import Image2 from '../images/aerial-shot-st-audries-bay-waterfall-west-quantoxhead-sunny-summer-day.jpg';
import Image3 from '../images/sustainable-living-environmentalist-hand-holding-green-earth.jpg';
import { FaCheckCircle } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Footer from './footer';

const Home = () => {
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
  });

  return (
    <div className="home-container">
      <Header />
      <animated.div style={fadeIn}>
        <div className="container mt-4">
          <div className="row">
            <div className="col-md-6">
              <h1 className="display-4" style={{ fontWeight: 'bold', fontSize: '4rem', fontFamily: 'Roboto, sans-serif', color: 'black', marginBottom: '3rem', border: 'none' }}><b>Welcome to MineCare.</b></h1>
              <p className="lead" style={{ color: 'black' }}>Your Trusted Mining Consultancy Partner!</p>
              <p className="lead" style={{ color: 'black' }}>
                At our Mining Consultancy, we stand at the forefront of the mining industry, offering unparalleled expertise and innovative solutions to drive success for your mining ventures. With a passion for excellence and a commitment to sustainable practices, we are your go-to partner for navigating the complexities of the mining landscape.
              </p>
              <div className="mb-4">
                <h5 style={{ color: 'black' }}>Why Choose Us?</h5>
                <ul className="list-unstyled">
                  <li><FaCheckCircle className="text-success" /> Mining Plan</li>
                  <li><FaCheckCircle className="text-success" /> Environment clearance</li>
                  <li><FaCheckCircle className="text-success" /> Environmentally Friendly Practices</li>
                  <li><FaCheckCircle className="text-success" /> Pollution clearance</li>
                  <li><FaCheckCircle className="text-success" /> New Lease</li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <img src= {Image2} style={{height:'400px',width:'650px'}}/>
            </div>
          </div>

          {/* <hr className="my-4" /> */}

          <div className="colored-div" style={{ background: '#333', height: '200px', width: '100%', marginBottom: '20px', position: 'relative' }}>
  <div style={{ position: 'absolute', top: 0, bottom: 0, right: '75%', overflow: 'hidden', zIndex: 1 }}>
    <img src={Image3} alt="Image" style={{ width: '110%', height: '100%', objectFit: 'cover' }} />
  </div>
  <div style={{ position: 'absolute', top: 0, bottom: 0, left: '30%', textAlign: 'right', color: '#fff', padding: '20px' }}>
    <h3 style={{ fontWeight: 'bold', marginBottom: '10px' }}>Promoting Environmental Stewardship</h3>
    <p style={{ fontSize: '16px' }}>
      Our commitment extends beyond mining – we champion sustainable practices for a healthier planet. 
      Explore how we blend innovation with environmental responsibility.
    </p>
  </div>
</div>

        </div>
      </animated.div>
      <Footer />
    </div>
  );
};

export default Home;
