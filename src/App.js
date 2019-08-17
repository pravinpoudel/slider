import React, { Component } from "react";
import logo, { ReactComponent } from "./logo.svg";
import "./App.css";
import Image from "./components/Images";
import Display from "./components/Display";
import Next from "./components/Prev";
import { thisExpression } from "@babel/types";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slider: [],
      currentslide: 1,
      source: this.props.source,
      title: this.props.title,
      caption: this.props.caption
    };
    this.imagesarray = [];
    this.receivedata = this.receivedata.bind(this);
    this.object_return = this.object_return.bind(this);
    this.onclick = this.onclick.bind(this);
    this.getslide = this.getslide.bind(this);
    this.display = this.display.bind(this);
  }

  object_return(source, caption, title) {
    return {
      source: source,
      caption: caption,
      title: title
    };
  }

  onclick(value, isdot) {
    if (!isdot) {
      this.setState(
        {
          currentslide: this.state.currentslide + value
        },
        this.display
      );
    } else {
      this.setState(prevState => ({
        currentslide: value
      }));
    }

    this.getslide();
  }

  display() {
    let newLocal = this.state.currentslide;
    if (newLocal > this.state.slider.length || newLocal < 1) {
      newLocal = 1;
      this.setState({ currentslide: newLocal });
    }
    let copy = this.state.slider;
    for (var i = 0; i < copy.length; i++) {
      copy[i].display = "none";
    }
    copy[newLocal - 1].display = "block";
    console.log(copy);
    this.setState({ slider: copy });
    return true;
  }

  getslide() {}

  receivedata(source, caption, title, display = "none") {
    var temp_data = "";
    console.log("hello i am here");
    temp_data = {
      source: source,
      caption: caption,
      title: title,
      display: display
    };
    console.log(temp_data);
    this.setState(prevState => ({
      slider: [...prevState.slider, temp_data]
    }));
  }

  render() {
    var componentarray = [];
    let component = "";
    for (var i = 0; i < this.props.source.length; i++) {
      if (i === 0) {
        component = (
          <Image
            source={this.props.source[i]}
            positionindex={"first"}
            captions={this.props.caption[i]}
            key={this.props.caption[i]}
            title={this.props.title[i]}
            senddata={this.receivedata}
          />
        );
      } else {
        component = (
          <Image
            source={this.props.source[i]}
            captions={this.props.caption[i]}
            key={this.props.caption[i]}
            title={this.props.title[i]}
            senddata={this.receivedata}
          />
        );
      }

      componentarray.push(component);
    }

    return (
      <div className="App">
        <header className="App-header">
          <p>VORALAGAS SLIDER</p>

          {componentarray}
          <Display
            imagesarray={this.state.slider}
            displayfunctioncall={this.display}
          />
          <Next onclick={this.onclick} />
        </header>
      </div>
    );
  }
}

export default App;
