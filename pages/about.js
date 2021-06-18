import React from 'react';
import Head from 'next/head';
import Root from '../components/common/Root';
import Footer from '../components/common/Footer';

const About = () => (
  <Root>
    <Head>
      <title>Über uns | wozuberlin</title>
    </Head>
    <div className="about-container">
      {/* Row */}
      <div className="row mt-5 pt-5 about-hero">
        <div className="col-12 col-md-10 col-lg-6 offset-md-1 offset-lg-0 row-content">
            <div className="h-100 d-flex flex-column py-5 px-4 px-sm-5 justify-content-center">
              <h2 className="font-size-header mb-4">
              Clever kaufen - günstig und fair.
              </h2>
              <h4 className="font-size-subheader mb-4">
              Auch die Natur sagt Danke! <b>Mit der Anschaffung gebrauchter Möbel handeln Sie fair, ressourcenschonend und verantwortungsbewusst. </b>Hier sparen Sie an der richtigen Stelle, und leisten gleichzeitig einen unverzichtbaren Beitrag für die Umwelt - Daumen hoch!
              </h4>
              <h3><strong><b><a href='tel:+4917610094658'>+49 176 100 94 658</a></b>*Ruf einfach an!*</strong></h3>
            </div>
          </div>

        <div className="col-12 col-lg-6">
          <div className="about-image h-100">
            <div className="d-flex align-items-center justify-content-center h-100">
              <img src="/images/intro_moebel.mp4" alt="Lagerbestand"/>
            </div>
          </div>
        </div>
      </div>

      {/* Row 2 */}
      <div className="row">
        <div className="col-12 col-lg-6">
          <div className="about-image h-100">
            <div className="d-flex align-items-center justify-content-center h-100">
              <img src="/images/kn-detail.jpg" alt="Ausverkauf"/>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-10 col-lg-6 offset-md-1 offset-lg-0 row-content">
          <div className="h-100 d-flex flex-column justify-content-center py-5 px-4 px-sm-5">
            <h3 className="font-size-header mb-4">
            Wie neu & einwandfrei
            </h3>
            <h4 className="font-size-subheader mb-4">
            Bei uns finden Sie erfahrenes Mobiliar
            <b> Schreibtische, Drehstühle, Rollcontainer, Sideboards, Aktenschränke, </b> etc
            namhafter Marken zur Ausgestaltung Ihrer Büroräume.
            Der Abverkauf hochwertiger Markenartikel umfangreicher Büroauflösungen erlaubt es uns,
            Ihnen unsere Ware für einen Bruchteil des Neupreises anzubieten.
            </h4>
            <div className="mt-3">
              <a className="px-4 py-3 flex-grow-1 font-color-white about-net" href="/collection">
                Sortiment
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Row 3 */}
      <div className="row">
        <div className="col-12 col-md-10 col-lg-6 offset-md-1 offset-lg-0 row-content">
          <div className="h-100 d-flex flex-column justify-content-center py-5 px-4 px-sm-5">
            <h3 className="font-size-header mb-4">
            Qualität zahlt sich aus
            </h3>
            <h4 className="font-size-subheader mb-4">
            Sie profitieren von unserem riesigen Lagerbestand, denn die angebotenen Markenartikel können auch in größerer Menge günstig und zügig ausgeliefert werden. Ob Sie also Ihr Homeoffice oder ganze Büroräume neu ausstatten wollen - bei uns kaufen Sie hohen Komfort zu niedrigen Preisen.
            </h4>
            <div className="mt-3">
              <a className="px-4 py-3 flex-grow-1 font-color-white about-gb" href="/collection">
                Produkte
              </a>
            </div>
          </div>
        </div>

        <div className="col-12 col-lg-6">
          <div className="about-image h-100">
            <div className="d-flex align-items-center justify-content-center h-100">
              <img src="/images/sedus-detail.jpg" alt="freischwinger"/>
            </div>
          </div>
        </div>
      </div>

      {/* Row 4 */}
    </div>
    <Footer />
  </Root>
);

export default About;
