'use client'

import { useState, ReactNode } from 'react'
import { ChevronLeft, ChevronRight, ChevronUp, ChevronDown, Edit, Trash2, Search } from 'lucide-react'

export interface TableColumn<T> {
  key: string
  label: string
  render?: (row: T) => ReactNode
  sortable?: boolean
}

interface DataTableProps<T> {
  columns: TableColumn<T>[]
  data: T[]
  keyExtractor: (row: T) => string
  onEdit?: (row: T) => void
  onDelete?: (row: T) => void
  onBulkDelete?: (rows: T[]) => void
  searchPlaceholder?: string
  itemsPerPage?: number
}

export function DataTable<T>({
  columns,
  data,
  keyExtractor,
  onEdit,
  onDelete,
  onBulkDelete,
  searchPlaceholder = 'Search...',
  itemsPerPage = 10,
}: DataTableProps<T>) {
  const [searchQuery, setSearchQuery] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [sortColumn, setSortColumn] = useState<string | null>(null)
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc')
  const [selectedRows, setSelectedRows] = useState<Set<string>>(new Set())

  // Filter data
  const filteredData = data.filter((row) => {
    const searchLower = searchQuery.toLowerCase()
    return columns.some((col) => {
      const value = (row as any)[col.key]
      return value?.toString().toLowerCase().includes(searchLower)
    })
  })

  // Sort data
  const sortedData = [...filteredData].sort((a, b) => {
    if (!sortColumn) return 0
    const aVal = (a as any)[sortColumn]
    const bVal = (b as any)[sortColumn]
    const modifier = sortDirection === 'asc' ? 1 : -1
    if (aVal < bVal) return -1 * modifier
    if (aVal > bVal) return 1 * modifier
    return 0
  })

  // Paginate data
  const totalPages = Math.ceil(sortedData.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedData = sortedData.slice(startIndex, startIndex + itemsPerPage)

  const handleSort = (columnKey: string) => {
    if (sortColumn === columnKey) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')
    } else {
      setSortColumn(columnKey)
      setSortDirection('asc')
    }
  }

  const handleSelectAll = () => {
    if (selectedRows.size === paginatedData.length) {
      setSelectedRows(new Set())
    } else {
      setSelectedRows(new Set(paginatedData.map(keyExtractor)))
    }
  }

  const handleSelectRow = (key: string) => {
    const newSelected = new Set(selectedRows)
    if (newSelected.has(key)) {
      newSelected.delete(key)
    } else {
      newSelected.add(key)
    }
    setSelectedRows(newSelected)
  }

  const handleBulkDelete = () => {
    if (onBulkDelete && selectedRows.size > 0) {
      const rowsToDelete = data.filter((row) => selectedRows.has(keyExtractor(row)))
      onBulkDelete(rowsToDelete)
      setSelectedRows(new Set())
    }
  }

  return (
    <div className="bg-white rounded-xl border border-gray-200">
      {/* Header */}
      <div className="p-4 border-b border-gray-200 flex items-center justify-between gap-4">
        <div className="relative flex-1 max-w-md">
          <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value)
              setCurrentPage(1)
            }}
            placeholder={searchPlaceholder}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E65100] text-sm"
          />
        </div>
        {selectedRows.size > 0 && onBulkDelete && (
          <button
            onClick={handleBulkDelete}
            className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg text-sm font-medium hover:bg-red-700 transition-colors"
          >
            <Trash2 size={16} />
            Delete {selectedRows.size} selected
          </button>
        )}
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              {onBulkDelete && (
                <th className="px-4 py-3 w-12">
                  <input
                    type="checkbox"
                    checked={selectedRows.size === paginatedData.length && paginatedData.length > 0}
                    onChange={handleSelectAll}
                    className="w-4 h-4 text-[#E65100] rounded focus:ring-[#E65100]"
                  />
                </th>
              )}
              {columns.map((col) => (
                <th
                  key={col.key}
                  className={`px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase ${
                    col.sortable !== false ? 'cursor-pointer hover:bg-gray-100' : ''
                  }`}
                  onClick={() => col.sortable !== false && handleSort(col.key)}
                >
                  <div className="flex items-center gap-2">
                    {col.label}
                    {col.sortable !== false && sortColumn === col.key && (
                      <span>
                        {sortDirection === 'asc' ? (
                          <ChevronUp size={16} />
                        ) : (
                          <ChevronDown size={16} />
                        )}
                      </span>
                    )}
                  </div>
                </th>
              ))}
              {(onEdit || onDelete) && (
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">
                  Actions
                </th>
              )}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {paginatedData.map((row) => {
              const rowKey = keyExtractor(row)
              return (
                <tr key={rowKey} className="hover:bg-gray-50">
                  {onBulkDelete && (
                    <td className="px-4 py-4">
                      <input
                        type="checkbox"
                        checked={selectedRows.has(rowKey)}
                        onChange={() => handleSelectRow(rowKey)}
                        className="w-4 h-4 text-[#E65100] rounded focus:ring-[#E65100]"
                      />
                    </td>
                  )}
                  {columns.map((col) => (
                    <td key={col.key} className="px-6 py-4 text-sm text-gray-900">
                      {col.render ? col.render(row) : (row as any)[col.key]}
                    </td>
                  ))}
                  {(onEdit || onDelete) && (
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        {onEdit && (
                          <button
                            onClick={() => onEdit(row)}
                            className="p-2 text-blue-600 hover:bg-blue-50 rounded transition-colors"
                            aria-label="Edit"
                          >
                            <Edit size={16} />
                          </button>
                        )}
                        {onDelete && (
                          <button
                            onClick={() => onDelete(row)}
                            className="p-2 text-red-600 hover:bg-red-50 rounded transition-colors"
                            aria-label="Delete"
                          >
                            <Trash2 size={16} />
                          </button>
                        )}
                      </div>
                    </td>
                  )}
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="p-4 border-t border-gray-200 flex items-center justify-between">
          <p className="text-sm text-gray-600">
            Showing {startIndex + 1} to {Math.min(startIndex + itemsPerPage, sortedData.length)} of{' '}
            {sortedData.length} results
          </p>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft size={18} />
            </button>
            <span className="text-sm font-medium text-gray-700">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      )}

      {/* Empty state */}
      {paginatedData.length === 0 && (
        <div className="p-12 text-center text-gray-500">
          {searchQuery ? 'No results found' : 'No data available'}
        </div>
      )}
    </div>
  )
}
