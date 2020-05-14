import React, { useState, useEffect } from "react";
import FollowersPage from "../Sidebar.dashboard.component/Sidebar_list_components/Followers/Followers";
import FollowingPage from "../Sidebar.dashboard.component/Sidebar_list_components/Following.component/Following";
import Analysispage from "../Sidebar.dashboard.component/Sidebar_list_components/Analysis.component/Analysis";
import SettingPage from "../Sidebar.dashboard.component/Sidebar_list_components/Setting.component/Setting";

const SidebarParams = ({ match }) => {
  const [sideBars, setSideBars] = useState(null);

  useEffect(() => {
    const SideBarDisplay = () => {
      let sideBarparams = match.params.sidebars;
      if (sideBarparams === "upgrade") {
        setSideBars("sorry no upgrade yet");
      } else if (sideBarparams === "followers") {
        setSideBars(<FollowersPage />);
      } else if (sideBarparams === "following") {
        setSideBars(<FollowingPage />);
      } else if (sideBarparams === "analysis") {
        setSideBars(<Analysispage />);
      } else if (sideBarparams === "setting") {
        setSideBars(<SettingPage />);
      }
    };

    SideBarDisplay();
  }, [match]);
  return (
    <div>
      <div>{/* <SideBar /> */}</div>
      <div>{sideBars}</div>
    </div>
  );
};

export default SidebarParams;
