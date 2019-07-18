import React, { Component } from 'react';
import './Help.css'

class Help extends Component {
    render() {
        return (
            <div id="body">
            <div class="container">
              <div class="row">
                <div class="col-sm-12 col-lg-12 col-md-12 col-xs-12">
                  <h1 className="heading3"><b>Terms And Conditions</b></h1>
                </div>
              </div>
              <div class="row">
              <div class="col-sm-12 col-lg-12 col-md-12 col-xs-12">
                <h4 className="heading4"><b>Registration</b></h4>
              </div>
              </div>
              <div class="row">
              <div class="col-sm-12 col-lg-12 col-md-12 col-xs-12">
                <p className="p2"><b>By signing up to our website and purchasing products from Indian food, you are agreeing to the terms and conditions of sale, which apply to all transactions. Signing up to the service means we must have the following information:</b></p>
                <ol>
                  <li>
                    <p className="p3"><b>Your address, including the postcode of the billing address associated with the payment card.</b></p>
                  </li>
                  <li>
                    <p className="p4"><b>Your home telephone number</b></p>
                  </li>
                  <li>
                    <p className="p5"><b>Your email address, so we can supply you with important information such as your order confirmation and changes to the Indian Food Delivery Service.</b></p>
                  </li>
                </ol>
              </div>
              </div>
              <div class="row">
              <div class="col-sm-12 col-lg-12 col-md-12 col-xs-12">
                <h4 className="heading5"><b>Cancellation</b></h4>
              </div>
              </div>
              <div class="row">
              <div class="col-sm-12 col-lg-12 col-md-12 col-xs-12">
                <p className="p6"><b>Once full payment has been made it will not be refunded if you cancel your order [or place an order] within 3 days of your requested delivery date.</b></p>
              </div>
              </div>
              <div class="row">
              <div class="col-sm-12 col-lg-12 col-md-12 col-xs-12">
                <h4 className="heading6"><b>Refund Policy</b></h4>
              </div>
              </div>
              <div class="row">
              <div class="col-sm-12 col-lg-12 col-md-12 col-xs-12">
                <p className="p7"><b>If you are unsatisfied with any of the items in your order or any part of the delivery service from Indian Food please contact us - either by emailing us via the Contact Us page of the website. If you would like to make a comment or recommendation regarding our food, then please visit the Contact Us page of the website and select "Contact Us". As we sell perishable goods, we ask that you - the customer - inspect the food once you have opened the box. If you are unhappy with the goods, please contact us immediately.</b></p>
              </div>
              </div>
            </div>
            </div>
        );
    }
}

export default Help;