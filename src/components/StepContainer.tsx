// Import necessary dependencies from React and other modules
import React, { ReactNode } from "react";
import {
  UserCircleGear,
  CaretUp,
  CheckCircle,
  ArrowRight,
} from "@phosphor-icons/react";
import ActionButton from "./ActionButton";
import Step from "./Step";
import ProgressBar from "./ProgressBar";

// Define the type for the props that this component receives
type Props = {
  title: string; // Title of the step container
  description: string; // Description of the step container
  icon: ReactNode; // Icon for the step container (as a ReactNode)
  steps: ReactNode[]; // Array of steps (as ReactNode)
  progress: number; // Progress percentage (0 to 100)
  counter: string; // Counter indicating the number of steps
};

// Define the StepContainer component
export default function StepContainer(props: Props) {
  return (
    // Main container div for the transaction
    <div className="transaction">
      {/* Header section of the transaction */}
      <div className="transaction_header">
        {/* Title and counter section */}
        <div className="transaction_title">
          {/* Main title section with icon */}
          <div className="transaction_title_main">
            {props.icon}
            {/* Text portion of the title */}
            <div className="transaction_title_text">{props.title}</div>
          </div>

          {/* Counter section with progress bar and caret icon */}
          <div className="transaction_counter">
            {/* Progress bar */}
            <div className="transaction_counter_progressbar">
              <ProgressBar progressNumber={props.progress}></ProgressBar>
            </div>
            {/* Text displaying the number of steps */}
            <div className="transaction_counter_text">
              {props.counter}ステップ
            </div>
            {/* CaretUp icon */}
            <CaretUp
              className="transaction_counter_icon"
              size={16}
              color="#8C959D"
            ></CaretUp>
          </div>
        </div>

        {/* Description section of the transaction */}
        <div className="transaction_description">{props.description}</div>
      </div>

      {/* Body section of the transaction containing steps */}
      <div className="transaction_body">{props.steps.map((step) => step)}</div>
    </div>
  );
}
