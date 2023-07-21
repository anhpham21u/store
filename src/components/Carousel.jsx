import { memo } from "react";
import b1 from "./../img/b1.jpg";
import b2 from "./../img/b2.jpg";
import b3 from "./../img/b3.jpg";
import { Link } from "react-scroll";

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
          <img src={b1} className="d-block w-100 car-img" alt="background" />
          <div className="carousel-caption d-none d-md-block">
            <h5 className="fs-1">Wellcome to my fucking website!!!</h5>
            <p className="fs-5 d-none d-lg-block">
              Ở đây chúng tôi bán cá. Ấn nút mua ở dưới lày lày ↙ ↙ ↙
            </p>
            <Link activeClass="active" to="register" duration={500}>
              <button className="btn btn-primary btn-lg">Mua ngay</button>
            </Link>
          </div>
        </div>
        <div className="carousel-item">
          <img src={b2} className="d-block w-100 car-img" alt="background" />
          <div className="carousel-caption d-none d-md-block">
            <h5 className="fs-1">Wellcome to my fucking website!!!</h5>
            <p className="fs-5 d-none d-lg-block">
              Khám phá thế giới cá cảnh tuyệt vời ngay hôm nay! Chúng tôi cung
              cấp những chú cá cảnh đẹp mắt, đa dạng về loại và màu sắc.
            </p>
            <Link activeClass="active" to="register" duration={500}>
              <button className="btn btn-primary btn-lg">Mua ngay</button>
            </Link>
          </div>
        </div>
        <div className="carousel-item">
          <img src={b3} className="d-block w-100 car-img" alt="background" />
          <div className="carousel-caption d-none d-md-block">
            <h5 className="fs-1">Wellcome to my fucking website!!!</h5>
            <p className="fs-5 d-none d-lg-block">
              Khám phá thế giới cá cảnh tuyệt vời ngay hôm nay! Chúng tôi cung
              cấp những chú cá cảnh đẹp mắt, đa dạng về loại và màu sắc.
            </p>
            <Link activeClass="active" to="register" duration={500}>
              <button className="btn btn-primary btn-lg">Mua ngay</button>
            </Link>
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
