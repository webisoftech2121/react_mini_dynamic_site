import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import Contact from './section-components/contact';
import Subscribe from './section-components/subscribe';
import Footer from './global-components/footer';
import { Helmet } from 'react-helmet';


const ContactPage = () => {
    return <div>
            <Helmet>
            <title>Contact</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
            <meta name="description" content="We are providing best car rental services in Kudal, Sindhudurg. Also, we are offering self drive cars in Kudal, Sindhudurg and affordable bike rental in Kudal." />
            <meta name="keywords" content="react, meta tags, seo" />
            <meta name="author" content="Tendulkars Tours & Travels" />
            <meta property="og:title" content="Best Self Drive Car Rental in Kudal | Bike Rental in Kudal" />
            <meta property="og:description" content="We are providing best car rental services in Kudal, Sindhudurg. Also, we are offering self drive cars in Kudal, Sindhudurg and affordable bike rental in Kudal." />
            <meta property="og:image" content="https://tendulkarstourstravels.com/assets/img/logo.png" />
            <meta property="og:url" content="https://tendulkarstourstravels.com" />
            <meta name="twitter:title" content="Best Self Drive Car Rental in Kudal | Bike Rental in Kudal" />
            <meta name="twitter:description" content="We are providing best car rental services in Kudal, Sindhudurg. Also, we are offering self drive cars in Kudal, Sindhudurg and affordable bike rental in Kudal." />
            <meta name="twitter:image" content="https://tendulkarstourstravels.com/assets/img/logo.png" />
            <meta name="twitter:card" content="summary_large_image" />
            </Helmet>

        <Navbar />
        <PageHeader headertitle="Contact Us"  />
        <Contact />
        {/* <Subscribe /> */}
        <Footer />
    </div>
}

export default ContactPage

