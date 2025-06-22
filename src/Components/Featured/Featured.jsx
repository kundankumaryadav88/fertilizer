import { fertilizerData } from "../../data/fertilizerData"
import Chart from "../Chart"
import Bigchart from "../Bigchart"
import Piechart from "../Piechart"
import "./Featured.css"

function Featured() {
  return (
    <div className="featured">
      <div className="featured-charts-grid">
        <div className="pie-charts-row">
          <Piechart data={fertilizerData} title="Top 5 Required Products" dataKey="requirement" />
          <Piechart data={fertilizerData} title="Top 5 Available Products" dataKey="availability" />
        </div>

        <div className="big-chart-section">
          <Bigchart data={fertilizerData} title="Product Availability and Requirements" />
        </div>

        <div className="small-charts-row">
          <Chart data={fertilizerData} title="State wise Products" parent="state" child="name" />
          <Chart data={fertilizerData} title="Month wise Products" parent="month" child="name" />
          <Chart data={fertilizerData} title="Category wise Products" parent="category" child="name" />
        </div>
      </div>
    </div>
  )
}

export default Featured
