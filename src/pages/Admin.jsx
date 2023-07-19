import NavAdmin from "./../components/NavAdmin";
import Footer from "./../components/Footer";
import ItemAdmin from "../components/ItemAdmin";
import { ApiContext } from "./../App";
import { useContext, useEffect, useRef, useState } from "react";
import { ref, set } from "firebase/database";
import { database } from "./../firebase";

function Admin() {
  const nameRef = useRef(null);
  const linkRef = useRef(null);
  const statusRef = useRef(null);
  const topRef = useRef(null);
  const addRef = useRef(null);
  const [isTakeData, setIsTakeData] = useState(false);
  const { dataProducts, setDataProducts } = useContext(ApiContext);

  useEffect(() => {
    if (dataProducts) {
      setIsTakeData(true);
      if (dataProducts.length <= 199) {
        addRef.current.disabled = false;
      } else {
        addRef.current.disabled = true;
      }
    }
  }, [dataProducts]);

  const handleAdd = () => {
    const objectAdd = {
      name: nameRef.current.value,
      link: linkRef.current.value,
      status: statusRef.current.checked,
      top: topRef.current.checked,
    };

    nameRef.current.value = "";
    linkRef.current.value = "";
    statusRef.current.checked = false;
    topRef.current.checked = false;

    setDataProducts((prev) => [...prev, objectAdd]);

    set(ref(database, `fish-store/products/`), [...dataProducts, objectAdd]);
  };

  return (
    <>
      <NavAdmin></NavAdmin>

      <div className="bg-light text-secondary">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <h2 className="my-4">Danh sách sản phẩm</h2>
            <div>
              <button
                className="btn btn-primary btn-sm"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#modalAdd"
                disabled
                ref={addRef}
              >
                add
              </button>

              {/* Modal */}
              <div
                className="modal fade"
                id="modalAdd"
                tabIndex={-1}
                aria-labelledby="modalAddLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1
                        className="modal-title fs-5 fw-bold"
                        id="modalAddLabel"
                      >
                        Thêm sản phẩm
                      </h1>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      />
                    </div>
                    <div className="modal-body">
                      <div className="mb-2">
                        <label htmlFor="name" className="form-label fw-bold">
                          Tên sản phẩm
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="abcxyz"
                          id="name"
                          ref={nameRef}
                        />
                      </div>
                      <div className="mb-2">
                        <label htmlFor="url-img" className="form-label fw-bold">
                          Link ảnh
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="https://img-exam.com"
                          id="url-img"
                          ref={linkRef}
                        />
                      </div>
                      <div className="form-check form-switch my-2">
                        <input
                          className="form-check-input check-success"
                          type="checkbox"
                          id="flexSwitchCheckDefault"
                          ref={statusRef}
                        />
                        <label
                          className="form-check-label text-success fw-bold"
                          htmlFor="flexSwitchCheckDefault"
                        >
                          Còn hàng
                        </label>
                      </div>
                      <div className="form-check form-switch">
                        <input
                          className="form-check-input check-danger"
                          type="checkbox"
                          id="flexSwitchCheckDefault"
                          ref={topRef}
                        />
                        <label
                          className="form-check-label text-danger fw-bold"
                          htmlFor="flexSwitchCheckDefault"
                        >
                          Sản phẩm nổi bật
                        </label>
                      </div>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Thoát
                      </button>
                      <button
                        type="button"
                        className="btn btn-primary"
                        data-bs-dismiss="modal"
                        onClick={handleAdd}
                      >
                        Thêm
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            {isTakeData &&
              dataProducts.map((val, idx) => (
                <div className="col-md-6" key={idx}>
                  <ItemAdmin data={val} id={idx} />
                </div>
              ))}
          </div>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
}

export default Admin;
