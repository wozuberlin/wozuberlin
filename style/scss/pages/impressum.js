import React from 'react';
import Head from 'next/head';
import Root from '../components/common/Root';
import Footer from '../components/common/Footer';

const Impressum = () => (
  <Root>
    <Head>
      <title>Impressum | Impressum</title>
    </Head>
    <div className="wer-container">
      {/* Row */}
<div className="row mt-5 pt-5 about-hero">
  <div className="">
      <div className="h-100 d-flex flex-column py-5 px-4 px-sm-5 justify-content-center">
        <h2 className="font-size-header mb-4">
        Impressum
        </h2>
        <p className="font-size-subheader mb-4">


   	### Victor Zugah
   	### Mainzer Str. 20,
   ### 12052 Berlin,
   ### Telefonnr.: +49176 100 94 658,
   ### E-Mail-Adresse: info@wozuberlin.de

</p>
      </div>
    </div>








</div>

      {/* Row 2 */}

      {/* Row 4 */}
    </div>
    <Footer />
  </Root>
);

export default Impressum;
