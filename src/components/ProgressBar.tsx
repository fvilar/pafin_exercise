import React from "react";

type props = {
  progressNumber: number;
};
export default function ProgressBar(props: props) {
  return (
    <div className="progress_bar">
      <div className="progress" style={{ width: props.progressNumber+"%" }}></div>
    </div>
  );
}
