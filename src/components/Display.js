import React, { Component } from "react";
import { whileStatement } from "@babel/types";

export class Display extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const imageslist = this.props.imagesarray.map((element, index) => {
      return (
        <div className="myslide" key={element.caption}>
          <figure style={{ display: element.display }}>
            <img
              src={element.source}
              alt={element.caption}
              style={{ width: "100%" }}
              className="fade"
            />
            <figcaption className="slidercaption">
              <span className="title">{element.caption}</span>
              <br />
              <span className="caption">{element.title}</span>
            </figcaption>
          </figure>
        </div>
      );
    });

    return <div>{imageslist}</div>;
  }
}
export default Display;
