import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import Intro from './section-components/intro-v3';
import Bike from './section-components/bike-rental';
import History from './section-components/history';
import Team from './section-components/team';
import Footer from './global-components/footer';
import { Helmet } from 'react-helmet';

const BikeRentalPage = () => {
    return <div>

        <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
        <title>Bike Rental in Kudal, Hire Two Wheeler</title>
        <meta name="description" content="Hire two wheeler on rent in Kudal with Zero Deposit for long drive, Konkan Sightseeing. Activa ,Jupiter, TVS IQ, Royal Enfield Available" />
        <meta name="keywords" content="bike rental in kudal, two wheeler for rent in kudal, bike for rent in kudal, bike hire in kudal, bike rental in kudal railway station, bike on rent in kudal, bike rental companies in kudal, bike rental rates in kudal, bike rental shop in kudal, hire a two wheeler in kudal,  scooter rental in kudal, two wheeler hire in kudal, two wheeler rental services contact addresses in kudal, two wheeler rental services phone numbers in kudal, royal enfield on rent in kudal, bullet on rent in kudal, bullet ride in konkan" />
        <meta name="author" content="Tendulkar's Tours & Travels" />
        <meta property="og:title" content="Bike Rental in Kudal, Hire Two Wheeler" />
        <meta property="og:description" content="Hire two wheeler on rent in Kudal with Zero Deposit for long drive, Konkan Sightseeing. Activa ,Jupiter, TVS IQ, Royal Enfield Available" />
        <meta property="og:image" content="https://tendulkarstourstravels.com/assets/img/logo.png" />
        <meta property="og:url" content="https://tendulkarstourstravels.com" />
        <meta name="twitter:title" content="Bike Rental in Kudal, Hire Two Wheeler" />
        <meta name="twitter:description" content="Hire two wheeler on rent in Kudal with Zero Deposit for long drive, Konkan Sightseeing. Activa ,Jupiter, TVS IQ, Royal Enfield Available" />
        <meta name="twitter:image" content="https://tendulkarstourstravels.com/assets/img/logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        </Helmet>

        <Navbar />
        <PageHeader headertitle="Bike Rental in Kudal, Hire Two Wheeler"  />
        <Bike />
        <Intro />
        {/* <History /> */}
        {/* <Team /> */}
        <Footer />
    </div>
}

export default BikeRentalPage

