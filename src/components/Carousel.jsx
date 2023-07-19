import { memo } from "react";

function Carousel() {
  return (
    <div
      id="carouselFade"
      className="carousel slide carousel-fade"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselFade"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselFade"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselFade"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="img/b1.jpg"
            className="d-block w-100 car-img"
            alt="background"
          />
          <div className="carousel-caption d-none d-md-block">
            <h5 className="fs-1">Wellcome to my fucking website!!!</h5>
            <p className="fs-5 d-none d-lg-block">
              Ở đây chúng tôi bán cá. Ấn nút mua ở dưới lày lày ↙ ↙ ↙
            </p>
            <button className="btn btn-primary btn-lg">Mua ngay</button>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="img/b2.jpg"
            className="d-block w-100 car-img"
            alt="background"
          />
          <div className="carousel-caption d-none d-md-block">
            <h5 className="fs-1">Wellcome to my fucking website!!!</h5>
            <p className="fs-5 d-none d-lg-block">
              Khám phá thế giới cá cảnh tuyệt vời ngay hôm nay! Chúng tôi cung
              cấp những chú cá cảnh đẹp mắt, đa dạng về loại và màu sắc.
            </p>
            <button className="btn btn-primary btn-lg">Mua ngay</button>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="img/b3.jpg"
            className="d-block w-100 car-img"
            alt="background"
          />
          <div className="carousel-caption d-none d-md-block">
            <h5 className="fs-1">Wellcome to my fucking website!!!</h5>
            <p className="fs-5 d-none d-lg-block">
              Khám phá thế giới cá cảnh tuyệt vời ngay hôm nay! Chúng tôi cung
              cấp những chú cá cảnh đẹp mắt, đa dạng về loại và màu sắc.
            </p>
            <button className="btn btn-primary btn-lg">Mua ngay</button>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev d-none d-md-block"
        type="button"
        data-bs-target="#carouselFade"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next d-none d-md-block"
        type="button"
        data-bs-target="#carouselFade"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default memo(Carousel);
