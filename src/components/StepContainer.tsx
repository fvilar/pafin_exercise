import React, { ReactNode } from "react";
import {
  UserCircleGear,
  CaretUp,
  CheckCircle,
  ArrowRight,
} from "@phosphor-icons/react";
import ActionButton from "./ActionButton";
import Step from "./Step";

type props = {
  title: string;
  description: string;
  icon: ReactNode;
  steps: ReactNode[];
};

export default function StepContainer(props: props) {
  return (
    <div className="transaction">
      <div className="transaction_header">
        <div className="transaction_title">
          <div className="transaction_title_main">
            <UserCircleGear
              color="#4299E1"
              size={26}
              weight="fill"
            ></UserCircleGear>
            <div className="transaction_title_text">{props.title}</div>
          </div>
          <div className="transaction_counter">
            <div className="transaction_counter_progressbar"></div>
            <div className="transaction_counter_text">1/2ステップ</div>
            {props.icon}
          </div>
        </div>

        <div className="transaction_description">{props.description}</div>
      </div>
      <div className="transaction_body">{props.steps.map((step) => step)}</div>
    </div>
  );
}
