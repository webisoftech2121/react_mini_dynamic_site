import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';


class SelfDriveCar extends Component {

  render() {

    let publicUrl = process.env.PUBLIC_URL + '/'
    let imagealt = 'image'

    return <div className="about-section pd-top-80">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 align-self-center">
            <div className="section-title text-center mb-lg-0">
              <h2 className="title">Book Self Drive Car Rental in Kudal, Sindhudurg. </h2>
              <p>Simply call 9595311850 to book a self drive car on rent in Kudal. Rent a Car in Kudal Sindhudurg will provide you 24/7 facility and hand over the keys to you at any time. </p>
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

export default SelfDriveCar