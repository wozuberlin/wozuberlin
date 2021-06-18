import React, { Component } from 'react';
import ReviewList from './ReviewList';
import Modal from '../common/atoms/Modal';

const reviews = [
  {
    
    title: 'Vorteile',
    description: 'Wir verkaufen aus einzel Stücke',
    reviewBy: 'Victor.',
    date: '2021'
  },
  {
    
    title: 'Transportkosten!',
    description:
      'Fragen Sie unverbindlich die Kosten und Preise an.',
    reviewBy: 'David',
    date: '2021'
  },
  {
    stars: '4',
    title: 'Mindestbestellwert',
    description:
      'Mindestbestellwert',
    reviewBy: 'David',
    date: '2021'
  },
  {
    
    title: 'Lieferoptionen!',
    description:
      'Lieferoptionen',
    reviewBy: 'David',
    date: '2021'
  }
];

export default class ClientReview extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };

    this.handleClose = this.handleClose.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
  }

  /**
   * Close the review modal
   */
  handleClose() {
    this.setState({ open: false });
  }

  /**
   * Show the review modal
   */
  handleOpen() {
    this.setState({ open: true });
  }

  render() {
    const { open } = this.state;

    return (
      <div id="reviews" className="custom-container pb-5">
        <Modal
          isOpen={open}
          onClose={this.handleClose}
          maxW="1000px"
        >
          <div className="d-flex justify-content-between align-items-center pb-3">
            <p className="font-size-subheader font-weight-medium">
              Alle wichtigen infos
            </p>
            <img
              tabIndex="0"
              src="/icon/cross.svg"
              className="w-24 cursor-pointer"
              onClick={this.handleClose}
              alt="Cross icon"
            />
          </div>
          <ReviewList reviews={reviews} />
        </Modal>
        <div className="row">
          <div className="col-12 col-lg-10 offset-lg-1">
            <div className="d-flex justify-content-between flex-column flex-sm-row align-items-sm-center mb-3">
              <p className="font-size-title font-weight-medium mb-2 mb-sm-0">
                Vor dem Kauf beachten
              </p>
            </div>
            <ReviewList reviews={reviews}>
              <button
                type="button"
                onClick={this.handleOpen}
                className="text-center bg-transparent w-100 h-72 px-3 text-decoration-underline"
              >
                infos
              </button>
            </ReviewList>
          </div>
        </div>
      </div>
    );
  }
}
