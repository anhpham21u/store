import MyNav from "../components/MyNav";
import Carousel from "../components/Carousel";
import Product from "../components/Product";
import QuoteCarosuel from "../components/Quotes";
import Form from "../components/Form";
import Footer from "../components/Footer";
import { ApiContext } from "../App";
import { useContext } from "react";

function Home() {
  const { dataProducts } = useContext(ApiContext);
  let isTakeData = false;
  let topArr;

  if (dataProducts) {
    isTakeData = true;
    topArr = dataProducts.filter((val, idx) => {
      return val.top === true;
    });
  }

  return (
    <>
      <MyNav></MyNav>
      <Carousel></Carousel>

      <section className="container mt-6">
        <div className="row">
          <div className="col-lg mx-3">
            <img className="w-100 img-ab" src="img/about1.jpg" alt="about" />
          </div>
          <div className="col-lg mx-3 my-3">
            <div className="h-100 d-flex align-items-center">
              <div>
                <h3 className="mb-4">Thiết kế, sản xuất mô hình thủy sinh</h3>
                <p className="mb-4">
                  Chúng tôi chuyên thiết kế và sản xuất những mô hình thủy sinh
                  chất lượng cao, sắc nét đến từng chi tiết. Với sự kết hợp tài
                  năng và sự sáng tạo của chúng tôi, chúng tôi tạo ra những cảnh
                  quan nước sống tuyệt vời, tạo không gian sống tự nhiên cho cá
                  cảnh và mang đến trải nghiệm tuyệt vời cho khách hàng của bạn.
                </p>
                <button className="btn btn-primary btn-lg">Liên hệ</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mt-5">
        <div className="row">
          <div className="col-lg mx-3 my-3">
            <div className="h-100 d-flex align-items-center">
              <div>
                <h3 className="mb-4">Dịch vụ bảo trì hồ cá</h3>
                <p className="mb-4">
                  Chúng tôi cung cấp dịch vụ bảo trì hồ cá chuyên nghiệp cho cửa
                  hàng bán cá cảnh của bạn. Với đội ngũ chuyên gia giàu kinh
                  nghiệm và hiểu biết sâu sắc về hệ sinh thái nước, chúng tôi
                  cam kết đảm bảo hồ cá của bạn luôn trong tình trạng hoàn hảo.
                </p>
                <button className="btn btn-primary btn-lg">Liên hệ</button>
              </div>
            </div>
          </div>
          <div className="col-lg mx-3">
            <img className="w-100 img-ab" src="img/about2.jpg" alt="about" />
          </div>
        </div>
      </section>

      <section className="bg-dark text-light">
        <div className="container py-7 mt-6">
          <div className="row">
            <div className="col-sm mb-3">
              <p className="text-center mt-3">
                <i className="fa-solid fa-fish fa-2xl"></i>
              </p>
              <h4 className="text-center mt-5">Nguồn gốc rõ ràng</h4>
              <p className="text-center mt-4">
                Chúng tôi cung cấp cá từ những nguồn cung cấp đáng tin cậy và có
                nguồn gốc rõ ràng.
              </p>
            </div>
            <div className="col-sm mb-3">
              <p className="text-center mt-3">
                <i className="fa-solid fa-notes-medical fa-2xl"></i>
              </p>
              <h4 className="text-center mt-5">Nguồn gốc rõ ràng</h4>
              <p className="text-center mt-4">
                Chúng tôi cung cấp cá từ những nguồn cung cấp đáng tin cậy và có
                nguồn gốc rõ ràng.
              </p>
            </div>
            <div className="col-sm mb-3">
              <p className="text-center mt-3">
                <i className="fa-solid fa-gear fa-2xl"></i>
              </p>
              <h4 className="text-center mt-5">Nguồn gốc rõ ràng</h4>
              <p className="text-center mt-4">
                Chúng tôi cung cấp cá từ những nguồn cung cấp đáng tin cậy và có
                nguồn gốc rõ ràng.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-5 mt-4">
        <h2 className="text-center mb-5">CÁC GIỐNG CÁ BÁN CHẠY NHẤT</h2>
        <div className="row mb-4">
          {isTakeData &&
            topArr.map((val, idx) => (
              <div className="col-lg-3 col-md-4 col-6 mb-4" key={idx}>
                <Product data={val}></Product>
              </div>
            ))}
        </div>
      </section>

      <QuoteCarosuel />
      <Form />
      <Footer />
    </>
  );
}

export default Home;
