import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Intro extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return  <div className="intro-area pd-top-112">
				  <div className="container">
				    <div className="row">
				      <div className="col-md-4">
				        <div className="single-intro wow animated fadeInUp" data-wow-duration="0.6s" data-wow-delay="0.1s">
				          <h4 className="intro-title">
				            <span className="intro-count">01</span>
				            <Link className="intro-cat" to="/about">Expert Guides and Knowledge</Link>
				          </h4>
				          <p>Providing knowledgeable and experienced tour guides who are familiar with the local culture, history, and hidden gems, enhancing the travel experience.</p>
				        </div>
				      </div>
				      <div className="col-md-4">
				        <div className="single-intro wow animated fadeInUp" data-wow-duration="1.0s" data-wow-delay="0.2s">
				          <h4 className="intro-title">
				            <span className="intro-count">02</span>
				            <Link className="intro-cat" to="/about">Safety and Comfort</Link>
				          </h4>
				          <p>Prioritizing the safety and comfort of your customers with reliable transportation, well-reviewed accommodations, and adhering to health and safety protocols.</p>
				        </div>
				      </div>
				      <div className="col-md-4">
				        <div className="single-intro wow animated fadeInUp" data-wow-duration="1.6s" data-wow-delay="0.3s">
				          <h4 className="intro-title">
				            <span className="intro-count">03</span>
				            <Link className="intro-cat" to="/about">Value for Money</Link>
				          </h4>
				          <p>Competitive pricing with high-quality services, ensuring customers get excellent value for their money, whether on budget or luxury packages.</p>
				        </div>
				      </div>
				    </div>
				  </div>
				</div>

        }
}

export default Intro