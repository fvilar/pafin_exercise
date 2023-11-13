// Import necessary dependencies from React and Phosphor Icons library
import { ArrowRight } from "@phosphor-icons/react";
import React from "react";

// Define the ActionButton component
export default function ActionButton() {
  return (
    // Container div for the action button
    <div className="transtaction_body_card_btn">
      {/* Text for the action button */}
      <div className="transtaction_body_card_btn_text">選択する</div>
      {/* Icon for the action button (ArrowRight) */}
      <ArrowRight size={16} color="#FFFFFF"></ArrowRight>
    </div>
  );
}
