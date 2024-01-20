import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="">
      {/* Footer */}
      <footer
        className="text-center text-lg-start text-dark"
        style={{ backgroundColor: "#ECEFF1" }}
      >
        {/* Section: Social media */}
        <section
          className="d-flex justify-content-between p-4 text-white"
          style={{ backgroundColor: "#0a6ca1" }}
        >
          {/* Left */}
          <div className="me-5">
            <span>Get connected with us on social networks:</span>
          </div>
          {/* Left */}
          {/* Right */}
          <div>
            <Link
              to="https://www.facebook.com/EgyTwins/"
              target="_blank"
              className="text-white me-4"
            >
              <i className="fab fa-facebook-f"></i>
            </Link>
            <Link
              to="https://twitter.com/EgyTwins_IS"
              className="text-white me-4"
              target="_blank"
            >
              <i className="fab fa-twitter"></i>
            </Link>

            <Link
              to="https://eg.linkedin.com/company/egytwins"
              className="text-white me-4"
              target="_blank"
            >
              <i className="fab fa-linkedin"></i>
            </Link>
          </div>
          {/* Right */}
        </section>
        {/* Section: Social media */}
        {/* Section: Links  */}
        <section className="">
          <div className="container text-center text-md-start mt-5">
            {/* Grid row */}
            <div className="row mt-3">
              {/* Grid column */}
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                {/* Content */}
                <h6 className="text-uppercase fw-bold">Egytwins</h6>
                <hr
                  className="mb-4 mt-0 d-inline-block mx-auto"
                  style={{
                    width: "60px",
                    backgroundColor: "#7c4dff",
                    height: "2px",
                  }}
                />
                <p>
                  EgyTwins is Limited Liability Egyptian Company L.L.C. Under
                  the investment authority regulation. The major 2 founders have
                  more than 20 years experience in the Software Developing and
                  IT Solutions along with 4 motivated professional calipers to
                  provide value added Integrated Solutions.
                </p>
              </div>
              {/* Grid column */}
              {/* Grid column */}
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold">Products</h6>
                <hr
                  className="mb-4 mt-0 d-inline-block mx-auto"
                  style={{
                    width: "60px",
                    backgroundColor: "#7c4dff",
                    height: "2px",
                  }}
                />
                <p>
                  <Link to="" className="text-dark">
                    MDBootstrap
                  </Link>
                </p>
                <p>
                  <Link to="" className="text-dark">
                    MDWordPress
                  </Link>
                </p>
                <p>
                  <Link to="" className="text-dark">
                    BrandFlow
                  </Link>
                </p>
                <p>
                  <Link to="" className="text-dark">
                    Bootstrap Angular
                  </Link>
                </p>
              </div>
              {/* Grid column */}
              {/* Grid column */}
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold">Useful links</h6>
                <hr
                  className="mb-4 mt-0 d-inline-block mx-auto"
                  style={{
                    width: "60px",
                    backgroundColor: "#7c4dff",
                    height: "2px",
                  }}
                />
                <p>
                  <Link to="" className="text-dark">
                    Your Account
                  </Link>
                </p>
                <p>
                  <Link to="" className="text-dark">
                    Become an Affiliate
                  </Link>
                </p>
                <p>
                  <Link to="" className="text-dark">
                    Shipping Rates
                  </Link>
                </p>
                <p>
                  <Link to="" className="text-dark">
                    Help
                  </Link>
                </p>
              </div>
              {/* Grid column */}
              {/* Grid column */}
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold">Contact</h6>
                <hr
                  className="mb-4 mt-0 d-inline-block mx-auto"
                  style={{
                    width: "60px",
                    backgroundColor: "#7c4dff",
                    height: "2px",
                  }}
                />
                <p>
                  <i className="fas fa-home mr-3"></i> 457 الهرم، أولى، قسم
                  الجيزة، محافظة الجيزة
                </p>
                <p>
                  <i className="fas fa-envelope mr-3"></i> info@egytwins.com
                </p>
                <p>
                  <i className="fas fa-phone mr-3"></i> + 01 234 567 88
                </p>
                <p>
                  <i className="fas fa-print mr-3"></i> + 01 234 567 89
                </p>
              </div>
              {/* Grid column */}
            </div>
            {/* Grid row */}
          </div>
        </section>
        {/* Section: Links  */}
        {/* Copyright */}
        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2024 Copyright:
          <Link className="text-dark" to="https://www.egytwins.com/">
            {"  "}Egytwins.com
          </Link>
        </div>
        {/* Copyright */}
      </footer>
      {/* Footer */}
    </div>
  );
};

export default Footer;
