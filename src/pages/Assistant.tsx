import React from "react";
import {
  UserCircleGear,
  CaretUp,
  CheckCircle,
  ArrowRight,
  Gear,
  ListChecks,
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
            <UserCircleGear
              color="#4299E1"
              size={26}
              weight="duotone"
            ></UserCircleGear>
          }
          steps={[<Step />]}
        />
        <StepContainer
          title="足りていない情報を追加しましょう"
          description="情報が不足していると計算が完了しません。必ず追加してください。"
          icon={<Gear color="#4299E1" size={26} weight="duotone"></Gear>}
          steps={[<Step />]}
        />
        <StepContainer
          title="計算結果を確認しましょう"
          description="計算結果の最終的なチェックを行って確定申告に必要な情報を確認しましょう。最後にデータをダウンロードできます。"
          icon={
            <ListChecks color="#4299E1" size={26} weight="duotone"></ListChecks>
          }
          steps={[<Step />]}
        />
      </div>
      <QuickAccessAside />
    </div>
  );
}
