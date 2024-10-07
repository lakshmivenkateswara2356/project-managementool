import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./NotificationIcon.css"; // For the styles

const NotificationIcon = () => {
  return (
    <div className="notification-icon">
      <i className="fas fa-bell"></i>
      {/* Optional notification bubble */}
      {/* <div className="notification-bubble"></div> */}
    </div>
  );
};

export default NotificationIcon;
