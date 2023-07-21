import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

function ContactBtn() {
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Inbox về Page để được nhân viên tư vấn
    </Tooltip>
  );

  return (
    <OverlayTrigger
      placement="top"
      delay={{ show: 250, hide: 400 }}
      overlay={renderTooltip}
    >
      <Button variant="outline-success" size="sm">
        Liên hệ
      </Button>
    </OverlayTrigger>
  );
}

export default ContactBtn;
