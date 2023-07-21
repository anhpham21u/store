import { useEffect, useRef } from "react";
import ContactBtn from "./ContactBtn";

function Product({ data }) {
  const topEl = useRef(null);
  const imgEl = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      topEl.current.style.height = topEl.current.clientWidth + "px";
    };

    topEl.current.style.height = topEl.current.clientWidth + "px";

    if (imgEl.current.naturalWidth >= imgEl.current.naturalHeight) {
      imgEl.current.style.height = "100%";
      imgEl.current.style.width = "auto";
    } else {
      imgEl.current.style.width = "100%";
      imgEl.current.style.height = "auto";
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="card product h-100">
      <div
        ref={topEl}
        className="overflow-hidden d-flex justify-content-center align-items-center"
      >
        <img src={data.link} alt="Card cap" ref={imgEl} />
      </div>

      <div className="card-body pt-1">
        <span className="card-text card-status">
          Tình trạng:{" "}
          {data.status === true ? (
            <span className="text-success fw-bold">Còn hàng</span>
          ) : (
            <span className="text-danger fw-bold">Hết hàng</span>
          )}
        </span>
        <div className="d-flex justify-content-between align-items-center">
          <p className="card-title fw-bold">{data.name}</p>
          <ContactBtn />
        </div>
      </div>
    </div>
  );
}

export default Product;
