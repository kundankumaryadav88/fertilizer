import { Bell, Settings, Globe } from "lucide-react"
import "./Topbar.css"

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbar-wrapper">
        <div className="topbar-left">
          <span className="logo">Fyllo</span>
        </div>
        <div className="topbar-right">
          <div className="topbar-icon-container">
            <Bell size={20} />
            <span className="notification-badge">2</span>
          </div>
          <div className="topbar-icon-container">
            <Globe size={20} />
             <span className="notification-badge">2</span>
          </div>
          <div className="topbar-icon-container">
            <Settings size={20} />
          </div>
          <div className="user-avatar">
            <img
              src="https://cdn-icons-png.flaticon.com/512/147/147144.png"
              alt="User Avatar"
              className="avatar_container"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
