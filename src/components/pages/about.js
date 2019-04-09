import React from "react";
import profilePicture from "../../../static/assets/images/bio/headshot.jpg";

export default function() {
  return (
    <div className="content-page-wrapper">
      <div
        className="left-column"
        style={{
          background: "url(" + profilePicture + ") no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />
      <div className="right-column">
        The about page here is about my skills and not about me personally. 
        <br></br>
        <br></br>
        I am quite versed in python, html, and css. My skills in python have reached
        the point where I can build simple A.I. and logic based games. My more recent 
        achievments come from learning JavaScript, where I have built things from a 
        functional dinner menu to a game using JS, not published online yet. 
        I know a moderate amount of PHP and SQL, as well as a bit more than the basics of Java and C.
        React is by far the hardest lauguage I have dealt with, so I just know the basics and how to 
        debug it.
        <br></br>
        <br></br>
        All of the items in this portfolio were created by me or I followed
        a tutorial to build. The portfolio itself falls into the latter. I do
        understand how the applications work if I followed a guide.
      </div>
    </div>
  );
}