'use client'

import { useState, useEffect } from 'react'
import { Transaction, TransactionFormData } from '@/types'
import { getCategoriesByType } from '@/lib/categories'
import { format } from 'date-fns'

interface TransactionModalProps {
  isOpen: boolean
  onClose: () => void
  onSubmit: (data: TransactionFormData) => Promise<void>
  transaction?: Transaction
}

export default function TransactionModal({ isOpen, onClose, onSubmit, transaction }: TransactionModalProps) {
  const [type, setType] = useState<'income' | 'expense'>(transaction?.type || 'expense')
  const [amount, setAmount] = useState(transaction?.amount.toString() || '')
  const [categoryId, setCategoryId] = useState(transaction?.category_id || '')
  const [description, setDescription] = useState(transaction?.description || '')
  const [date, setDate] = useState(transaction?.date || format(new Date(), 'yyyy-MM-dd'))
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (transaction) {
      setType(transaction.type)
      setAmount(transaction.amount.toString())
      setCategoryId(transaction.category_id)
      setDescription(transaction.description)
      setDate(transaction.date)
    }
  }, [transaction])

  const categories = getCategoriesByType(type)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      await onSubmit({
        amount: parseFloat(amount),
        category_id: categoryId,
        type,
        description,
        date,
      })
      onClose()
      resetForm()
    } catch (error) {
      console.error('Error submitting transaction:', error)
    } finally {
      setLoading(false)
    }
  }

  const resetForm = () => {
    setType('expense')
    setAmount('')
    setCategoryId('')
    setDescription('')
    setDate(format(new Date(), 'yyyy-MM-dd'))
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          {transaction ? 'Edit Transaction' : 'Add Transaction'}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Type</label>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => {
                  setType('expense')
                  setCategoryId('')
                }}
                className={`flex-1 py-2 px-4 rounded-lg font-medium transition-colors ${
                  type === 'expense'
                    ? 'bg-red-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Expense
              </button>
              <button
                type="button"
                onClick={() => {
                  setType('income')
                  setCategoryId('')
                }}
                className={`flex-1 py-2 px-4 rounded-lg font-medium transition-colors ${
                  type === 'income'
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Income
              </button>
            </div>
          </div>

          <div>
            <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-1">
              Amount
            </label>
            <input
              id="amount"
              type="number"
              step="0.01"
              required
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-900"
              placeholder="0.00"
            />
          </div>

          <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
              Category
            </label>
            <select
              id="category"
              required
              value={categoryId}
              onChange={(e) => setCategoryId(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-900"
            >
              <option value="">Select a category</option>
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.icon} {cat.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
              Date
            </label>
            <input
              id="date"
              type="date"
              required
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-900"
            />
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={3}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-900"
              placeholder="Optional description"
            />
          </div>

          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={() => {
                onClose()
                resetForm()
              }}
              className="flex-1 py-2 px-4 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 font-medium transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="flex-1 py-2 px-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 font-medium transition-colors disabled:opacity-50"
            >
              {loading ? 'Saving...' : transaction ? 'Update' : 'Add'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
