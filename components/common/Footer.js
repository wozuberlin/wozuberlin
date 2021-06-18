import React from 'react';

const Footer = () => (
  <footer className="pt-5">
    <div className="pt-md-5">
      <div className="bg-brand300">
        <div className="custom-container d-flex flex-column flex-md-row align-items-center justify-content-between">
          <div className="pt-5 pb-0 pt-md-4 pb-md-4 d-flex align-items-center flex-wrap justify-content-center">
          <a
                href="/impressum"
                className="font-color-brand font-size-caption text-uppercase text-center"
              >
               Impressum
              </a>

              <p className="px-2 font-color-brand font-size-caption">-</p>
            
            <a
              href="/widerrufs"
              className="font-color-brand font-size-caption text-uppercase text-center"
            >
              Widerrufsbelehrung
            </a>
            
            <p className="px-2 font-color-brand font-size-caption">-</p>
            <a
              href="/agb"
              className="font-color-brand font-size-caption text-uppercase text-center"
            >
              Agb
            </a>
            <p className="px-2 font-color-brand font-size-caption">-</p>
            <a
              href="mailto:anfrage@wozuberlin.com"
              className="font-color-brand font-size-caption text-uppercase text-center"
            >
              Kontakt
            </a>
            <p className="px-2 font-color-brand font-size-caption">-</p>
<a
  href="tel:+49017610094658"
  className="font-color-brand font-size-caption text-uppercase text-center"
>
<b>+49176 100 946 58</b>
</a>
          </div>
          <div className="font-color-brand font-size-caption py-4 text-right">
          <a
              href="mailto:victor@wozuberlin.de"
              className="font-color-brand font-size-caption text-uppercase text-center"
            >
              &copy; { new Date().getFullYear() } wozuberlin
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
