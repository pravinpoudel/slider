import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft
} from "@fortawesome/free-solid-svg-icons";
export class Prev extends Component {
  render() {
    const positioning_left = {
      position: "absolute",
      left: "7%",
      top: "50%",
      cursor: "pointer",
      background: "#99999922",
      borderRadius: "50%",
      padding: "1%",
      color: "white"
    };

    const positioning_right = {
      position: "absolute",
      right: "7%",
      top: "50%",
      cursor: "pointer",
      background: "#99999922",
      borderRadius: "50%",
      padding: "1%",
      color: "white"
    };

    const rightarrow = <FontAwesomeIcon icon={faChevronRight} size="lg" />;
    const leftarrow = <FontAwesomeIcon icon={faChevronLeft} size="lg" />;
    return (
      <div>
        <span
          style={positioning_right}
          className="next_button"
          onClick={event => {
            this.props.onclick(1, false);
          }}
        >
          {rightarrow}
        </span>

        <span
          style={positioning_left}
          className="prev_button"
          onClick={event => this.props.onclick(-1, false)}
        >
          {leftarrow}
        </span>
      </div>
    );
  }
}

export default Prev;
