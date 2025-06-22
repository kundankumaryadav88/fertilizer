import { Package, Calendar } from "lucide-react"
import "./Header.css"

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-content">
          <div className="header-brand">
            <div className="brand-icon">
              <Package size={32} />
            </div>
            <div className="brand-text">
              <h1 className="brand-title">Fyllo Dashboard</h1>
              <p className="brand-subtitle">Smart Fertilizer Supply Chain Analytics</p>
            </div>
          </div>
          <div className="header-info">
            <Calendar size={20} />
            <span className="last-updated">Last Updated: Today</span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header