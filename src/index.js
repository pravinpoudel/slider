import React from "react";
import ReactDOM from "react-dom";
// import "./fontawesome";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const source = [
  "https://cdn.pixabay.com/photo/2015/12/01/20/28/fall-1072821__340.jpg",
  "https://lh3.googleusercontent.com/TqfXXg4XxXDQ1833l6a6lympbhTkmuRhRrna__Wbsjq5vomP8E76xr4yn9Hd7JZyWKUJUW9Lqw=w640-h400-e365",
  "https://inhabitat.com/wp-content/blogs.dir/1/files/2017/11/google-street-view-south-africa-889x298.jpg",
  "https://lh3.googleusercontent.com/TqfXXg4XxXDQ1833l6a6lympbhTkmuRhRrna__Wbsjq5vomP8E76xr4yn9Hd7JZyWKUJUW9Lqw=w640-h400-e365"
];

const caption = ["caption1", "caption2", "caption3", "caption4"];
const title = ["title1", "title1", "title3", "title4"];
ReactDOM.render(
  <App source={source} caption={caption} title={title} />,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
