import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSpring, animated } from 'react-spring';
import Header from './header';
import Footer from './footer';

const AboutUs = () => {
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
  });
  
  return (
    <>
      <Header />
      <animated.div style={fadeIn}>
      <div className="container mt-5">
        <h1 className="text-center mb-4">About Us</h1>

        <div className="row">
          <div className="col-md-6">
            <img
              src="https://img.freepik.com/free-photo/worker-hardhat-standing-sand-quarry_1303-28118.jpg?w=996&t=st=1700572042~exp=1700572642~hmac=5aa1a3fa900b73f12ea496568bdeb832721185f394d70ea4ca8776a7a06f5ee2" // Replace with an image related to mining
              alt="Mining Site"
              className="img-fluid rounded"
            />
          </div>
          <div className="col-md-6">
            <p>
              Welcome to our Mining Consultancy, your trusted partner in the mining industry. With a rich history
              and a commitment to excellence, we are dedicated to providing high-quality mining solutions that
              meet the needs of our clients.
            </p>

            <p>
              At Mining Consultancy, we understand the critical role mining plays in various industries, and
              we strive to deliver sustainable and responsible mining practices. Our team of experienced
              professionals is passionate about innovation and environmental stewardship.
            </p>

            <p>
              Key features of our company:
              <ul>
                <li>State-of-the-art mining technologies</li>
                <li>Environmentally conscious practices</li>
                <li>Safety-first approach</li>
                <li>Commitment to community development</li>
              </ul>
            </p>
          </div>
        </div>

        <div className="mt-4">
          <h2>Our Mission</h2>
          <p>
            Mining Consultancy is on a mission to become a global leader in sustainable mining. We aim to
            leverage cutting-edge technologies to extract valuable resources while minimizing our environmental
            impact. Our commitment to safety, innovation, and community engagement sets us apart in the mining
            industry.
          </p>
        </div>

        <div className="mt-4">
          <h2>Our Commitment to Sustainability</h2>
          <p>
            Sustainability is at the core of everything we do. We prioritize eco-friendly mining practices
            that minimize our ecological footprint. From reclamation efforts to efficient resource utilization,
            we are dedicated to preserving the environment for future generations.
          </p>
        </div>

        <div className="mt-4">
          <h2>Community Engagement</h2>
          <p>
          Mining Consultancy believes in giving back to the communities in which we operate. We actively
            engage with local communities to understand their needs and concerns. Through various initiatives
            and partnerships, we contribute to the social and economic development of the regions we serve.
          </p>
        </div>

        <div className="mt-4">
          <h2>Our Values</h2>
          <p>
            At Mining Consultancy, our values define who we are and guide our actions. We uphold principles of
            integrity, transparency, and accountability in every aspect of our business. These values drive our
            commitment to delivering exceptional mining solutions while maintaining the highest ethical standards.
          </p>
        </div>
      </div>
      </animated.div>
      <Footer />
    </>
  );
};

export default AboutUs;
