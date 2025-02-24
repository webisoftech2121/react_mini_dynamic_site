import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Video extends Component {

	render() {

		let publicUrl = process.env.PUBLIC_URL + '/'

		return <div className="video-area tp-video-area pd-top-110" style={{ backgroundImage: 'url(' + publicUrl + 'assets/img/bg/7.png)' }}>
			<div className="container viaje-go-top">
				<div className="row">
					<div className="col-xl-5 col-lg-6 align-self-center wow animated fadeInRight" data-wow-duration="1s" data-wow-delay="0.3s">
						<div className="section-title mb-lg-0 mb-4 text-center text-lg-left">
							<h2 className="title">What Do You Know <br /> About US</h2>
							<p>We provide good car and bike on "rent" service at reasonable rates from Kudal to any place in Maharashtra, Goa & Karnataka.( India)
								We have "Ac/Non Ac" cars for Rental Purpose.
								"Railway/Airport" pick up-drop service.
								Also, we arrange "Sindhudurg sightseeing"& "Goa"Tours.<br/>
								
								Our Main Serivces:<br/>
								Car & Bike Rental in Kudal,
								Self Drive Cars in Kudal,
								Konkan Darshan Tour Packages,
								Kudal, Malvan, Tarkarli Tour Packages.</p>

							<Link className="btn btn-yellow" to="/about"><span>Read More<i className="la la-arrow-right" /></span></Link>
						</div>
					</div>
					<div className="col-xl-5 col-lg-6 offset-xl-1 wow animated fadeInLeft" data-wow-duration="1s" data-wow-delay="0.3s">
						<div className="video-popup-wrap">
							<div className="thumb">
								<img src={publicUrl + "assets/img/product.png"} alt="video" />
							</div>
							{/* <div className="video-popup-btn">
								<a href="https://youtu.be/-_0Aw5ZidNw" className="video-play-btn mfp-iframe"><i className="fa fa-play" /></a>
							</div> */}
						</div>
					</div>
				</div>
			</div>
		</div>


	}
}

export default Video