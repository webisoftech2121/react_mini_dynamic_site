import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Contact extends Component {

  render() {

    let publicUrl = process.env.PUBLIC_URL + '/'
    let imagealt = 'image'

    return <div>
      <div className="contact-area pd-top-108">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="section-title text-lg-center text-left">
                <h2 className="title">Get In Touch!</h2>
                <p>We'd love to hear from you! Whether you're planning your next adventure or need more information about our services, we are here to help. Our team is dedicated to providing you with the best travel experiences, from booking your dream vacation to organizing your transport, accommodations, and activities.

                   We offer personalized travel solutions, whether you're planning a solo trip, a family holiday, or a group tour. Our expert team is available to assist you every step of the way.

                  Get in touch today, and let us help you create unforgettable travel memories. Your next adventure starts here!

                </p>
              </div>
            </div>
          </div>
          {/* <div className="row">
            <div className="col-xl-5 offset-xl-1 col-lg-6">
              <div className="thumb">
                <img src={publicUrl + "assets/img/others/11t.png"} alt="img" />
              </div>
            </div>
            <div className="col-xl-5 col-lg-6">
              <form className="tp-form-wrap">
                <div className="row">
                  <div className="col-md-6">
                    <label className="single-input-wrap style-two">
                      <span className="single-input-title">Name</span>
                      <input type="text" name="name" />
                    </label>
                  </div>
                  <div className="col-md-6">
                    <label className="single-input-wrap style-two">
                      <span className="single-input-title">Number</span>
                      <input type="text" name="number" />
                    </label>
                  </div>
                  <div className="col-lg-12">
                    <label className="single-input-wrap style-two">
                      <span className="single-input-title">Email</span>
                      <input type="text" name="email" />
                    </label>
                  </div>
                  <div className="col-lg-12">
                    <label className="single-input-wrap style-two">
                      <span className="single-input-title">Message</span>
                      <textarea defaultValue={""} name="message" />
                    </label>
                  </div>
                  <div className="col-12">
                    <input type="submit" className="btn btn-yellow" value="Send Message" />
                  </div>
                </div>
              </form>
            </div>
          </div> */}
        </div>
      </div>
      <div className="contact-info-area pd-top-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-8 order-lg-12">
              <iframe className="contact-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d958.8113055277508!2d73.69270891626853!3d16.00074515798126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc00f2c23f60cf5%3A0xc7fa9e9a78a3ef95!2sTendulkars%20Fitness%20Equipments%20Center!5e0!3m2!1sen!2sin!4v1737537800403!5m2!1sen!2sin" />
            </div>
            <div className="col-xl-3 col-lg-4 order-lg-1">
              <div className="contact-info bg-gray">
                <p>
                  <i className="fa fa-map-marker" />
                  <span>: Near RSN Hotel, opposite Kokan Spice, Mumbai - Goa Highway, Kudal, Sindhudurg, Maharashtra 416520</span>{/*Lavaca Street, Suite 2000 Austin, TX 24141*/}
                </p>
                <p>
                  <i className="fa fa-clock-o" />
                  <span>Office Hour: 9:00 AM to 7:00 PM  </span> <br />
                  <span>Sunday: 10:00 AM to 5:00 PM</span>
                </p>
                <p>
                  <i className="fa fa-envelope" />
                  <span>Email: <span>info@tendulkarstourstravels.com</span></span>
                </p>
                <p>
                  <i className="fa fa-phone" />
                  <span>
                    Cell phone: <span>9595311850 / </span> <br /> {/*(+88) 0172 570051 / (+88) 07 528 7584*/}
                    <span>7038639891</span>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  }
}

export default Contact