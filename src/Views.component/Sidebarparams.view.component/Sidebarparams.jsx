import React from "react";
import FollowersPage from "../Sidebar.dashboard.component/Sidebar_list_components/Followers/Followers";
import FollowingPage from "../Sidebar.dashboard.component/Sidebar_list_components/Following.component/Following";
import Analysispage from "../Sidebar.dashboard.component/Sidebar_list_components/Analysis.component/Analysis";
import SettingPage from "../Sidebar.dashboard.component/Sidebar_list_components/Setting.component/Setting";
class SidebarParams extends React.Component {
  state = {
    sidebarListComponents: []
  };

  SideBarDisplay = () => {
    let sideBarparams = this.props.match.params.sidebars;
    if (sideBarparams === "upgrad") {
      this.setState({ sidebarListComponents: "sorry no upgrade yet" });
    } else if (sideBarparams === "followers") {
      this.setState(() => ({ sidebarListComponents: <FollowersPage /> }));
    } else if (sideBarparams === "following") {
      this.setState(() => ({
        sidebarListComponents: <FollowingPage />
      }));
    } else if (sideBarparams === "analysis") {
      this.setState(() => ({ sidebarListComponents: <Analysispage /> }));
    } else if (sideBarparams === "setting") {
      this.setState(() => ({ sidebarListComponents: <SettingPage /> }));
    }
  };
  componentDidMount() {
    console.log(this.props.match);
    this.SideBarDisplay();
  }
  componentWillUnmount() {
    console.log("unmounted");
  }
  render() {
    return (
      <div>
        <div>{/* <SideBar /> */}</div>
        <div>{this.state.sidebarListComponents}</div>
      </div>
    );
  }
}

export default SidebarParams;
