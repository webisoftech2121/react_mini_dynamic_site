import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer_v1 extends Component {

    componentDidMount() {
        let publicUrl = process.env.PUBLIC_URL+'/'
        const minscript = document.createElement("script");
        minscript.async = true;
        minscript.src = publicUrl + "assets/js/main.js";

        document.body.appendChild(minscript);
    }

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imgattr = "Footer logo"

        return (
  				<footer className="footer-area" style={{backgroundImage: 'url('+publicUrl+'assets/img/bg/2.png)'}}>
				  <div className="container">
				    <div className="row">
				      <div className="col-lg-4 col-md-6">
				        <div className="footer-widget widget">
				          <div className="about_us_widget">
				            <Link to="/" className="footer-logo"> 
				              <img src={publicUrl+"assets/img/logo.png"} alt="footer logo" />
				            </Link>
				            <p>We believe brand interaction is key in commu- nication. Real innovations and a positive customer experience are the heart of successful communication.</p>
				            <ul className="social-icon">
				              <li>
				                <a className="facebook" href="https://www.facebook.com/share/1B7nS28M7a/" target="_blank"><i className="fa fa-facebook" /></a>
				              </li>
				              {/* <li>
				                <a className="twitter" href="https://twitter.com/codingeeknet" target="_blank"><i className="fa fa-twitter  " /></a>
				              </li> */}
				              <li>
				                <a className="pinterest" href="https://www.instagram.com/tendulkarstourstravels?igsh=MXR2MnE2YWwyOXd3Nw==" target="_blank"><i className="fa fa-instagram" /></a>
				              </li>
				            </ul>
				          </div>
				        </div>
				      </div>
				      <div className="col-lg-3 col-md-6">
				        <div className="footer-widget widget ">
				          <div className="widget-contact">
				            <h4 className="widget-title">Contact us</h4>
				            <p>
				              <i className="fa fa-map-marker" /> 
				              <span>: Near RSN Hotel, opposite Kokan Spice, Mumbai - Goa Highway, Kudal, Sindhudurg, Maharashtra 416520</span>{/*Manama Tower, Badda Link Road, Badda Dhaka, Bangladesh*/}
				            </p>
				            <p className="location"> 
				              <i className="fa fa-envelope-o" />
				              <span>info@tendulkarstourstravels.com</span>
				            </p>
				            <p className="telephone">
				              <i className="fa fa-phone base-color" /> 
				              <span>
							      : 9595311850 / 7038639891                        {/* +088 012121240*/}
				              </span>
				            </p>
				          </div>
				        </div>
				      </div>
				      <div className="col-lg-2 col-md-6">
				        <div className="footer-widget widget">
				          <h4 className="widget-title">Quick Link</h4>
				          <ul className="widget_nav_menu  viaje-go-top">
				            <li><Link to="/">Home</Link></li>
				            <li><Link to="/about">About Us</Link></li>
				            {/*<li><Link to="/destination-list">Destination</Link></li>
				            <li><Link to="/tour-details">Tours</Link></li>
				           {/* <li><Link to="/blog">Blog</Link></li>*/}
				            <li><Link to="/contact">Contact</Link></li>
				          </ul>
				        </div>
				      </div>
				      <div className="col-lg-3 col-md-6">
				        <div className="footer-widget widget">
				          <h4 className="widget-title">Instagram Gallery</h4>
				          <ul className="widget-instagram-feed">
				            <li><a href="#"><img src={publicUrl+"assets/img/instagram/1k.png"} alt="img" /></a></li>
				            <li><a href="#"><img src={publicUrl+"assets/img/instagram/2k.png"} alt="img" /></a></li>
				            <li><a href="#"><img src={publicUrl+"assets/img/instagram/3k.png"} alt="img" /></a></li>
				            <li><a href="#"><img src={publicUrl+"assets/img/instagram/4g.png"} alt="img" /></a></li>
				            <li><a href="#"><img src={publicUrl+"assets/img/instagram/5g.png"} alt="img" /></a></li>
				            <li><a href="#"><img src={publicUrl+"assets/img/instagram/6g.png"} alt="img" /></a></li>
				          </ul>
				        </div>
				      </div>
				    </div>
				  </div>
				  <div className="copyright-inner">
				    <div className="copyright-text">
				      © 2025 All rights reserved. Powered with by <a href="https://webisoftech.com/" target="_blank"><i className="fa fa-desktop" /><span>WEBiSOFTECH</span></a>
				    </div>
				  </div>

				  	<a href="https://wa.me/919595311850" class="whats-app">
						<i className="fa fa-whatsapp"></i>
					</a>

				</footer>




        )
    }
}


export default Footer_v1