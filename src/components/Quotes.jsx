import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import React, { memo } from "react";
import elon from "./../img/elon.jpg";
import zuck from "./../img/zuck.jpg";

function QuoteCarosuel() {
  return (
    <section className="py-5 bg-feedback">
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol lg="10" xl="8">
            <h2 className="text-center mb-5">PHẢN HỒI CỦA KHÁCH HÀNG</h2>
            <MDBCard
              className="rounded-3 carousel carousel-dark slide px-5 quotes"
              id="carouselQuotes"
              data-bs-ride="carousel"
            >
              <MDBCardBody className="p-sm-5 carousel-inner">
                <div className="carousel-item active">
                  <div className="d-flex justify-content-center mb-4">
                    <MDBCardImage
                      src={elon}
                      className="rounded-circle shadow-1-strong"
                      width="100"
                      height="100"
                    />
                  </div>
                  <figure className="mb-0 text-center">
                    <MDBTypography blockquote className="mb-4">
                      <p>
                        <span className="font-italic">
                          Cửa hàng của anh Hải Long là một thiên đường cho những
                          người yêu thích cá cảnh. Từ những loài cá độc đáo đến
                          những cây cảnh tinh tế, tạo nên không gian sống tự
                          nhiên và thư giãn
                        </span>
                      </p>
                    </MDBTypography>
                    <figcaption className="blockquote-footer mb-0">
                      Elon Musk <cite title="Source Title">éo nói thế</cite>
                    </figcaption>
                  </figure>
                </div>
                <div className="carousel-item">
                  <div className="d-flex justify-content-center mb-4">
                    <MDBCardImage
                      src={zuck}
                      className="rounded-circle shadow-1-strong"
                      width="100"
                      height="100"
                    />
                  </div>
                  <figure className="mb-0 text-center">
                    <MDBTypography blockquote className="mb-4">
                      <p>
                        <span className="font-italic">
                          Cá tươi, mọi loại đều tươi ngon, chất lượng. Hương vị
                          đậm đà, đáp ứng đủ sự kén chọn của khách hàng. Nhân
                          viên nhiệt tình, phục vụ tận tâm.
                        </span>
                      </p>
                    </MDBTypography>
                    <figcaption className="blockquote-footer mb-0">
                      Mark Zuckerberg <cite title="Source Title"></cite>
                    </figcaption>
                  </figure>
                </div>
                <div className="carousel-item">
                  <div className="d-flex justify-content-center mb-4">
                    <MDBCardImage
                      src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(28).webp"
                      className="rounded-circle shadow-1-strong"
                      width="100"
                      height="100"
                    />
                  </div>
                  <figure className="mb-0 text-center">
                    <MDBTypography blockquote className="mb-4">
                      <p>
                        <span className="font-italic">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Pariatur sint nesciunt ad itaque aperiam
                          expedita officiis incidunt minus facere molestias
                          inventore.
                        </span>
                      </p>
                    </MDBTypography>
                    <figcaption className="blockquote-footer mb-0">
                      Kate Williams in <cite title="Source Title">Vogue</cite>
                    </figcaption>
                  </figure>
                </div>
              </MDBCardBody>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselQuotes"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselQuotes"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}

export default memo(QuoteCarosuel);
