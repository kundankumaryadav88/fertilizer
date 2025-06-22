"use client"
import { useState, useMemo } from "react"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts"
import { BarChart3 } from "lucide-react"
import "./Bigchart.css"

function Bigchart({ title, data }) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]

  const states = [...new Set(data.map((item) => item.state))].sort()

  const [selectedState, setSelectedState] = useState(states[0] || "")
  const [selectedMonth, setSelectedMonth] = useState(months[0])

  const chartData = useMemo(() => {
    return data
      .filter((item) => item.state === selectedState && item.month === selectedMonth)
      .map((item) => ({
        product: item.name,
        requirement: item.requirement,
        availability: item.availability,
        gap: item.requirement - item.availability,
      }))
  }, [data, selectedState, selectedMonth])

  return (
    <div className="bigchart-card card">
      <div className="bigchart-header">
        <BarChart3 className="chart-icon" size={20} />
        <h3 className="chart-title">{title}</h3>
      </div>

      <div className="bigchart-controls">
        <div className="control-group">
          <label className="control-label">Month:</label>
          <select className="control-select" value={selectedMonth} onChange={(e) => setSelectedMonth(e.target.value)}>
            {months.map((month) => (
              <option key={month} value={month}>
                {month}
              </option>
            ))}
          </select>
        </div>

        <div className="control-group">
          <label className="control-label">State:</label>
          <select className="control-select" value={selectedState} onChange={(e) => setSelectedState(e.target.value)}>
            {states.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
        </div>
      </div>

      {chartData.length === 0 && (
        <div className="no-data-message">
          <p>No data available for the selected filters</p>
        </div>
      )}

      <div className="bigchart-container">
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis
              dataKey="product"
              tick={{ fontSize: 12 }}
              stroke="#6b7280"
              angle={-45}
              textAnchor="end"
              height={100}
            />
            <YAxis tick={{ fontSize: 12 }} stroke="#6b7280" />
            <Tooltip
              formatter={(value, name) => [
                `${value.toLocaleString()} MT`,
                name === "requirement" ? "Requirement" : name === "availability" ? "Availability" : "Gap",
              ]}
              contentStyle={{
                backgroundColor: "white",
                border: "1px solid #e5e7eb",
                borderRadius: "8px",
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
              }}
            />
            <Legend />
            <Bar dataKey="requirement" fill="#ef4444" name="Requirement" radius={[4, 4, 0, 0]} />
            <Bar dataKey="availability" fill="#10b981" name="Availability" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default Bigchart
