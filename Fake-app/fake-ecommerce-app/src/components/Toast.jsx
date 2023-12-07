import PropTypes from "prop-types";

const Toast = ({ type, message }) => {
  const bgColor =
    type === "error" ? "bg-error" : type === "success" ? "bg-success" : "";

  return (
    <div className={`toast toast-end ${type}`}>
      <div className={`alert ${bgColor}`}>
        <span>{message}</span>
      </div>
    </div>
  );
};

Toast.propTypes = {
  type: PropTypes.oneOf(["error", "success"]).isRequired,
  message: PropTypes.string.isRequired,
};

export default Toast;
