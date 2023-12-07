import Navbar from "./Navbar";
import PropTypes from "prop-types";

DashboardLayout.propTypes = {
  children: PropTypes.node,
};

function DashboardLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}

export default DashboardLayout;
