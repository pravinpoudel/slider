import React, { Component } from "react";
import Display from "./Display";

export class Images extends Component {
  constructor(props) {
    super(props);
    this.state = {
      source: this.props.source,
      caption: this.props.captions,
      title: this.props.title,
      display: "block" ? this.props.positionindex : "none"
    };
  }
  componentWillMount() {
    this.props.senddata(
      this.state.source,
      this.state.caption,
      this.state.title,
      this.state.display
    );
  }

  render() {
    return <div />;
  }
}

export default Images;
