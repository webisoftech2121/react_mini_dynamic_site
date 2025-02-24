import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class HolidayFun extends Component {

	render() {

		let publicUrl = process.env.PUBLIC_URL + '/'

		return <div className="holiday-plan-area tp-holiday-plan-area mg-top-96" style={{ backgroundImage: 'url(' + publicUrl + 'assets/img/bg/8.png)' }}>
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-xl-6 col-lg-9">
						<div className="section-title text-center">
							<h2 className="title wow animated fadeInUp" data-wow-duration="0.6s" data-wow-delay="0.1s">Perfect Holiday Plan</h2>
							<p className="wow animated fadeInUp" data-wow-duration="0.6s" data-wow-delay="0.2s">Accommodation: Comfortable stays at selected beach resorts, boutique hotels, or homestays.<br/>
								Transportation: Private car with a chauffeur for the entire trip.<br/>
								Meals: Breakfast, lunch, and dinner with a focus on local Kokani cuisine.<br/>
								Tour Guide: A knowledgeable guide to take you through the history, culture, and landmarks of Kokan.<br/>
								Water Sports: Scuba diving, snorkeling, kayaking, and other beach activities.<br/>
								Entrance Fees: Entry to forts, temples, and museums. </p>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-3 col-sm-6">
						<div className="single-destinations-list style-two wow animated fadeInUp" data-wow-duration="0.4s" data-wow-delay="0.1s">
							<div className="thumb">
								<img src={publicUrl + "assets/img/destination-list/4r.png"} alt="list" />
							</div>
							<div className="details">
								<p className="location"><img src={publicUrl + "assets/img/icons/1.png"} alt="map" />Ratnagiri</p>
								<h4 className="title">Beaches & Temples</h4>
								<p className="content"></p>
								<div className="tp-price-meta">
									<h2> <small></small></h2>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-sm-6">
						<div className="single-destinations-list style-two wow animated fadeInUp" data-wow-duration="0.7s" data-wow-delay="0.2s">
							<div className="thumb">
								<img src={publicUrl + "assets/img/destination-list/5s.png"} alt="list" />
							</div>
							<div className="details">
								<p className="location"><img src={publicUrl + "assets/img/icons/1.png"} alt="map" />Sawantwadi</p>
								<h4 className="title">Lakeview & Palace</h4>
								<p className="content"></p>
								<div className="tp-price-meta">
									<h2><small></small></h2>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-sm-6">
						<div className="single-destinations-list style-two wow animated fadeInUp" data-wow-duration="0.9s" data-wow-delay="0.3s">
							<div className="thumb">
								<img src={publicUrl + "assets/img/destination-list/6g.png"} alt="list" />
							</div>
							<div className="details">
								<p className="location"><img src={publicUrl + "assets/img/icons/1.png"} alt="map" />Ganapatipule</p>
								<h4 className="title">Temple & Beach</h4>
								<p className="content"></p>
								<div className="tp-price-meta">
									<h2> <small></small></h2>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-sm-6">
						<div className="single-destinations-list style-two wow animated fadeInUp" data-wow-duration="1.1s" data-wow-delay="0.4s">
							<div className="thumb">
								<img src={publicUrl + "assets/img/destination-list/7r.png"} alt="list" />
							</div>
							<div className="details">
								<p className="location"><img src={publicUrl + "assets/img/icons/1.png"} alt="map" />Reddi</p>
								<h4 className="title">Temple & Forest</h4>
								<p className="content"></p>
								<div className="tp-price-meta">
									<h2> <small></small></h2>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

	}
}

export default HolidayFun