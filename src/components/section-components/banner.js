import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Banner extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return  <div className="banner-area viaje-go-top">
			  <div className="banner-slider">
			    <div className="banner-slider-item banner-bg-1">
			      <div className="container">
			        <div className="row">
			          <div className="col-xl-8 col-lg-9 offset-xl-2 offset-lg-1">
			            <div className="row">
			              <div className="col-lg-9 col-sm-8">
			                <div className="banner-inner">
			                  <p className="banner-cat s-animate-1">Hot Places</p>
			                  <h2 className="banner-title s-animate-2">Rent, ride, and<br /> explore with ease.</h2>
			                </div>
			              </div>
			              {/* <div className="col-lg-3 col-sm-4">
			                <div className="video-popup-btn s-animate-video">
			                  <a href="https://www.youtube.com/watch?v=c7XEhXZ_rsk" className="video-play-btn mfp-iframe"><i className="fa fa-play" /></a>
			                </div>
			              </div> */}
			              {/* <div className="col-lg-12 banner-tour-package">
			                <div className="row">
			                  <div className="col-sm-4 s-animate-3">
			                    <div className="tp-price-meta">
			                      <p>Price</p>
			                      <h2>620 <small>$</small></h2>
			                      <p className="tp-price-meta-details">7 Days Tour <span>on 2 person</span></p>
			                    </div>
			                  </div>
			                  <div className="col-sm-4 s-animate-4">
			                    <div className="tp-price-meta">
			                      <p>5 Star</p>
			                      <h2>Hotel</h2>
			                      <p className="tp-price-meta-details">Hotels <span>to choice</span></p>
			                    </div>
			                  </div>
			                  <div className="col-sm-4 s-animate-5">
			                    <div className="tp-price-meta">
			                      <p>Flight date</p>
			                      <h2>17</h2>
			                      <p className="tp-price-meta-details">September <span>or later</span></p>
			                    </div>
			                  </div>
			                </div>
			              </div> */}
			            </div>
			          </div>
			        </div>
			      </div>
			    </div>
			    <div className="banner-slider-item banner-bg-2">
			      <div className="container">
			        <div className="row">
			          <div className="col-xl-8 col-lg-9 offset-xl-2 offset-lg-1">
			            <div className="row">
			              <div className="col-lg-9 col-sm-8">
			                <div className="banner-inner">
			                  <p className="banner-cat s-animate-1">Hot Places</p>
			                  <h2 className="banner-title s-animate-2">Two wheels, endless<br />adventures.</h2>
			                </div>
			              </div>
			              {/* <div className="col-lg-3 col-sm-4">
			                <div className="video-popup-btn s-animate-video">
			                  <a href="https://www.youtube.com/watch?v=c7XEhXZ_rsk" className="video-play-btn mfp-iframe"><i className="fa fa-play" /></a>
			                </div>
			              </div> */}
			              {/* <div className="col-lg-12 banner-tour-package">
			                <div className="row">
			                  <div className="col-sm-4 s-animate-3">
			                    <div className="tp-price-meta">
			                      <p>Price</p>
			                      <h2>720 <span>$</span></h2>
			                      <p className="tp-price-meta-details">7 Days Tour <span>on 2 person</span></p>
			                    </div>
			                  </div>
			                  <div className="col-sm-4 s-animate-4">
			                    <div className="tp-price-meta">
			                      <p>5 Star</p>
			                      <h2>Hotel</h2>
			                      <p className="tp-price-meta-details">Hotels <span>to choice</span></p>
			                    </div>
			                  </div>
			                  <div className="col-sm-4 s-animate-5">
			                    <div className="tp-price-meta">
			                      <p>Flight date</p>
			                      <h2>17</h2>
			                      <p className="tp-price-meta-details">September <span>or later</span></p>
			                    </div>
			                  </div>
			                </div>
			              </div> */}
			            </div>
			          </div>
			        </div>
			      </div>
			    </div>
			    <div className="banner-slider-item banner-bg-3">
			      <div className="container">
			        <div className="row">
			          <div className="col-xl-8 col-lg-9 offset-xl-2 offset-lg-1">
			            <div className="row">
			              <div className="col-lg-9 col-sm-8">
			                <div className="banner-inner">
			                  <p className="banner-cat s-animate-1">Hot Places</p>
			                  <h2 className="banner-title s-animate-2">Affordable rides,<br /> unforgettable memories.</h2>
			                </div>
			              </div>
			              {/* <div className="col-lg-3 col-sm-4">
			                <div className="video-popup-btn s-animate-video">
			                  <a href="https://www.youtube.com/watch?v=c7XEhXZ_rsk" className="video-play-btn mfp-iframe"><i className="fa fa-play" /></a>
			                </div>
			              </div> */}
			              {/* <div className="col-lg-12 banner-tour-package">
			                <div className="row">
			                  <div className="col-sm-4 s-animate-3">
			                    <div className="tp-price-meta">
			                      <p>Price</p>
			                      <h2>620 <small>$</small></h2>
			                      <p className="tp-price-meta-details">7 Days Tour <span>on 2 person</span></p>
			                    </div>
			                  </div>
			                  <div className="col-sm-4 s-animate-4">
			                    <div className="tp-price-meta">
			                      <p>5 Star</p>
			                      <h2>Hotel</h2>
			                      <p className="tp-price-meta-details">Hotels <span>to choice</span></p>
			                    </div>
			                  </div>
			                  <div className="col-sm-4 s-animate-5">
			                    <div className="tp-price-meta">
			                      <p>Flight date</p>
			                      <h2>17</h2>
			                      <p className="tp-price-meta-details">September <span>or later</span></p>
			                    </div>
			                  </div>
			                </div>
			              </div> */}
			            </div>
			          </div>
			        </div>
			      </div>
			    </div>
			  </div>
			  <div className="banner-social-meta">
			    <div className="banner-slider-dots" />
			    <ul className="social-icon">
			      <li>
			        <a className="facebook" href="https://www.facebook.com/share/1B7nS28M7a/" target="_blank"><i className="fa fa-facebook" /></a>
			      </li>
			      
			      <li>
			        <a className="pinterest" href="https://www.instagram.com/tendulkarstourstravels?igsh=MXR2MnE2YWwyOXd3Nw==" target="_blank"><i className="fa fa-instagram" /></a>
			      </li>
			    </ul>
			  </div>
			  <div className="container">
			    <div className="banner-slider-controls">
			      <div className="slider-nav tp-control-nav" />
			      {/*slider-nav*/}
			      <div className="tp-slider-extra slider-extra">
			        <div className="text">
			          <span className="first">01</span>
			          <span className="devider">/</span>
			          <span className="last" />
			        </div>
			      </div>
			      {/*slider-extra*/}
			    </div>
			  </div>
			</div>
        }
}

export default Banner