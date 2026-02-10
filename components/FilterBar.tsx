'use client'

import { FilterOptions } from '@/types'
import { PREDEFINED_CATEGORIES } from '@/lib/categories'

interface FilterBarProps {
  filters: FilterOptions
  onFilterChange: (filters: FilterOptions) => void
}

export default function FilterBar({ filters, onFilterChange }: FilterBarProps) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 space-y-4">
      <h3 className="text-sm font-semibold text-gray-700">Filters</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div>
          <label htmlFor="startDate" className="block text-xs font-medium text-gray-600 mb-1">
            Start Date
          </label>
          <input
            id="startDate"
            type="date"
            value={filters.startDate || ''}
            onChange={(e) => onFilterChange({ ...filters, startDate: e.target.value })}
            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-900"
          />
        </div>

        <div>
          <label htmlFor="endDate" className="block text-xs font-medium text-gray-600 mb-1">
            End Date
          </label>
          <input
            id="endDate"
            type="date"
            value={filters.endDate || ''}
            onChange={(e) => onFilterChange({ ...filters, endDate: e.target.value })}
            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-900"
          />
        </div>

        <div>
          <label htmlFor="type" className="block text-xs font-medium text-gray-600 mb-1">
            Type
          </label>
          <select
            id="type"
            value={filters.type || 'all'}
            onChange={(e) => onFilterChange({ ...filters, type: e.target.value as 'income' | 'expense' | 'all' })}
            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-900"
          >
            <option value="all">All</option>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
        </div>

        <div>
          <label htmlFor="category" className="block text-xs font-medium text-gray-600 mb-1">
            Category
          </label>
          <select
            id="category"
            value={filters.categoryId || ''}
            onChange={(e) => onFilterChange({ ...filters, categoryId: e.target.value })}
            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-900"
          >
            <option value="">All Categories</option>
            {PREDEFINED_CATEGORIES.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.icon} {cat.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <button
        onClick={() => onFilterChange({ type: 'all' })}
        className="text-sm text-indigo-600 hover:text-indigo-700 font-medium"
      >
        Clear Filters
      </button>
    </div>
  )
}
