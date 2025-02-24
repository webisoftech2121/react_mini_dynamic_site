import React from 'react';
import Navbar from './global-components/navbar';
import Banner from './section-components/banner';
import Search from './section-components/search';
import Intro from './section-components/intro';
import Offer from './section-components/offer';
import Video from './section-components/video';
import HolidayPlan from './section-components/holiday-plan';
import Review from './section-components/review';
import BlogSection from './blog-components/blog-section';
import Ads from './section-components/ads';
import Subscribe from './section-components/subscribe';
import Footer from './global-components/footer';
import { Helmet } from 'react-helmet';

const Home_V1 = () => {
    return <div>

        <Helmet>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
            <title>Best Self Drive Car Rental in Kudal | Bike Rental in Kudal</title>
            <meta name="description" content="We are providing best car rental services in Kudal, Sindhudurg. Also, we are offering self drive cars in Kudal, Sindhudurg and affordable bike rental in Kudal." />
            <meta name="keywords" content="Car rental in Kudal, car rental in Sindhudurg, self drive cars in Kudal Sindhudurg, Bike rental in Kudal, Kudal taxi service, cheapest car rental in Kudal" />
            <meta name="author" content="Your Name" />
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
        <Banner />
        {/* <Search /> */}
        <Intro />
        <Offer />
        <Video />
        <HolidayPlan />
        {/* <Review /> */}
        {/* <BlogSection /> */}
        {/* <Ads /> */}
        {/* <Subscribe /> */}
        <Footer />
    </div>
}

export default Home_V1

