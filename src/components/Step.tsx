// Import necessary dependencies from React and other modules
import React from "react";
import ActionButton from "./ActionButton"; // Importing ActionButton component
import {
  UserCircleGear,
  CaretUp,
  CheckCircle,
  ArrowRight,
  CircleDashed,
} from "@phosphor-icons/react"; // Importing icons from Phosphor Icons library

// Define the type for the props that this component receives
type props = {
  status: boolean; // Status of the step (true or false)
  inactive: boolean; // Flag indicating whether the step is inactive
  title: string; // Title of the step
  infotop?: string; // Optional additional information at the top
  description: string; // Description of the step
  infobottom?: string; // Optional additional information at the bottom
};

// Define the Step component
export default function Step(props: props) {
  return (
    // The main container div for the step
    <div
      className="transaction_body_card"
      // Apply opacity style if the step is inactive
      style={props.inactive ? { opacity: 0.5 } : {}}
    >
      {/* Display the status icon based on the 'status' prop */}
      <div className="transtaction_body_card_status">
        {props.status ? (
          <CheckCircle size={24} color="#38C97C" weight="fill"></CheckCircle>
        ) : (
          <CircleDashed size={24} color="#A7AEB4"></CircleDashed>
        )}
      </div>
      {/* Display the title of the step */}
      <div className="transtaction_body_card_title">{props.title}</div>
      {/* Display optional additional information at the top */}
      <div className="transtaction_body_card_infotop">{props?.infotop}</div>
      {/* Display the description of the step */}
      <div className="transtaction_body_card_description">
        {props.description}
      </div>
      {/* Render the ActionButton component */}
      <ActionButton></ActionButton>
      {/* Display optional additional information at the bottom */}
      <div className="transtaction_body_card_infobottom">
        {props?.infobottom}
      </div>
    </div>
  );
}
