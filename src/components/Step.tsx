import React from "react";
import ActionButton from "./ActionButton";
import {
  UserCircleGear,
  CaretUp,
  CheckCircle,
  ArrowRight,
  CircleDashed,
} from "@phosphor-icons/react";

type props = {
  status: boolean;
  inactive: boolean;
  title: string;
  infotop?: string;
  description: string;
  infobottom?: string;
};
export default function Step(props: props) {
  return (
    <div
      className="transaction_body_card"
      style={props.inactive ? { opacity: 0.5 } : {}}
    >
      <div className="transtaction_body_card_status">
        {props.status ? (
          <CheckCircle size={24} color="#38C97C" weight="fill"></CheckCircle>
        ) : (
          <CircleDashed size={24} color="#A7AEB4"></CircleDashed>
        )}
      </div>
      <div className="transtaction_body_card_title">{props.title}</div>
      <div className="transtaction_body_card_infotop">{props?.infotop}</div>
      <div className="transtaction_body_card_description">
        {props.description}
      </div>
      <ActionButton></ActionButton>
      <div className="transtaction_body_card_infobottom">
        {props?.infobottom}
      </div>
    </div>
  );
}
