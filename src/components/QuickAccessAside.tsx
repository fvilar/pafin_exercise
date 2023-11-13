import React from "react";
import QuickAccessBtn from "./QuickAccessBtn";
export default function QuickAccessAside() {
  return (
    <div className="aside">
      <div className="aside_title">クイックアクセス</div>
      <div className="aside_body">
        <QuickAccessBtn />
        <div className="aside_quickaccess">
          <div className="aside_quickaccess_title">帳簿設定</div>
          <div className="aside_quickaccess_description">
            計算方法
            (総平均法、移動平均法)、会計通貨、データ確定に関する設定の変更ができます。
          </div>
        </div>
      </div>
    </div>
  );
}
