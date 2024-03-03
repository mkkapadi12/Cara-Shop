import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
const Footer = () => {
  return (
    <>
      <Wrapper>
        <div className="container">
          <div className="main-footer grid grid-four-column">
            <div className="sub-footer">
              <img src="/images/logo.png" alt="logo" />
              <h3>Contact</h3>
              <div className="col">
                <p>
                  <strong>Address:</strong>562 Wellington Road street 32 Son
                  Francisco
                </p>
                <p>
                  <strong>Phone:</strong>+01 2222 365/(+91)0123456789
                </p>
                <p>
                  <strong>Time:</strong> 10:00 -18:00. Mon-Sat
                </p>
              </div>
              <div className="follow">
                <h3>Follow Us</h3>
                <ul>
                  <NavLink>
                    <WhatsAppIcon className="icon" />
                  </NavLink>
                  <NavLink>
                    <TwitterIcon className="icon" />
                  </NavLink>
                  <NavLink>
                    <FacebookIcon className="icon" />
                  </NavLink>
                  <NavLink>
                    <InstagramIcon className="icon" />
                  </NavLink>
                  <NavLink>
                    <YouTubeIcon className="icon" />
                  </NavLink>
                </ul>
              </div>
            </div>

            <div className="sub-footer">
              <h3>About</h3>
              <ul>
                <li>
                  <NavLink className="link">Aboout Us</NavLink>
                </li>
                <li>
                  <NavLink className="link">Delivery Information</NavLink>
                </li>
                <li>
                  <NavLink className="link">Privacy Policy</NavLink>
                </li>
                <li>
                  <NavLink className="link">Terms and Conditions</NavLink>
                </li>
                <li>
                  <NavLink className="link">Contact Us</NavLink>
                </li>
              </ul>
            </div>

            <div className="sub-footer">
              <h3>My Account</h3>
              <ul>
                <li>
                  <NavLink className="link">Sign In</NavLink>
                </li>
                <li>
                  <NavLink className="link">View More</NavLink>
                </li>
                <li>
                  <NavLink className="link">My Wishlist</NavLink>
                </li>
                <li>
                  <NavLink className="link">Tarck My Order</NavLink>
                </li>
                <li>
                  <NavLink className="link">Help</NavLink>
                </li>
              </ul>
            </div>

            <div className="sub-footer">
              <h3>Install App</h3>
              <p>From App Store or Google Play</p>
              <img src="/images/app.jpg" alt="Apple store" />
              <img src="/images/play.jpg" alt="Google Play store" />
              <p>Secured Payment Gateways</p>
              <img src="/images/pay.png" alt="Please pay ammout" />
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  .main-footer {
    background-color: #fff;

    .sub-footer {
      li {
        margin: 5px 0;
      }

      .follow .icon {
        font-size: 23px;
        color: #050707;
        margin: 0px 5px;
      }
    }

    h3 {
      margin: 15px 0px;
      color: #088178;
      font-size: 24px;
    }

    p {
      color: #7f7070;

      strong {
        color: #000;
      }
    }
  }
`;

export default Footer;
