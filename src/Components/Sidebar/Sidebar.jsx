import { Link, useLocation } from "react-router-dom"
import { TrendingUp, Package } from "lucide-react"
import "./Sidebar.css"

function Sidebar() {
  const location = useLocation()

  const menuItems = [
    {
      title: "Analytics",
      icon: TrendingUp,
      path: "/",
    },
    {
      title: "Products",
      icon: Package,
      path: "/product",
    },
  ]

  return (
    <div className="sidebar">
      <div className="sidebar-wrapper">
        <div className="sidebar-menu">
          <h3 className="sidebar-title">Dashboard</h3>
          <ul className="sidebar-list">
            {menuItems.map((item) => (
              <Link to={item.path} className="link" key={item.title}>
                <li className={`sidebar-list-item ${location.pathname === item.path ? "active" : ""}`}>
                  <item.icon className="sidebar-icon" size={20} />
                  <span>{item.title}</span>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
