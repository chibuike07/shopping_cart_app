import React, { useState, useEffect } from "react";
import FollowersPage from "../Sidebar.dashboard.component/Sidebar_list_components/Followers/Followers";
import FollowingPage from "../Sidebar.dashboard.component/Sidebar_list_components/Following.component/Following";
import Analysispage from "../Sidebar.dashboard.component/Sidebar_list_components/Analysis.component/Analysis";
import SettingPage from "../Sidebar.dashboard.component/Sidebar_list_components/Setting.component/Setting";

const SidebarParams = ({ match }) => {
  const [sideBars, setSideBars] = useState(null);

  const SideBarDisplay = () => {
    let sideBarparams = match.params.sidebars;
    switch (sideBarparams) {
      case "upgrade":
        setSideBars("sorry no upgrade yet");
        break;
      case "followers":
        setSideBars(<FollowersPage />);
        break;
      case "following":
        setSideBars(<FollowingPage />);
        break;
      case "analysis":
        setSideBars(<Analysispage />);
        break;
      case "setting":
        setSideBars(<SettingPage />);
        break;
    }
  };

  useEffect(() => {
    return () => {
      SideBarDisplay();
    };
  }, [match]);
  return (
    <div>
      <div>{/* <SideBar /> */}</div>
      <div>{sideBars}</div>
    </div>
  );
};

export default SidebarParams;
