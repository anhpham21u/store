import { useRef, useState, memo } from "react";
import emailjs from "@emailjs/browser";

function Form() {
  const form = useRef();
  const [success, setSuccess] = useState();
  const [sended, setSended] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_MAIL_SERVICE,
        process.env.REACT_APP_MAIL_TEMPLATE,
        form.current,
        process.env.REACT_APP_MAIL_API_KEY
      )
      .then(
        (result) => {
          setSuccess(true);
          setSended(true);
        },
        (error) => {
          setSuccess(false);
          setSended(true);
        }
      );
  }

  return (
    <form className="container py-6 form" onSubmit={handleSubmit} ref={form}>
      <div className="mb-5">
        <h3 className="text-center">ĐĂNG KÝ</h3>
        <p className="text-center">
          Đăng kí ngay để nhận được sự hỗ trợ từ nhân viên chúng tôi.
        </p>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Họ và tên
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Nguyễn Văn A"
          name="name"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
          name="email"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Số điện thoại
        </label>
        <input
          type="tel"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="0323456789"
          name="sdt"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Nội dung
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows={3}
          defaultValue={""}
          name="message"
        />
      </div>
      {sended &&
        (success === false ? (
          <p className="text-danger">Có lỗi xảy ra</p>
        ) : (
          <p className="text-success">Thông tin đã được gửi đi thành công</p>
        ))}
      <button type="submit" className="btn btn-primary">
        Đăng ký
      </button>
    </form>
  );
}

export default memo(Form);
