import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import Intro from './section-components/intro-v3';
import Car from './section-components/car-rental';
import History from './section-components/history';
import Team from './section-components/team';
import Footer from './global-components/footer';
import { Helmet } from 'react-helmet';


const meta =  {
    title: 'Some Meta Title',
    description: 'I am a description, and I can create multiple tags',
    canonical: 'http://example.com/path/to/page',
    meta: {
        charset: 'utf-8',
        name: {
            keywords: 'react,meta,document,html,tags'
        }
    }
}

const CarRentalPage = () => {
    return <div>

        <Helmet>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
            <title>Best Car Rental in Kudal Sindhudurg</title>
            <meta name="description" content="We are providing best and cheapest car rental services in Kudal, Sindhudurg. Also, we are offering Car on rent in Kudal to Malvan Tarkarli Devbag pick up and drop service.  " />
            <meta name="keywords" content="Car rental in Kudal, car rental in Sindhudurg, self drive cars in Kudal Sindhudurg, Bike rental in Kudal, Kudal taxi service, cheapest car rental in Kudal, tempo travelers available on rent.react, meta tags, seo" />
            <meta name="author" content="Tendulkar Tours & Travels" />
            <meta property="og:title" content="Best Car Rental in Kudal Sindhudurg" />
            <meta property="og:description" content="This is a description of my page" />
            <meta property="og:image" content="https://tendulkarstourstravels.com/assets/img/logo.png" />
            <meta property="og:url" content="https://tendulkarstourstravels.com" />
            <meta name="twitter:title" content="Tendulkars Tours & Travels" />
            <meta name="twitter:description" content="We are providing best and cheapest car rental services in Kudal, Sindhudurg. Also, we are offering Car on rent in Kudal to Malvan Tarkarli Devbag pick up and drop service." />
            <meta name="twitter:image" content="https://tendulkarstourstravels.com/assets/img/logo.png" />
            <meta name="twitter:card" content="summary_large_image" />
        </Helmet>

        <Navbar />
        <PageHeader headertitle="Car Rental"  />
        <Car />
        <Intro />
        
        {/* <History /> */}
        {/* <Team /> */}
        <Footer />
    </div>
}


export default CarRentalPage

