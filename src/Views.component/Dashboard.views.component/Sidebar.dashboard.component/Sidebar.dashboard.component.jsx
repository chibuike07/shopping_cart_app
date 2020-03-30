import React from "react";
import Logo from "../../../Asset.component/bgFoto.jpg";
import SidebarStyles from "./Sidebar.module.css";
const SideBar = () => {
  return (
    <div className={SidebarStyles.option}>
      <div className={SidebarStyles.option_container}>
        <div className={SidebarStyles.image}>
          <img src={Logo} alt="display_pix" />
        </div>
        <div className={SidebarStyles.user_identity}>
          <p>username</p>
          <address>email</address>
        </div>
        <div className={SidebarStyles.dropDown}>
          <ul className={SidebarStyles.option_list}>
            <li>wait for the array</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
