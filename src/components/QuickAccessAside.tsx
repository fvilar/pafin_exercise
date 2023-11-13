// Import React to use React components
import React from "react";
import QuickAccessBtn from "./QuickAccessBtn"; // Import QuickAccessBtn component

// Define the QuickAccessAside component
export default function QuickAccessAside() {
  return (
    // Container div for the aside section
    <div className="aside">
      {/* Title for the aside section */}
      <div className="aside_title">クイックアクセス</div>

      {/* Body of the aside section */}
      <div className="aside_body">
        {/* Render the QuickAccessBtn component */}
        <QuickAccessBtn />

        {/* Additional quick access information */}
        <div className="aside_quickaccess">
          {/* Title for the quick access section */}
          <div className="aside_quickaccess_title">帳簿設定</div>

          {/* Description for the quick access section */}
          <div className="aside_quickaccess_description">
            計算方法
            (総平均法、移動平均法)、会計通貨、データ確定に関する設定の変更ができます。
          </div>
        </div>
      </div>
    </div>
  );
}
