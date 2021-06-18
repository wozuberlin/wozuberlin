import React from 'react';
import Head from 'next/head';
import Root from '../components/common/Root';
import Footer from '../components/common/Footer';

let playbackRate = 0.00525

const Impressum = () => (
  <Root>
    <Head>
      <title>Impressum</title>
    </Head>
    <div className="about-container">
      {/* Row */}

      <div className="row mt-5 pt-5 about-hero">
        <div className="col-12 col-md-10 col-lg-6 offset-md-1 offset-lg-0 row-content">
            <div className="h-100 d-flex flex-column py-5 px-4 px-sm-5 justify-content-center">
              <h2 className="font-size-header mb-4">
              Impressum | WOZUBERLIN
              </h2>


              <h4 className="font-size-subheader mb-4">
              <p><strong>Inhaber: Victor Zugah</strong></p>
              <p>
                Mainzer Str. 20
                12053 Berlin</p>
                <p>Telefon: <a href='tel:+4917610094658'>+49 176 100 94 658</a></p>
                <p>E -Mail: <a href='mailto:anfrage@wozuberlin.de'>anfrage@wozuberlin.de</a></p>
                <p>Web: <a href='http://www.wozuberlin.de' target='_blank' className='url'>http://www.wozuberlin.de</a></p>
                <p><b>Umsatzsteuer-Nr.: 16/609/50535</b></p>
              <p>
            <strong>Inhaltlich Verantwortlicher: <b>Victor Zugah</b></strong></p>
              </h4>
              <div className="about-cjs mt-3 d-flex flex-row">
                <a className="px-4 py-3 font-color-white about-doc" href="https://commercejs.com/docs/" target="_blank">
                  Documentation
                </a>
                <a className="px-4 py-3 about-dev" href="collection">
                 <b>Die Natur sagt Danke!</b>
                </a>
              </div>
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
</div>

    <Footer />
  </Root>
);

export default Impressum;
