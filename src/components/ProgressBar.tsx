// Import React to use React components
import React from "react";

// Define the type for the props that this component receives
type Props = {
  progressNumber: number; // Represents the progress percentage (0 to 100)
};

// Define the ProgressBar component
export default function ProgressBar(props: Props) {
  return (
    // Container div for the progress bar
    <div className="progress_bar">
      {/* Progress div with a dynamic width based on the 'progressNumber' prop */}
      <div
        className="progress"
        style={{ width: props.progressNumber + "%" }}
      ></div>
    </div>
  );
}
