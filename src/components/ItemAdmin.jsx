import { ApiContext } from "./../App";
import { useContext, useRef, useState } from "react";
import { ref, set } from "firebase/database";
import { database } from "./../firebase";

function ItemAdmin({ data, id }) {
  const nameRef = useRef(null);
  const linkRef = useRef(null);
  const statusRef = useRef(null);
  const topRef = useRef(null);
  const [checkedStatus, setCheckedStatus] = useState(data.status);
  const [checkedTop, setCheckedTop] = useState(data.top);
  const { dataProducts, setDataProducts } = useContext(ApiContext);

  const handleSetData = () => {
    const objectChange = {
      name: nameRef.current.value,
      link: linkRef.current.value,
      status: statusRef.current.checked,
      top: topRef.current.checked,
    };

    const newDataProducts = dataProducts.map((val, idx) => {
      if (idx === id) {
        return objectChange;
      }
      return val;
    });
    setDataProducts(newDataProducts);

    set(ref(database, `fish-store/products/${id}`), objectChange);
  };

  const handleRemoveItem = () => {
    const tmpArr = [...dataProducts];
    tmpArr.splice(id, 1);
    setDataProducts(tmpArr);
    set(ref(database, `fish-store/products/`), tmpArr);
  };

  return (
    <div className="admin-item">
      <div className="d-flex">
        <div className="par-img-admin">
          <img className="img-admin h-100" src={data.link} alt="admin" />
        </div>
        <div className="ms-4 overflow-hidden w-100">
          <div className="d-flex justify-content-between">
            <p className="fw-bold mb-1">{data.name}</p>
            <div data-bs-toggle="modal" data-bs-target={"#modalItem" + id}>
              <i className="fa-regular fa-pen-to-square cursor"></i>
            </div>

            {/* Modal */}
            <div
              className="modal fade"
              id={"modalItem" + id}
              tabIndex={-1}
              aria-labelledby={"modalItemLabel" + id}
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1
                      className="modal-title fs-5 fw-bold"
                      id={"modalItemLabel" + id}
                    >
                      Chỉnh sửa
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
                        defaultValue={data.name}
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
                        defaultValue={data.link}
                        ref={linkRef}
                      />
                    </div>
                    <div className="form-check form-switch my-2">
                      <input
                        className="form-check-input check-success"
                        type="checkbox"
                        id="flexSwitchCheckDefault"
                        defaultChecked={checkedStatus}
                        ref={statusRef}
                        onClick={() => {
                          setCheckedStatus(!checkedStatus);
                        }}
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
                        defaultChecked={checkedTop}
                        ref={topRef}
                        onClick={() => {
                          setCheckedTop(!checkedTop);
                        }}
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
                      Close
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary"
                      data-bs-dismiss="modal"
                      onClick={handleSetData}
                    >
                      Save changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className="mb-1 admin-link">{data.link}</p>
          <p className="mb-1">
            Tình trạng:{" "}
            {data.status ? (
              <span className="text-success fw-bold">Còn hàng</span>
            ) : (
              <span className="text-danger fw-bold">Hết hàng</span>
            )}
          </p>

          <p className="mb-0 d-flex align-items-center">
            {data.top && (
              <span className="p-1 bg-danger text-light rounded-3 fw-bold fs-13">
                Top
              </span>
            )}
            <i
              className="fa-regular fa-trash-can ms-auto cursor"
              onClick={handleRemoveItem}
            ></i>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ItemAdmin;
