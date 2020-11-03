import React from "react"
import PropTypes from "prop-types"

import { SketchPicker } from "react-color";

class Colorpicker extends React.Component {
  render() {
    return(
    <React.Fragment>
      <SketchPicker />
    </React.Fragment>
    );
  }
}
Colorpicker.propTypes = {};
export default Colorpicker
