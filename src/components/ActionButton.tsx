import { ArrowRight } from "@phosphor-icons/react";
import React from "react";

export default function ActionButton() {
  return (
    <div className="transtaction_body_card_btn">
      <div className="transtaction_body_card_btn_text">選択する</div>
      <ArrowRight size={16} color="#FFFFFF"></ArrowRight>
    </div>
  );
}
