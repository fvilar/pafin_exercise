// Import React to use React components
import React from "react";

// Define the QuickAccessBtn component
export default function QuickAccessBtn() {
  return (
    // Container div for the quick access section
    <div className="aside_quickaccess">
      {/* Title for the quick access section */}
      <div className="aside_quickaccess_title">年度初めの残高入力</div>

      {/* Description for the quick access section */}
      <div className="aside_quickaccess_description">
        過去の計算結果を引き継いで計算する場合はこちらをクリックしてください。
      </div>
    </div>
  );
}
