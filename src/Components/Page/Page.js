import { PAGE } from "./PageStyles";
import { slideInOut, slideUpDown } from "./PageTransitionTypes";
import PropTypes from "prop-types";
export function Page({ transitionType, className, children }) {
  function giveVariant() {
    switch (transitionType) {
      case "inout":
        return slideInOut;
      case "updown":
        return slideUpDown;
      default:
        return null;
    }
  }
  return (
    <PAGE
      className={className}
      variants={giveVariant()}
      initial="initial"
      animate="render"
      exit="unmount">
      {children}
    </PAGE>
  );
}
Page.propTypes = {
  transitionType: PropTypes.oneOf(["inout", "updown"]).isRequired
};
