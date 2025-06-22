"use client"

import React, { useState, useMemo } from "react"
import Header from "../Header"
import SummaryCards from "../SummaryCards"
import ChartsSection from "../Charts"
import DataTable from "../DataTable"
import { fertilizerData } from "../../data/fertilizerData"
import "./Dashboard.css"

const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedState, setSelectedState] = useState("All")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [sortField, setSortField] = useState("name")
  const [sortOrder, setSortOrder] = useState("asc")
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(10)

  // Get unique states and categories for filters
  const states = ["All", ...new Set(fertilizerData.map((item) => item.state))]
  const categories = ["All", ...new Set(fertilizerData.map((item) => item.category))]

  // Filter and sort data
  const filteredData = useMemo(() => {
    const filtered = fertilizerData.filter((item) => {
      const matchesSearch =
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.state.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesState = selectedState === "All" || item.state === selectedState
      const matchesCategory = selectedCategory === "All" || item.category === selectedCategory
      return matchesSearch && matchesState && matchesCategory
    })

    // Sort data
    filtered.sort((a, b) => {
      let aVal = a[sortField]
      let bVal = b[sortField]

      if (typeof aVal === "string") {
        aVal = aVal.toLowerCase()
        bVal = bVal.toLowerCase()
      }

      if (sortOrder === "asc") {
        return aVal > bVal ? 1 : -1
      } else {
        return aVal < bVal ? 1 : -1
      }
    })

    return filtered
  }, [searchTerm, selectedState, selectedCategory, sortField, sortOrder])

  // Reset to first page when filters change
  React.useEffect(() => {
    setCurrentPage(1)
  }, [searchTerm, selectedState, selectedCategory])

  const filterProps = {
    searchTerm,
    setSearchTerm,
    selectedState,
    setSelectedState,
    selectedCategory,
    setSelectedCategory,
    states,
    categories,
  }

  const tableProps = {
    filteredData,
    sortField,
    setSortField,
    sortOrder,
    setSortOrder,
    currentPage,
    setCurrentPage,
    itemsPerPage,
    setItemsPerPage,
  }

  return (
    <div className="dashboard">
      <Header />
      <div className="dashboard-container">
        <SummaryCards data={fertilizerData} />
        <ChartsSection data={fertilizerData} />
        <DataTable {...tableProps} filterProps={filterProps} />
      </div>
    </div>
  )
}

export default Dashboard
