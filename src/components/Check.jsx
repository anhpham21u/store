import { useRef } from "react";
import { useContext } from "react";
import { CheckAdminContext } from "./../pages/Admin";

function Check() {
  const inputRef = useRef(null);
  const { setToAdmin } = useContext(CheckAdminContext);

  const handleClick = () => {
    if (inputRef.current.value === process.env.REACT_APP_PASS_ADMIN) {
      setToAdmin(true);
    }
  };

  return (
    <div>
      <div className="container d-flex align-items-center vh-100">
        <div className="w-100">
          <h2 className="text-primary text-center mb-5 text-shadow">
            Nhập mật khẩu để tiếp tục
          </h2>
          <div className="input-group mb-3 input-admin ms-auto me-auto shadow">
            <input
              type="password"
              className="form-control"
              placeholder="Your password"
              aria-label="password"
              ref={inputRef}
            />
            <button
              className="btn btn-primary"
              type="button"
              id="button-addon2"
              onClick={handleClick}
            >
              Đăng nhập
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Check;
