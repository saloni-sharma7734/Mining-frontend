// KaolinPage.js
import React from 'react';
import Header from './header';
import Footer from './footer';
import kaolinImage from '../images/Kaolinite_from_Twiggs_County_in_Georgia_in_USA.jpg';
import './kaolin.css'; 
const KaolinPage = () => {
  return (
    <div>
      <Header />
      <section id="introduction">
        <div className="image-container">
          <img src={kaolinImage} alt="Kaolin mining" height={'300px'} />
        </div>
        <div className="text-container">
          <h2>Kaolin Details</h2>
          <p>
            Kaolin is a versatile clay mineral known for its applications in ceramics, paper, paint, plastics, and more.
            Our mining operations focus on extracting high-quality kaolin while prioritizing sustainability and
            environmental responsibility.
          </p>
        </div>
      </section>

      <section id="benefits">
        <div className='text'>

       
        <center>
          <h2>More About Kaolin</h2>
        </center>
        </div>
        <div className="row">
          <div className="col-sm-3">
            <div className="card ">
              <div className="card-body">
                <h5 className="card-title">Enhanced Ceramics</h5>
                <p className="card-text">
                  Kaolin, with its unique properties, contributes to the strength and brilliance of ceramics.
                </p>
                {/* <a href="#" className="btn btn-primary">
                  Buy
                </a> */}
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Premium Paper Coating</h5>
                <p className="card-text">
                  Improve printability and smoothness in the paper industry with our high-quality kaolin.
                </p>
                {/* <a href="#" className="btn btn-primary">
                  Buy
                </a> */}
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Versatile in Plastics</h5>
                <p className="card-text">
                  Kaolin acts as a reinforcing agent, enhancing the strength and stiffness of plastic products.
                </p>
                {/* <a href="#" className="btn btn-primary">
                  Buy
                </a> */}
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">High-Quality Paints</h5>
                <p className="card-text">
                  Utilize kaolin as a functional extender for improved durability and texture in paints.
                </p>
                {/* <a href="#" className="btn btn-primary">
                  Buy
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default KaolinPage;
