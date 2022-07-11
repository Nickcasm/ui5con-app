import "./App.css";
import profile from "./img/profile.png";
import logo from "./img/logo.png";
import "@ui5/webcomponents/dist/Avatar";
import "@ui5/webcomponents/dist/AvatarGroup";
import "@ui5/webcomponents/dist/Card";
import "@ui5/webcomponents/dist/CardHeader";
import "@ui5/webcomponents/dist/Calendar";
import "@ui5/webcomponents/dist/Icon";
import "@ui5/webcomponents/dist/Label";
import "@ui5/webcomponents/dist/List";
import "@ui5/webcomponents/dist/CustomListItem";
import "@ui5/webcomponents/dist/StandardListItem";
import "@ui5/webcomponents/dist/Switch";
import "@ui5/webcomponents-fiori/dist/Timeline";
import "@ui5/webcomponents-fiori/dist/ShellBar";
import "@ui5/webcomponents-fiori/dist/ShellBarItem";
import "@ui5/webcomponents-fiori/dist/NotificationListItem";
import "@ui5/webcomponents-fiori/dist/Assets.js";
import "@ui5/webcomponents/dist/Tab";
import "@ui5/webcomponents/dist/TabContainer";

// Icons
import "@ui5/webcomponents-icons/dist/palette.js";
import "@ui5/webcomponents-icons/dist/settings.js";
import "@ui5/webcomponents-icons/dist/sys-help.js";
import "@ui5/webcomponents-icons/dist/log.js";
import "@ui5/webcomponents-icons/dist/action.js";
import "@ui5/webcomponents-icons/dist/product.js";
import "@ui5/webcomponents-icons/dist/web-cam.js";
import "@ui5/webcomponents-icons/dist/hide.js";
import "@ui5/webcomponents-icons/dist/calendar.js";
import "@ui5/webcomponents-icons/dist/phone.js";
import "@ui5/webcomponents-icons/dist/fridge.js";
import "@ui5/webcomponents-icons/dist/lightbulb.js";
import "@ui5/webcomponents-icons/dist/heating-cooling.js";
import "@ui5/webcomponents-icons/dist/washing-machine.js";
import "@ui5/webcomponents-icons/dist/temperature.js";

import Home from "../src/home/Home";
import Detail from "../src/detail/Detail";
import AppBar from "./appbar/AppBar";
import { Routes, Route, Navigate } from "react-router-dom"; //1
import { useNavigate } from "react-router-dom"; //2

function App() {
  const navigate = useNavigate(); //3
  return (
    <div className="App">
      <AppBar />
      <Routes>
        {/* <Route path='/home' component={Home}/>
				<Route path='/detail' component={Detail}/>
				<Navigate from="/" to="/home" /> */}
        <Route path="/" element={<Home navigate={navigate} />} />
        <Route path="/detail" element={<Detail navigate={navigate} />} />
        <Route path="/*" element={<Home navigate={navigate} />} />
      </Routes>
    </div>
  );
}

export default App;
