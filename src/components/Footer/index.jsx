import React from "react";
import PATHS from "../../constants/paths";
import { Link } from "react-router-dom";
import useQuery from "../../hooks/useQuery";
import { pageService } from "../../services/pageService";

const Footer = () => {
  const { data: footerData } = useQuery(() =>
    pageService.getPageDataByName("footer")
  );

  const { data } = footerData || {};

  return (
    <footer className="footer">
      <div className="footer-middle">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-lg-5">
              <div className="widget widget-about">
                <img
                  src="/assets/images/logo.svg"
                  className="footer-logo"
                  alt="Footer Logo"
                  width={120}
                />
                <p>{data?.description}</p>
                <div className="widget-call">
                  <i className="icon-phone" /> Got Question? Call us 24/7{" "}
                  <a href="tel:#">{data?.hotline}</a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-2 offset-lg-1">
              <div className="widget">
                <h4 className="widget-title">Useful Links</h4>
                <ul className="widget-list">
                  <li>
                    <Link to={PATHS.ABOUT}>About Us</Link>
                  </li>
                  <li>
                    <Link to={PATHS.PRODUCT.INDEX}>Product</Link>
                  </li>
                  <li>
                    <Link to={PATHS.FAQ}>FAQs</Link>
                  </li>
                  <li>
                    <Link to={PATHS.CONTACT}>Contact us</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-lg-2">
              <div className="widget">
                <h4 className="widget-title">Customer Service</h4>
                <ul className="widget-list">
                  <li>
                    <Link to={PATHS.PAYMENT}>Payment Methods</Link>
                  </li>
                  <li>
                    <Link to={PATHS.RETURNS}>Returns</Link>
                  </li>
                  <li>
                    <Link to={PATHS.SHIPPING}>Shipping</Link>
                  </li>
                  <li>
                    <Link to={PATHS.PRIVACY}>Privacy Policy</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-lg-2">
              <div className="widget">
                <h4 className="widget-title">My Account</h4>
                <ul className="widget-list">
                  <li>
                    <Link to={PATHS.DASHBOARD.INDEX}>Account Details</Link>
                  </li>
                  <li>
                    <Link to={PATHS.CART}>View Cart</Link>
                  </li>
                  <li>
                    <Link to={PATHS.DASHBOARD.WISHLIST}>My Wishlist</Link>
                  </li>
                  <li>
                    <Link to={PATHS.DASHBOARD.ORDERS}>Track My Order</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p className="footer-copyright">
            Copyright © 2023{" "}
            <a href="https://cfdcircle.vn/" target="_blank" rel="noreferrer">
              <strong>CFD Circle</strong>
            </a>
            . All Rights Reserved.
          </p>
          <figure className="footer-payments">
            <img
              src="/assets/images/payments.png"
              alt="Payment methods"
              width={272}
              height={20}
            />
          </figure>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
