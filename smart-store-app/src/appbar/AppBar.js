import React, { Component } from "react";
import profile from "../img/profile.png";
import logo from "../img/logo.png";
import { setTheme } from "@ui5/webcomponents-base/dist/config/Theme.js";
import applyDirection from "@ui5/webcomponents-base/dist/locale/applyDirection.js";

class AppBar extends Component {
    constructor(props) {
        super(props);
        this.appBar = React.createRef();
        this.themeSwitch = React.createRef();
    }

    componentDidMount() {
        this.appBar.current.addEventListener("profileClick", this.onProfileClicked);
        this.appBar.current.addEventListener("notifications-click", this.onNotificationsClicked);
        this.themeSwitch.current.addEventListener("change", this.onThemeSwitchPressed.bind(this));
    }

    onProfileClicked(event) {
        event.preventDefault();
        window["profile-popover"].showAt(event.detail.targetRef);
    }

    onNotificationsClicked(event) {
        event.preventDefault();
        window["notifications-popover"].showAt(event.detail.targetRef);
    }

    onThemeSwitchPressed(event) {
        setTheme(event.target.checked ? "sap_belize_hcb" : "sap_fiori_3");
    }

    render() {
        return (
            <div className="app-bar">
                <ui5-shellbar
                    ref={this.appBar}
                    primary-title="Smart Store Manager"
                    show-notifications
                    show-product-switch
                    show-co-pilot>
                    <img className="app-bar-logo" src={logo} slot="logo" alt="logo" />
                    <ui5-avatar slot="profile">
                        <img src={profile} className="profile-avatar" alt="profile" />
                    </ui5-avatar>

                    <ui5-shellbar-item icon="globe" text="Language" ref={this.langSettingsItem}>
                    </ui5-shellbar-item>

                    <ui5-shellbar-item icon="palette" text="Theme" ref={this.themeSettingItem}>
                    </ui5-shellbar-item>
                </ui5-shellbar>

                <ui5-popover
                    id="profile-popover"
                    hide-header
                    placement-type="Bottom"
                    horizontal-align="Right"
                >
                    <div className="profile-header centered">
                        <img src={profile} alt="" className="profile-img" />
                        <ui5-title level="3">Darius Cummings</ui5-title>
                        <ui5-label>Store Manager</ui5-label>
                    </div>
                    <div className="profile-content">
 						<ui5-list separators="None">
 							<ui5-li-custom type="Inactive">
 								<div className="profile-rtl-switch centered">
 									<ui5-li icon="palette" type="Inactive">High Contrast Black</ui5-li>
 									<ui5-switch ref={this.themeSwitch}></ui5-switch>
 								</div>
 							</ui5-li-custom> 
 							<ui5-li icon="settings">Settings</ui5-li>
 							<ui5-li icon="sys-help">Help</ui5-li>
 							<ui5-li icon="log">Sign out</ui5-li>
 						</ui5-list>
 					</div>
                </ui5-popover>

                

            </div>
        );
    }
}

export default AppBar;
