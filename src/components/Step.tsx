import React from "react";
import ActionButton from "./ActionButton";
import {
  UserCircleGear,
  CaretUp,
  CheckCircle,
  ArrowRight,
} from "@phosphor-icons/react";

export default function Step() {
  return (
    <div className="transaction_body_card">
      <div className="transtaction_body_card_status">
        <CheckCircle size={24} color="#38C97C" weight="fill"></CheckCircle>
      </div>
      <div className="transtaction_body_card_title">
        取引所 / ブロックチェーンを選択しましょう
      </div>
      <div className="transtaction_body_card_infotop">
        13 取引所/ブロックチェーン選択済み
      </div>
      <div className="transtaction_body_card_description">
        取引をしたことのある取引所 /
        ブロックチェーンをすべて選択してください。対応していない取引所や取引所外での取引経験がある場合は「カスタム」を選択してください。
      </div>
      <ActionButton></ActionButton>
      <div className="transtaction_body_card_infobottom"></div>
    </div>
  );
}
