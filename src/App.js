import { Route, Routes } from "react-router-dom";
import DashboardLayout from "./layouts/dashboard";
import GeneralApp from "./pages/dashboard/GeneralApp";
import Settings from "./pages/dashboard/Settings";
import Group from "./pages/dashboard/Group.js";
import Call from "./pages/dashboard/Call.js";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import "./App.css";
import { useSelector } from "react-redux";
import Page404 from "./pages/Page404.js";

function App() {
  const { mode } = useSelector((state) => state.app)

  console.log(window.location.pathname)
  if(window.location.pathname === "/"){
    window.location.pathname = "/app"
  }

  return (
    <div
      className="App"
      style={{
        backgroundColor: !mode ? "#fbfaff" : "#161C24",
        color: !mode ? "black" : "white",
      }}
    >
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route path="app" element={<GeneralApp />}></Route>
          <Route path="settings" element={<Settings />}></Route>
          <Route path="group" element={<Group />}></Route>
          <Route path="call" element={<Call />}></Route>
          <Route path="*" element={<Page404 />}></Route>
        </Route>
        <Route path="*" element={<Page404 />}></Route>
      </Routes>
    </div>
  );
}

export default App;
