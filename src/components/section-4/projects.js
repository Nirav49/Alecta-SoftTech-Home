import React from 'react';

const Projects = () => {
  return (
    <div className="container-fluid gtco-numbers-block">
        <div className="container">
          <svg width="100%" viewBox="0 0 1600 400">
            <defs>
              <linearGradient id="PSgrad_03" x1="80.279%" x2="0%" y2="0%">
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
            <clipPath id="clip-path3"></clipPath>

            <path
              fill-rule="evenodd"
              fill="url(#PSgrad_03)"
              d="M98.891,386.002 L1527.942,380.805 C1581.806,380.610 1599.093,335.367 1570.005,284.353 L1480.254,126.948 C1458.704,89.153 1408.314,59.820 1366.025,57.550 L298.504,0.261 C238.784,-2.944 166.619,25.419 138.312,70.265 L16.944,262.546 C-24.214,327.750 12.103,386.317 98.891,386.002 Z"
            ></path>

            <clipPath id="ctm" fill="none">
              <path d="M98.891,386.002 L1527.942,380.805 C1581.806,380.610 1599.093,335.367 1570.005,284.353 L1480.254,126.948 C1458.704,89.153 1408.314,59.820 1366.025,57.550 L298.504,0.261 C238.784,-2.944 166.619,25.419 138.312,70.265 L16.944,262.546 C-24.214,327.750 12.103,386.317 98.891,386.002 Z"></path>
            </clipPath>

            <image
              clip-path="url(#ctm)"
              xlinkHref="/images/word-map.png"
              height="800px"
              width="100%"
              className="svg__image"
            />
          </svg>
          <div className="row">
            <div className="col-3">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">125</h5>
                  <p className="card-text">Active Projects</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">200</h5>
                  <p className="card-text">Business Growth</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">530</h5>
                  <p className="card-text">Completed Projects</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">941</h5>
                  <p className="card-text">Happy Clients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Projects;