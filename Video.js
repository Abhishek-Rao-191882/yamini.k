import React from "react";

const Video = (props) => {
  return (
       <div>
          <h2>{props.title}</h2>
          <h3>{props.dateAdded}</h3>
          <h3>{props.channel}</h3>
      </div>
  )
    // return React.createElement("div", {}, [
    //   React.createElement("h2", {}, props.title),
    //   React.createElement("h3", {}, props.dateAdded),
    //   React.createElement("h3", {}, props.channel),
    // ]);
  };

  export default Video;
  