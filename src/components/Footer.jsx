import { Link } from "react-router-dom";
import { memo } from "react";

function Footer() {
  return (
    <footer className="bg-dark pt-5 text-muted">
      <div className="container">
        <div className="row mb-4">
          <div className="col">
            <h5>Trang</h5>
            <div className="mb-1">
              <Link className="text-muted text-decoration-none" to="/">
                Trang chủ
              </Link>
            </div>
            <div className="mb-1">
              <Link className="text-muted text-decoration-none" to="/products">
                Sản phẩm
              </Link>
            </div>
          </div>
          <div className="col">
            <h5>Liên hệ</h5>
            <p className="mb-1">
              Địa chỉ: 12 Khuất Duy Tiến, Thanh Xuân Trung, Hà Nội
            </p>
            <p className="mb-1">Hotline: 0923 356 829</p>
          </div>
        </div>
        <div className="d-sm-flex justify-content-between end-foot py-3">
          <p>© 2022 Company, Inc. All rights reserved.</p>
          <ul className="list-unstyled d-flex">
            <li>
              <a
                className="text-muted"
                href="https://www.facebook.com/phamducmanh217"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-facebook fa-2xl ms-2"></i>
              </a>
              <a
                className="text-muted"
                href="https://www.facebook.com/messages/t/100015563442862"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-facebook-messenger fa-2xl ms-2"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default memo(Footer);
