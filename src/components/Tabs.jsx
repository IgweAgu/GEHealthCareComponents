import { useState } from "react";
export default function Tabs() {
  const [activeTab, setActiveTab] = useState("Menu 1");

  const tabs = ["Menu 1", "Menu 2", "Menu 3"];

  const contentMap = {
    "Menu 1": "This is a simple tab UI, built with react and vanilla css, no external libraries were used this is very dynamic",
    "Menu 2": "I like creating UI's that are functional, adaptable and can be built upon and easily maintained in the future",
    "Menu 3": "Boost the impact of your teams, your operations, and your care experiences by collaborating with GE HealthCare.",
  };

  return (
    <div className="tabs-container">
    <div className="tabs-menu-logo">
    <div className="tabs-menu-title">GE HealthCare App
    </div>
    </div>
      <div className="tabs-header">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`tab-button ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="tabs-content">
        <p>{contentMap[activeTab]}</p>
      </div>
    </div>
  );
}
