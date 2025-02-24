import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class About extends Component {

  render() {

    let publicUrl = process.env.PUBLIC_URL + '/'
    let imagealt = 'image'

    return <div className="about-section pd-top-80">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 align-self-center">
            <div className="section-title text-center mb-lg-0">
              <h2 className="title">Lets Go Travel With Us</h2>
              <p>We provide good car and bike on "rent" service at reasonable rates from Kudal to any place in Maharashtra, Goa & Karnataka.(India)<br/>

                We have "Ac/Non Ac" cars for Rental Purpose.<br/>

                "Railway/Airport" pick up-drop service.<br/>

                Also, we arrange "Sindhudurg sightseeing"& "Goa"Tours.
              </p>
            </div>
          </div>
          <div className="col-lg-5 offset-lg-2">
            <div className="thumb about-section-right-thumb">
              {/*<img src={publicUrl + "assets/img/others/9.png"} alt="img" />
              <img className="about-absolute-thumb" src={publicUrl + "assets/img/others/10.png"} alt="img" />*/}
            </div>
          </div>
        </div>
      </div>
    </div>

  }
}

export default About