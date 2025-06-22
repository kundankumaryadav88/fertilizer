import TableFilters from "../TableFilters"
import TableContent from "../TableContent"
import TablePagination from "../TablePagination"
import "./DataTable.css"

const DataTable = ({
  filteredData,
  sortField,
  setSortField,
  sortOrder,
  setSortOrder,
  currentPage,
  setCurrentPage,
  itemsPerPage,
  setItemsPerPage,
  filterProps,
}) => {
  // Pagination calculations
  const totalItems = filteredData.length
  const totalPages = Math.ceil(totalItems / itemsPerPage)
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

  const paginationProps = {
    currentPage,
    setCurrentPage,
    totalPages,
    totalItems,
    startIndex,
    endIndex,
    itemsPerPage,
    setItemsPerPage,
  }

  return (
    <div className="data-table card">
      <div className="data-table__header">
        <h3 className="data-table__title">Detailed Fertilizer Data</h3>
        <TableFilters {...filterProps} />
        <div className="data-table__info">
          <div className="data-table__count">
            Showing {startIndex + 1} to {Math.min(endIndex, totalItems)} of {totalItems} entries
          </div>
          <div className="data-table__page-info">
            Page {currentPage} of {totalPages}
          </div>
        </div>
      </div>

      <TableContent data={paginatedData} sortField={sortField} sortOrder={sortOrder} onSort={handleSort} />

      {totalPages > 1 && <TablePagination {...paginationProps} />}

      {filteredData.length === 0 && (
        <div className="data-table__empty">
          <p>No data found matching your filters.</p>
        </div>
      )}
    </div>
  )
}

export default DataTable
