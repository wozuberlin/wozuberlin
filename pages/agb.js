
import React from 'react';
import Head from 'next/head';
import Root from '../components/common/Root';
import Footer from '../components/common/Footer';

const AGB = () => (
  <Root>
    <Head>
      <title>AGB | Agb</title>
    </Head>
    <div className="wer-container">
      {/* Row */}
<div className="row mt-2 pt-5 about-hero">
  <div className="col-12 col-md-10 col-lg-6 offset-md-1 offset-lg-0 row-content">
      <div className="py-5 px-4 px-sm-5 justify-content-center">
        <h2 className="font-size-header mb-4">
        Allgemeine Geschäftsbedingungen
        </h2>
        <p>
       Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
      
       <p>
 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
 </p>
      </div>
    </div>

  <div className="col-12 col-lg-6">
    <div className="about-image h-100">
      <div className="d-flex align-items-center justify-content-center h-100">
        <img src="/images/home-3.jpg" alt="freischwinger"/>
      </div>
    </div>
  </div>
</div>

      {/* Row 2 */}

      {/* Row 4 */}
    </div>
    <Footer />
  </Root>
);

export default AGB;
