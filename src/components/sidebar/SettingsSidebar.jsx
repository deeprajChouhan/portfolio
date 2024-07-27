import React, { useContext, useEffect, useState } from "react";
import { DevolinContext } from "../../context/DevolinContext";
import { Link, useLocation } from "react-router-dom";
import { layoutList } from "../../data/Data";

const SettingsSidebar = () => {
  const {
    isSidebarOpen,
    closeSidebarSection,
    sidebarRef,
    isDarkMode,
    toggleDarkMode,
    isSharpMode,
    toggleSharpMode
  } = useContext(DevolinContext);
  const location = useLocation();
  const [activeLayout, setActiveLayout] = useState({
    home1: false,
    home2: false,
    home3: false,
  });

  useEffect(() => {
    // Get the current URL path from the location object
    const { pathname } = location;

    // Update the activeLayout state based on the URL path
    if (pathname === '/') {
      setActiveLayout({
        home1: true,
        home2: false,
        home3: false,
      });
    } else if (pathname === '/home-2') {
      setActiveLayout({
        home1: false,
        home2: true,
        home3: false,
      });
    } else if (pathname === '/home-3') {
      setActiveLayout({
        home1: false,
        home2: false,
        home3: true,
      });
    }
  }, [location]);

  const handleItemClick = (index) => {
    const updatedActiveLayout = {};
    layoutList.forEach((item, idx) => {
      updatedActiveLayout[`home${idx + 1}`] = idx === index;
    });
    setActiveLayout(updatedActiveLayout);
    closeSidebarSection();
  };

  return (
    <div className={`sidebar-overlay ${isSidebarOpen ? "active" : ""}`}>
      <div className="sidebar" ref={sidebarRef}>
        <h3>
          <span>
            <i className="fa-regular fa-gear"></i> Settings
          </span>{" "}
          <button className="sidebar-close" onClick={closeSidebarSection}>
            <i className="fa-thin fa-xmark"></i>
          </button>
        </h3>
        <div className="bottom">
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="shapeChange"
              checked={isSharpMode}
              onChange={toggleSharpMode}
            />
            <label className="form-check-label" htmlFor="shapeChange">
              Switch to {isSharpMode ? 'Sharp' : 'Classic'} mode
            </label>
          </div>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="themeChange"
              checked={isDarkMode}
              onChange={toggleDarkMode}
            />
            <label className="form-check-label" htmlFor="themeChange">
              Switch to {isDarkMode ? "Light" : "Dark"} mode
            </label>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default SettingsSidebar;
