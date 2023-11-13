import React from "react";
import {
  UserCircleGear,
  CaretUp,
  CheckCircle,
  ArrowRight,
} from "@phosphor-icons/react";
import ActionButton from "../components/ActionButton";
import QuickAccessAside from "../components/QuickAccessAside";
import StepContainer from "../components/StepContainer";
import Step from "../components/Step";
export default function Assistant() {
  return (
    <div className="container">
      <div className="assistant_title">
        クリプタクトで計算を始めてみましょう
      </div>
      <div className="mainsection">
        <StepContainer
          title="取引の情報を入力しましょう"
          description="仮想通貨の損益計算には過去すべての取引履歴が必要になります。"
          icon={
            <CaretUp
              className="transaction_counter_icon"
              size={16}
              color="#8C959D"
            ></CaretUp>
          }
          steps={[<Step />]}
        />
      </div>
      <QuickAccessAside />
    </div>
  );
}
