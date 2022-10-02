import React from "react";

export default function Portfolio() {
  return (
    <section id="portfolio" className="portfolio section-bg">
      <div className="container">
        <div className="section-title">
          <h2>Portfolio</h2>
          <p>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </p>
        </div>

        <div
          className="row portfolio-container"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img
                src="/portfolio/ndc.png"
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-links">
                <a
                  href="/portfolio/ndc.png"
                  data-gallery="portfolioGallery"
                  className="portfolio-lightbox"
                  title="App 1"
                >
                  <i className="bx bx-plus"></i>
                </a>
                <a href="https://anwargates.github.io/Lab-NDC/" title="More Details">
                  <i className="bx bx-link"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <img
                src="/portfolio/porto1.png"
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-links">
                <a
                  href="/portfolio/porto1.png"
                  data-gallery="portfolioGallery"
                  className="portfolio-lightbox"
                  title="Web 3"
                >
                  <i className="bx bx-plus"></i>
                </a>
                <a href="" title="More Details">
                  <i className="bx bx-link"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img
                src="/portfolio/porto2.png"
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-links">
                <a
                  href="/portfolio/porto2.png"
                  data-gallery="portfolioGallery"
                  className="portfolio-lightbox"
                  title="App 2"
                >
                  <i className="bx bx-plus"></i>
                </a>
                <a href="" title="More Details">
                  <i className="bx bx-link"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
