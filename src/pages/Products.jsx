import MyNav from "./../components/MyNav";
import Footer from "./../components/Footer";
import Product from "../components/Product";
import { ApiContext } from "./../App";
import { useContext } from "react";

function Products() {
  const { dataProducts } = useContext(ApiContext);

  return (
    <>
      <MyNav></MyNav>

      {/* body */}
      <section className="container mt-6">
        <h2 className="text-center p-3">Danh sách sản phẩm</h2>
        <div className="row">
          {dataProducts &&
            dataProducts.map((val, idx) => {
              return (
                <div className="col-lg-3 col-md-4 col-6 mb-4" key={idx}>
                  <Product data={val} />
                </div>
              );
            })}
        </div>
      </section>

      <Footer></Footer>
    </>
  );
}

export default Products;
