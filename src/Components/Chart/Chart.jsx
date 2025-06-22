"use client"
import { useState, useMemo } from "react"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts"
import { TrendingUp } from "lucide-react"
import "./Chart.css"

function Chart({ title, data, parent, child }) {
  const processedData = useMemo(() => {
    const grouped = {}

    data.forEach((item) => {
      const parentValue = item[parent]
      const childValue = item[child]

      if (!grouped[parentValue]) {
        grouped[parentValue] = {}
      }

      if (!grouped[parentValue][childValue]) {
        grouped[parentValue][childValue] = 0
      }

      grouped[parentValue][childValue] += 1
    })

    return grouped
  }, [data, parent, child])

  const [selectedParent, setSelectedParent] = useState(Object.keys(processedData)[0] || "")

  const chartData = useMemo(() => {
    if (!selectedParent || !processedData[selectedParent]) return []

    return Object.entries(processedData[selectedParent]).map(([key, value]) => ({
      [child]: key,
      count: value,
    }))
  }, [processedData, selectedParent, child])

  return (
    <div className="chart-card card">
      <div className="chart-header">
        <TrendingUp className="chart-icon" size={20} />
        <h3 className="chart-title">{title}</h3>
      </div>

      <div className="chart-controls">
        <label className="chart-label">Select {parent}:</label>
        <select className="chart-select" value={selectedParent} onChange={(e) => setSelectedParent(e.target.value)}>
          {Object.keys(processedData).map((key) => (
            <option key={key} value={key}>
              {key}
            </option>
          ))}
        </select>
      </div>

      <div className="chart-container">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey={child} tick={{ fontSize: 12 }} stroke="#6b7280" angle={-45} textAnchor="end" height={80} />
            <YAxis tick={{ fontSize: 12 }} stroke="#6b7280" />
            <Tooltip
              contentStyle={{
                backgroundColor: "white",
                border: "1px solid #e5e7eb",
                borderRadius: "8px",
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
              }}
            />
            <Legend />
            <Bar dataKey="count" fill="#0f766e" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default Chart
