import { useRef, useEffect, memo } from "react";
import { Link, useLocation } from "react-router-dom";

function MyNav() {
  const navEl = useRef(null);
  const location = useLocation();
  let navbarClass;
  let activeHome;
  let activeProducts;

  // Check pathname
  if (location.pathname === "/") {
    navbarClass = "navbar-dark";
    activeHome = "active";
    activeProducts = "";
  } else if (location.pathname === "/products") {
    navbarClass = "navbar-light bg-navbar";
    activeHome = "";
    activeProducts = "active";
  }

  useEffect(() => {
    const handleScroll = () => {
      if (location.pathname === "/") {
        if (window.scrollY > 100) {
          navEl.current.classList.add("bg-navbar");
          navEl.current.classList.add("navbar-light");
          navEl.current.classList.remove("navbar-dark");
        } else {
          navEl.current.classList.remove("bg-navbar");
          navEl.current.classList.remove("navbar-light");
          navEl.current.classList.add("navbar-dark");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`navbar fixed-top navbar-expand-lg ${navbarClass}`}
      ref={navEl}
    >
      <div className="container">
        <Link to="/">
          <img src="img/logo.png" alt="logo" className="logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className={`nav-link ${activeHome}`}
                aria-current="page"
                to="/"
              >
                Trang chủ
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${activeProducts}`} to="/products">
                Sản phẩm
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/admin">
                Admin
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default memo(MyNav);
