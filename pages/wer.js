import React from 'react';
import Head from 'next/head';
import Root from '../components/common/Root';
import Footer from '../components/common/Footer';

const Wer = () => (
  <Root>
    <Head>
      <title>Wer | wer wir sind</title>
    </Head>
    <div className="wer-container">
      {/* Row */}
<div className="row mt-5 pt-5 about-hero">
  <div className="col-12 col-md-10 col-lg-6 offset-md-1 offset-lg-0 row-content">
      <div className="h-100 d-flex flex-column py-5 px-4 px-sm-5 justify-content-center">
        <h2 className="font-size-header mb-4">
        Wer wir sind
        </h2>
        <h4 className="font-size-subheader mb-4">
        Wir sind ein in Berlin ansässiges Unternehmen, welches sich zur Aufgabe gemacht hat, Firmen bei Ihren Auslösungen zu unterstützen, um Ihnen das entsprechende Mobiliar für einen Bruchteil des Neupreises anbieten zu können. Die Ware ist bereits im Einsatz gewesen, doch nach sorgfältiger Prüfung unsererseits verkaufen wir ausschließlich Möbel in einwandfreiem Zustand (ggf. minimale Gebrauchsspuren nicht ausgeschlossen.)
        </h4>
        <h2>      <strong><b><a href='tel:+4917610094658'>+49 176 100 94 658</a></b>*Ruf einfach an!*</strong>
</h2>
        <h4 className="font-size-subheader mb-4">
        Ob Sie Ihren eigenen Arbeitsplatz im Home Office optimieren, oder ganze Büroräume neu ausstatten wollen - unser umfangreiches Lager ermöglicht es uns, die angebotenen Artikel auch in größerer Menge zügig auszuliefern.
</h4>
      </div>
    </div>
    <div className="col-12 col-lg-6">
  <div className="about-image h-100">
    <div className="d-flex align-items-center justify-content-center h-100">
      <img src="/images/intro_moebel.mp4" alt="Unser Lager"/>
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

export default Wer;
