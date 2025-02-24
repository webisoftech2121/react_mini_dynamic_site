import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Offer extends Component {

	render() {

		let publicUrl = process.env.PUBLIC_URL + '/'

		return <div className="offer-area pd-top-70">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-xl-6 col-lg-8">
						<div className="section-title text-center">
							<h2 className="title">Special offers &amp; Discounts</h2>
							<p>Diwali Special: Enjoy 15% off on all packages during the Diwali season.<br/>
								Summer Sale: Get free upgrades on select accommodation and 10% off on group tours during the summer months.<br/>
								Monsoon Getaway: Explore the beauty of Kokan in the monsoon season with up to 25% off on nature tours and beach holidays.</p>
						</div>
					</div>
				</div>
			</div>
			<div className="destinations-list-slider-bg">
				<div className="container">
					<div className="row">
						<div className="col-xl-9 col-lg-10 offset-xl-1 order-lg-12">
							<div className="destinations-list-slider">
								<div className="d-list-slider-item">
									<div className="single-destinations-list text-center">
										<div className="thumb">
											<span className="d-list-tag">Special Offer</span>
											<img src={publicUrl + "assets/img/destination-list/1g.png"} alt="list" />
											<div className="d-list-btn-wrap">
												<div className="d-list-btn viaje-go-top">
													{/*<Link className="btn btn-yellow" to="/contact">Book Now <i className="fa fa-paper-plane" /></Link>*/}
												</div>
											</div>
										</div>
										<div className="details">
											<h4 className="title">Goa</h4>
											<p className="content">Stunning beaches,nightlife & famous seafood</p>
											<ul className="tp-list-meta border-bt-dot">
												{/*<li><i className="fa fa-calendar-o" /> 8oct</li>
												<li><i className="fa fa-clock-o" /> 4 days</li>
												<li><i className="fa fa-star" /> 4.3</li>*/}
											</ul>
											<div className="tp-price-meta tp-price-meta-cl">
												{/*<p>Price</p>*/}
												<h2> <small></small></h2>
												<del><span></span></del>
											</div>
										</div>
									</div>
								</div>
								<div className="d-list-slider-item">
									<div className="single-destinations-list text-center">
										<div className="thumb">
											<img src={publicUrl + "assets/img/destination-list/2s.png"} alt="list" />
											<div className="d-list-btn-wrap">
												<div className="d-list-btn viaje-go-top">
													{/* <Link className="btn btn-yellow" to="/contact">Book Now <i className="fa fa-paper-plane" /></Link>*/}
												</div>
											</div>
										</div>
										<div className="details">
											<h4 className="title">Sindhudurga Fort</h4>
											<p className="content">Historical famous place on western coast</p>
											<ul className="tp-list-meta border-bt-dot">
												{/*<li><i className="fa fa-calendar-o" /> 8oct</li>
												<li><i className="fa fa-clock-o" /> 4 days</li>
												<li><i className="fa fa-star" /> 4.3</li>*/}
											</ul>
											<div className="tp-price-meta tp-price-meta-cl">
												{/*<p>Price</p>*/}
												<h2> <small></small></h2>
												<del><span></span></del>
											</div>
										</div>
									</div>
								</div>
								<div className="d-list-slider-item">
									<div className="single-destinations-list text-center">
										<div className="thumb">
											<span className="d-list-tag">Special Offer</span>
											<img src={publicUrl + "assets/img/destination-list/3m.png"} alt="list" />
											<div className="d-list-btn-wrap">
												<div className="d-list-btn viaje-go-top">
													{/*<Link className="btn btn-yellow" to="/contact">Book Now <i className="fa fa-paper-plane" /></Link>*/}
												</div>
											</div>
										</div>
										<div className="details">
											<h4 className="title">Malvan Beach</h4>
											<p className="content">Glorious view of sunset with Arabian sea</p>
											<ul className="tp-list-meta border-bt-dot">
												{/*<li><i className="fa fa-calendar-o" /> 8oct</li>
												<li><i className="fa fa-clock-o" /> 4 days</li>
												<li><i className="fa fa-star" /> 4.3</li>*/}
											</ul>
											<div className="tp-price-meta tp-price-meta-cl">
												{/*<p>Price</p>*/}
												<h2> <small></small></h2>
												<del><span></span></del>
											</div>
										</div>
									</div>
								</div>
								<div className="d-list-slider-item">
									<div className="single-destinations-list text-center">
										<div className="thumb">
											<span className="d-list-tag">Special Offer</span>
											<img src={publicUrl + "assets/img/destination-list/1t.png"} alt="list" />
											<div className="d-list-btn-wrap">
												<div className="d-list-btn viaje-go-top" >
													{/* <Link className="btn btn-yellow" to="/contact">Book Now <i className="fa fa-paper-plane" /></Link>*/}
												</div>
											</div>
										</div>
										<div className="details">
											<h4 className="title">Tarkarli Beach</h4>
											<p className="content">Peaceful environment with natural places & beautiful sea view</p>
											<ul className="tp-list-meta border-bt-dot">
												{/*<li><i className="fa fa-calendar-o" /> 8oct</li>
												<li><i className="fa fa-clock-o" /> 4 days</li>
												<li><i className="fa fa-star" /> 4.3</li>*/}
											</ul>
											<div className="tp-price-meta tp-price-meta-cl">
												{/*<p>Price</p>*/}
												<h2> <small></small></h2>
												<del><span></span></del>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-2 align-self-center order-lg-11">
							<div className="container">
								<div className="destinations-slider-controls">
									<div className="slider-nav tp-control-nav" />
									{/*slider-nav*/}
									<div className="tp-slider-extra slider-extra">
										<div className="text">
											<span className="first">01 </span>
											<span className="last" />
										</div>
										{/*text*/}
										<div className="d-list-progress" role="progressbar" aria-valuemin={0} aria-valuemax={100}>
											<span className="slider__label sr-only" />
										</div>
									</div>
									{/*slider-extra*/}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>


	}
}

export default Offer