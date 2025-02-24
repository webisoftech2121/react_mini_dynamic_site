import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import Intro from './section-components/intro-v3';
import SelfDriveCar from './section-components/self-drive-car-rental';
import History from './section-components/history';
import Team from './section-components/team';
import Footer from './global-components/footer';
import { Helmet } from 'react-helmet';

const SelfDriveCarRentalPage = () => {
    return <div>

        <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
        <title>Book Self Drive Car Rental in Kudal, Sindhudurg. </title>
        <meta name="description" content="Simply call 9595311850 to book a self drive car on rent in Kudal. Rent a Car in Kudal Sindhudurg will provide you 24/7 facility and hand over the keys to you at any time." />
        <meta name="keywords" content="Self Drive Car Rental in kudal, self-drive cars in sindhudurg, Self Driven Car Rental in kudal, Self Drive Car Rental Malvan Tarkarli, Car Hire in Kudal, Self Drive Car rental in Kankavli" />
        <meta name="author" content="Tendulkar's Tours & Travels" />
        <meta property="og:title" content="Book Self Drive Car Rental in Kudal, Sindhudurg. " />
        <meta property="og:description" content="Simply call 9595311850 to book a self drive car on rent in Kudal. Rent a Car in Kudal Sindhudurg will provide you 24/7 facility and hand over the keys to you at any time." />
        <meta property="og:image" content="https://tendulkarstourstravels.com/assets/img/logo.png" />
        <meta property="og:url" content="https://tendulkarstourstravels.com" />
        <meta name="twitter:title" content="Book Self Drive Car Rental in Kudal, Sindhudurg. " />
        <meta name="twitter:description" content="Simply call 9595311850 to book a self drive car on rent in Kudal. Rent a Car in Kudal Sindhudurg will provide you 24/7 facility and hand over the keys to you at any time." />
        <meta name="twitter:image" content="https://tendulkarstourstravels.com/assets/img/logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
        <Navbar />
        <PageHeader headertitle="Self Drive Car Rental"  />

        <SelfDriveCar />
        <Intro />
        
        {/* <History /> */}
        {/* <Team /> */}
        <Footer />
    </div>
}

export default SelfDriveCarRentalPage

