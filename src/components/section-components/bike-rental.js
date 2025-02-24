import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';


class Bike extends Component {

  render() {

    let publicUrl = process.env.PUBLIC_URL + '/'
    let imagealt = 'image'

    return <div className="about-section pd-top-80">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 align-self-center">
            <div className="section-title text-center mb-lg-0">
              <h2 className="title">Bike Rental in Kudal, Hire Two Wheeler</h2>
              <p>Hire two wheeler on rent in Kudal with Zero Deposit for long drive, Konkan Sightseeing. Activa ,Jupiter, TVS IQ, Royal Enfield Available.</p>
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

export default Bike