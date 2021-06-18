import React from 'react';
import Head from 'next/head';
import Root from '../components/common/Root';
import Footer from '../components/common/Footer';

const Wie = () => (
  <Root>
    <Head>
      <title>Wie | Lieferung - Abholung</title>
    </Head>
    <div className="wer-container">
      {/* Row */}
<div className="row mt-5 pt-5 about-hero">
  <div className="col-12 col-md-10 col-lg-6 offset-md-1 offset-lg-0 row-content">
      <div className="h-100 d-flex flex-column py-5 px-4 px-sm-5 justify-content-center">
        <h2 className="font-size-header mb-4">
        Lieferung
        </h2>
        <h4 className="font-size-subheader mb-4">
        Ihre gewünschte Ware wird auf einem Einwegpalette geliefert, welches sie danach selbstverständlich entsorgen müssen oder zum Umbau von einem Projekt verwenden können.        </h4>
        <h4 className="font-size-subheader mb-4">
        Kantenschutz und Schutzfolie kommt selbstverständlich auch hier zum Einsatz um ihre Ware unbeschadet abliefern zu können. </h4>
      </div>
    </div>

  <div className="col-12 col-lg-6">
    <div className="wer-image h-100">
      <div className="d-flex align-items-center justify-content-center h-100">
        <img src="/images/versand01.jpg" alt="Lieferung"/>
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

export default Wie;
