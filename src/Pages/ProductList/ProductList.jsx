import { useState, useMemo } from "react"
import { Search, Filter, Download } from "lucide-react"
import { fertilizerData } from "../../data/fertilizerData"
import "./ProductList.css"


function ProductList() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedState, setSelectedState] = useState("All")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [sortField, setSortField] = useState("name")
  const [sortOrder, setSortOrder] = useState("asc")
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage] = useState(10)

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

  // Pagination
  const totalPages = Math.ceil(filteredData.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const paginatedData = filteredData.slice(startIndex, endIndex)

  const handleSort = (field) => {
    if (sortField === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc")
    } else {
      setSortField(field)
      setSortOrder("asc")
    }
  }

  const getSortIcon = (field) => {
    if (sortField === field) {
      return sortOrder === "asc" ? "↑" : "↓"
    }
    return ""
  }

  return (
    <div className="product-list">
      <div className="product-list-header">
        <div className="header-content">
          <h1 className="page-title">Product List</h1>
          <p className="page-subtitle">Manage and view all fertilizer products</p>
        </div>
        <button className="export-btn">
          <Download size={16} />
          Export Data
        </button>
      </div>

      <div className="product-list-card">
        <div className="filters-section">
          <div className="search-container">
            <Search className="search-icon" size={16} />
            <input
              type="text"
              placeholder="Search products or states..."
              className="search-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="filter-controls">
            <div className="filter-group">
              <Filter size={16} />
              <select
                className="filter-select"
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
              >
                {states.map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>
            </div>

            <select
              className="filter-select"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="table-info">
          <span>
            Showing {startIndex + 1} to {Math.min(endIndex, filteredData.length)} of {filteredData.length} entries
          </span>
          <span>
            Page {currentPage} of {totalPages}
          </span>
        </div>

        <div className="table-container">
          <table className="modern-table">
            <thead>
              <tr>
                <th onClick={() => handleSort("name")} className="sortable">
                  Product Name {getSortIcon("name")}
                </th>
                <th onClick={() => handleSort("state")} className="sortable">
                  State {getSortIcon("state")}
                </th>
                <th onClick={() => handleSort("category")} className="sortable">
                  Category {getSortIcon("category")}
                </th>
                <th onClick={() => handleSort("month")} className="sortable">
                  Month {getSortIcon("month")}
                </th>
                <th onClick={() => handleSort("requirement")} className="sortable">
                  Requirement (MT) {getSortIcon("requirement")}
                </th>
                <th onClick={() => handleSort("availability")} className="sortable">
                  Availability (MT) {getSortIcon("availability")}
                </th>
                {/* <th>Gap (MT)</th>
                <th>Status</th>
                <th onClick={() => handleSort("price")} className="sortable">
                  Price (₹/50kg) {getSortIcon("price")}
                </th> */}
              </tr>
            </thead>
            <tbody>
              {paginatedData.map((item, index) => {
                // const gap = item.requirement - item.availability
                // const status = gap > 0 ? "Shortage" : "Surplus"
                // const statusClass = gap > 0 ? "status-shortage" : "status-surplus"

                return (
                  <tr key={item.id} className={index % 2 === 0 ? "row-even" : "row-odd"}>
                    <td className="product-name">{item.name}</td>
                    <td>{item.state}</td>
                    <td>
                      <span className="category-badge">{item.category}</span>
                    </td>
                    <td>{item.month}</td>
                    <td>{item.requirement.toLocaleString()}</td>
                    <td>{item.availability.toLocaleString()}</td>
                    {/* <td>{Math.abs(gap).toLocaleString()}</td>
                    <td>
                      <span className={`status-badge ${statusClass}`}>{status}</span>
                    </td>
                    <td>₹{item.price}</td> */}
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>

        {totalPages > 1 && (
          <div className="pagination">
            <button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="pagination-btn"
            >
              Previous
            </button>

            <div className="pagination-numbers">
              {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                let pageNum = i + 1
                if (totalPages > 5) {
                  if (currentPage <= 3) {
                    pageNum = i + 1
                  } else if (currentPage >= totalPages - 2) {
                    pageNum = totalPages - 4 + i
                  } else {
                    pageNum = currentPage - 2 + i
                  }
                }

                return (
                  <button
                    key={pageNum}
                    onClick={() => setCurrentPage(pageNum)}
                    className={`pagination-number ${currentPage === pageNum ? "active" : ""}`}
                  >
                    {pageNum}
                  </button>
                )
              })}
            </div>

            <button
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className="pagination-btn"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProductList
