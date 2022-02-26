import React from "react";

const Our_Expertise = () => {
  return (
    <div className="container-fluid gtco-features" id="about">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <h2>
              Explore The Services
              <br />
              We Offer For You
            </h2>
            <p>
              We leverage the latest technologies in web and mobile development.
              Whether it is cloud development or machine learning ML, our
              dedicated teams have the expertise, hands-on experience, and handy
              resources to meet all your requirements.
            </p>
            <a href="#">
              All Services
              <i className="fa fa-angle-right" aria-hidden="true"></i>
            </a>
          </div>
          <div className="col-lg-8">
            <svg id="bg-services" width="100%" viewBox="0 0 1000 800">
              <defs>
                <linearGradient
                  id="PSgrad_02"
                  x1="64.279%"
                  x2="0%"
                  y1="76.604%"
                  y2="0%"
                >
                  <stop
                    offset="0%"
                    stop-color="rgb(1,230,248)"
                    stop-opacity="1"
                  />
                  <stop
                    offset="100%"
                    stop-color="rgb(29,62,222)"
                    stop-opacity="1"
                  />
                </linearGradient>
              </defs>
              <path
                fill-rule="evenodd"
                opacity="0.102"
                fill="url(#PSgrad_02)"
                d="M801.878,3.146 L116.381,128.537 C26.052,145.060 -21.235,229.535 9.856,312.073 L159.806,710.157 C184.515,775.753 264.901,810.334 338.020,792.380 L907.021,652.668 C972.912,636.489 1019.383,573.766 1011.301,510.470 L962.013,124.412 C951.950,45.594 881.254,-11.373 801.878,3.146 Z"
              />
            </svg>
            <div className="row">
              <div className="col">
                <div className="card text-center">
                  <div className="oval">
                    <img
                      className="card-img-top"
                      src="/images/web-design.png"
                      alt=""
                    />
                  </div>
                  <div className="card-body">
                    <h3 className="card-title">Web Development</h3>
                    <p className="card-text">
                      We expertise in various JavaScript frameworks and
                      libraries for Web development. We work with front-end
                      technologies to develop interactive web Applications.
                    </p>
                  </div>
                </div>
                <div className="card text-center">
                  <div className="oval">
                    <img
                      className="card-img-top"
                      src="/images/marketing.png"
                      alt=""
                    />
                  </div>
                  <div className="card-body">
                    <h3 className="card-title">Marketing</h3>
                    <p className="card-text">
                      It's a step ahead in providing IT solutions throughout the
                      world. Our industry's finest and most seasoned digital
                      marketers have created a diverse range of digital
                      marketing solutions to meet various business needs and
                      financial restrictions.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card text-center">
                  <div className="oval">
                    <img
                      className="card-img-top"
                      src="/images/seo.png"
                      alt=""
                    />
                  </div>
                  <div className="card-body">
                    <h3 className="card-title">Website Design</h3>
                    <p className="card-text">
                      We are committed to offering outstanding web design
                      services that will assist you in establishing a
                      competitive online presence. By building unique website
                      design solutions, we advance both the clients' and the
                      company's paths.
                    </p>
                  </div>
                </div>
                <div className="card text-center">
                  <div className="oval">
                    <img
                      className="card-img-top"
                      src="/images/graphics-design.png"
                      alt=""
                    />
                  </div>
                  <div className="card-body">
                    <h3 className="card-title">Mobile App Development</h3>
                    <p className="card-text">
                      We build intuitive and engaging Android, ios and
                      cross-platform apps for businesses, consumers and
                      enterprises that end users love and adapt to them very
                      quickly.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Our_Expertise;
