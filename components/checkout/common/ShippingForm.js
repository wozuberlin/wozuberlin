import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Checkbox from '../../common/atoms/Checkbox';
import Dropdown from '../../common/atoms/Dropdown';

export default class ShippingForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      receiveNewsletter: true,
      saveInfo: true
    };

    this.toggleNewsletter = this.toggleNewsletter.bind(this);
  }

  toggleNewsletter() {
    this.setState({
      receiveNewsletter: !this.state.receiveNewsletter,
    });
  }

  render() {
    const { receiveNewsletter } = this.state;
    const {
      shippingOptions,
      countries = {},
      subdivisions = {},
      deliveryCountry,
      deliveryRegion,
      selectedShippingOption,
      firstName,
      lastName,
      shippingTownCity,
      shippingStreet,
      shippingStreet2,
      shippingPostalZipCode,
      customerEmail,
      orderNotes,
    } = this.props;

    return (
      <>
        <div className="row">
          <div className="col-12 col-sm-4 mb-3">
            <label className="w-100">
              <p className="mb-1 font-size-caption font-color-light">
              Vorname*
              </p>
              <input name="firstName" value={firstName} className="rounded-0 w-100" />
            </label>
          </div>
          <div className="col-12 col-sm-4 mb-3">
            <label className="w-100">
              <p className="mb-1 font-size-caption font-color-light">
              Zweitname (optional)
              </p>
              <input className="rounded-0 w-100" />
            </label>
          </div>
          <div className="col-12 col-sm-4 mb-3">
            <label className="w-100">
              <p className="mb-1 font-size-caption font-color-light">
              Nachname*
              </p>
              <input name="lastName" value={lastName} className="rounded-0 w-100" />
            </label>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-sm-6 mb-3">
            <label className="w-100">
              <p className="mb-1 font-size-caption font-color-light">
              Land*
              </p>
              <Dropdown
                name="deliveryCountry"
                placeholder="Select a country"
                value={deliveryCountry}
              >
                {
                  Object.entries(countries).map(([code, name]) => (
                    <option value={code} key={code}>
                      { name }
                    </option>
                  ))
                }
              </Dropdown>
            </label>
          </div>
          <div className="col-12 col-sm-6 mb-3">
            <label className="w-100">
              <p className="mb-1 font-size-caption font-color-light">City*</p>
              <input name="shipping[town_city]" value={shippingTownCity} className="rounded-0 w-100" />
            </label>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-sm-6 mb-3">
            <label className="w-100">
              <p className="mb-1 font-size-caption font-color-light">
              Anschrift Zeile 1*
              </p>
              <input
                name="shipping[street]"
                value={shippingStreet}
                className="rounded-0 w-100"
                placeholder="House number, steet, etc."
              />
            </label>
          </div>
          <div className="col-12 col-sm-6 mb-3">
            <label className="w-100">
              <p className="mb-1 font-size-caption font-color-light">
              Anschrift Zeile 2 (optional)
              </p>
              <input
                name="street2"
                value={shippingStreet2}
                className="rounded-0 w-100"
                placeholder="Appartment, buero, etc."
              />
            </label>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-sm-6 mb-3">
            <label className="w-100">
              <p className="mb-1 font-size-caption font-color-light">
              Staat / Provinz / Region*
              </p>
              <Dropdown
                name="deliveryRegion"
                value={deliveryRegion}
                placeholder="Select a region"
              >
                {
                  Object.entries(subdivisions).map(([code, name]) => (
                    <option key={code} value={code}>
                    { name }
                    </option>
                  ))
                }
              </Dropdown>
            </label>
          </div>
          <div className="col-12 col-sm-6 mb-3">
            <label className="w-100">
              <p className="mb-1 font-size-caption font-color-light">
              Postleitzahl*
              </p>
              <input
                name="shipping[postal_zip_code]"
                value={shippingPostalZipCode}
                className="rounded-0 w-100"
              />
            </label>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-sm-6 mb-3">
            <label className="w-100">
              <p className="mb-1 font-size-caption font-color-light">
                Telephone
              </p>
              <input className="rounded-0 w-100" />
            </label>
          </div>
          <div className="col-12 col-sm-6 mb-3">
            <label className="w-100">
              <p className="mb-1 font-size-caption font-color-light">
                Email adresse*
              </p>
              <input
                name="customer[email]"
                value={customerEmail}
                className="rounded-0 w-100"
              />
            </label>
          </div>
        </div>
        <div className="row">
          <div className="col-12 mb-3">
            <label className="w-100">
              <p className="mb-1 font-size-caption font-color-light">
              Versandart*
              </p>
              <Dropdown
                name="fulfillment[shipping_method]"
                value={
                  selectedShippingOption
                  ? (`${selectedShippingOption.description} - ${selectedShippingOption.price.formatted_with_code}`)
                  : ''
                }
                placeholder="Select a shipping method"
              >
                {
                  shippingOptions && shippingOptions.map(option => (
                    <option key={option.id} value={option.id}>
                    { `${option.description} - $${option.price.formatted_with_code}` }
                    </option>
                  ))
                }
              </Dropdown>
            </label>
          </div>
        </div>
        <div
          onClick={this.toggleNewsletter}
          className="d-flex mb-4 flex-nowrap cursor-pointer"
        >
          <Checkbox
            onClick={this.toggleNewsletter}
            checked={receiveNewsletter}
            className="mr-3"
          />
          <p>
            Erhalten Sie unsere Neuigkeiten, Lagerauffüllungen, guten Pläne und Neuigkeiten in Ihrer Mailbox!
            Seien Sie versichert, Sie werden nicht überflutet, wir versenden nur einen Newsletter
            pro Monat ca. 🙂
          </p>
        </div>
        <label className="w-100 mb-3">
          <p className="mb-1 font-size-caption font-color-light">
          Bestellhinweise (optional)
          </p>
          <textarea name="orderNotes" value={orderNotes} className="rounded-0 w-100" />
        </label>
      </>
    );
  }
}

ShippingForm.propTypes = {
  shippingOptions: PropTypes.array,
  countries: PropTypes.object,
  subdivisions: PropTypes.object,
  deliveryCountry: PropTypes.string,
  deliveryRegion: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  selectedShippingOptionId: PropTypes.string,
  selectedShippingOption: PropTypes.object,
  shippingTownCity: PropTypes.string,
  shippingStreet: PropTypes.string,
  shippingStreet2: PropTypes.string,
  shippingPostalZipCode: PropTypes.string,
  customerEmail: PropTypes.string,
  orderNotes: PropTypes.string,
}
