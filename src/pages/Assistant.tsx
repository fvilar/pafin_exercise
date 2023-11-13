import React, { ReactNode } from "react";
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

const Steps1: ReactNode[] = [
  <Step
    status={true}
    description="取引をしたことのある取引所 / ブロックチェーンをすべて選択してください。対応していない取引所や取引所外での取引経験がある場合は「カスタム」を選択してください。"
    inactive={false}
    title="取引所 / ブロックチェーンを選択しましょう"
  />,
  <Step
    status={false}
    description="ファイルやAPI連携で履歴を反映させることができます。DeFiの取引はウォレットアドレスを入力することで取引内容まで自動識別することができます。"
    inactive={false}
    title="取引履歴を反映させましょう"
  />,
];

const Steps2: ReactNode[] = [
  <Step
    status={false}
    description="必要な情報が足りていないため、自動で識別できなかった取引や、DeFi取引以外の入出金取引については、「要識別」として分類されます。このページで取引種類を選択し、計算ができる状態にしてください。"
    inactive={true}
    title="DeFi取引における「要識別」を解消しましょう"
  />,
  <Step
    status={false}
    description="アップロードされた全ての取引を集計する過程で、クリプタクトが処理出来なかった取引は、「未分類取引」として分類されます。未分類取引は損益計算から除外されるため、ウィザード機能を活用し必ず解消してください。"
    inactive={true}
    title="未分類取引を解消しましょう"
  />,
];

const Steps3: ReactNode[] = [
  <Step
    status={true}
    description="取引をしたことのある取引所 / ブロックチェーンをすべて選択してください。対応していない取引所や取引所外での取引経験がある場合は「カスタム」を選択してください。"
    inactive={false}
    title="取引所 / ブロックチェーンを選択しましょう"
  />,
  <Step
    status={true}
    description="取引をしたことのある取引所 / ブロックチェーンをすべて選択してください。対応していない取引所や取引所外での取引経験がある場合は「カスタム」を選択してください。"
    inactive={false}
    title="取引所 / ブロックチェーンを選択しましょう"
  />,
  <Step
    status={true}
    description="取引をしたことのある取引所 / ブロックチェーンをすべて選択してください。対応していない取引所や取引所外での取引経験がある場合は「カスタム」を選択してください。"
    inactive={false}
    title="取引所 / ブロックチェーンを選択しましょう"
  />,
];

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
          steps={Steps1}
        />
        <StepContainer
          title="足りていない情報を追加しましょう"
          description="情報が不足していると計算が完了しません。必ず追加してください。"
          icon={<Gear color="#4299E1" size={26} weight="duotone"></Gear>}
          steps={Steps2}
        />
        <StepContainer
          title="計算結果を確認しましょう"
          description="計算結果の最終的なチェックを行って確定申告に必要な情報を確認しましょう。最後にデータをダウンロードできます。"
          icon={
            <ListChecks color="#4299E1" size={26} weight="duotone"></ListChecks>
          }
          steps={Steps3}
        />
      </div>
      <QuickAccessAside />
    </div>
  );
}
