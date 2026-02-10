export interface Category {
  id: string
  name: string
  type: 'income' | 'expense'
  icon?: string
  color?: string
}

export interface Transaction {
  id: string
  user_id: string
  amount: number
  category_id: string
  type: 'income' | 'expense'
  description: string
  date: string
  created_at: string
  category?: Category
}

export interface TransactionFormData {
  amount: number
  category_id: string
  type: 'income' | 'expense'
  description: string
  date: string
}

export interface User {
  id: string
  email: string
}

export interface FilterOptions {
  startDate?: string
  endDate?: string
  categoryId?: string
  type?: 'income' | 'expense' | 'all'
}
