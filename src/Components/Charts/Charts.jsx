"use client"
import { useMemo } from "react"
import Bigchart from "../Bigchart"
import Chart from "../Chart"
import Piechart from "../Piechart"
import Featured from "../Featured"
import "./Charts.css"

const Charts = ({ data }) => {
  // Monthly trend data
  const monthlyTrendData = useMemo(() => {
    const months = ["January", "February", "March", "April", "May", "June"]
    return months.map((month) => {
      const monthData = data.filter((item) => item.month === month)
      const totalRequirement = monthData.reduce((sum, item) => sum + item.requirement, 0)
      const totalAvailability = monthData.reduce((sum, item) => sum + item.availability, 0)
      return {
        month,
        requirement: totalRequirement,
        availability: totalAvailability,
        gap: totalRequirement - totalAvailability,
      }
    })
  }, [data])

  // Top 5 most required fertilizers
  const topRequiredFertilizers = useMemo(() => {
    const fertilizerTotals = {}
    data.forEach((item) => {
      if (!fertilizerTotals[item.name]) {
        fertilizerTotals[item.name] = { name: item.name, totalRequirement: 0, category: item.category }
      }
      fertilizerTotals[item.name].totalRequirement += item.requirement
    })

    return Object.values(fertilizerTotals)
      .sort((a, b) => b.totalRequirement - a.totalRequirement)
      .slice(0, 5)
  }, [data])

  // Top 5 least available fertilizers
  const leastAvailableFertilizers = useMemo(() => {
    const fertilizerTotals = {}
    data.forEach((item) => {
      if (!fertilizerTotals[item.name]) {
        fertilizerTotals[item.name] = { name: item.name, totalAvailability: 0, category: item.category }
      }
      fertilizerTotals[item.name].totalAvailability += item.availability
    })

    return Object.values(fertilizerTotals)
      .sort((a, b) => a.totalAvailability - b.totalAvailability)
      .slice(0, 5)
  }, [data])

  // Category distribution
  const categoryData = useMemo(() => {
    const categories = [...new Set(data.map((item) => item.category))]
    return categories.map((cat) => ({
      name: cat,
      value: data.filter((item) => item.category === cat).length,
    }))
  }, [data])

  return (
    <div className="charts-section">
      <div className="grid grid-cols-2">
        <Bigchart data={monthlyTrendData} />
        <Chart data={topRequiredFertilizers} />
      </div>
      <div className="grid grid-cols-2">
        <Featured data={leastAvailableFertilizers} />
        <Piechart data={categoryData} />
      </div>
    </div>
  )
}

export default Charts
