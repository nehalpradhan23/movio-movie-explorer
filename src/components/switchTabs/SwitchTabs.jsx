import React, { useState } from "react";

import "./style.scss";

const SwitchTabs = ({ data, onTabChange }) => {
  const [selectedTab, setSelectedTab] = useState(0); // for selected tab
  const [left, setLeft] = useState(0); // for moving animation

  const activeTab = (tab, index) => {
    setLeft(index * 100); // multiply by width of span to set active effect, and use left CSS property

    // timeout for selected color tab animation, (set color after some time)
    setTimeout(() => {
      setSelectedTab(index);
    }, 300);

    onTabChange(tab, index); // return selected tab
  };

  return (
    <div className="switchingTabs">
      <div className="tabItems">
        {/* show all options on tab */}
        {data.map((tab, index) => (
          <span
            key={index}
            className={`tabItem ${selectedTab === index ? "active" : ""}`}
            onClick={() => activeTab(tab, index)}
          >
            {tab}
          </span>
        ))}
        {/* for selected tab style, using left CSS property to set active */}
        <span className="movingBg" style={{ left }} />
      </div>
    </div>
  );
};

export default SwitchTabs;
