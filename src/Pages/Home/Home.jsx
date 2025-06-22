import Featured from "../../Components/Featured"
import "./Home.css"

function Home() {
  return (
    <div className="home">
      <div className="home-header">
        <h1 className="home-title">Analytics Dashboard</h1>
        <p className="home-subtitle">Monitor fertilizer supply chain analytics and trends</p>
      </div>
      <Featured />
    </div>
  )
}

export default Home
