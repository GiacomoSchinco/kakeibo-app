import { Category } from '@/types'

export const PREDEFINED_CATEGORIES: Category[] = [
  // Income categories
  { id: '1', name: 'Salary', type: 'income', icon: '💼', color: '#10b981' },
  { id: '2', name: 'Freelance', type: 'income', icon: '💻', color: '#059669' },
  { id: '3', name: 'Investment', type: 'income', icon: '📈', color: '#34d399' },
  { id: '4', name: 'Gift', type: 'income', icon: '🎁', color: '#6ee7b7' },
  { id: '5', name: 'Other Income', type: 'income', icon: '💰', color: '#a7f3d0' },
  
  // Expense categories
  { id: '6', name: 'Food & Dining', type: 'expense', icon: '🍜', color: '#ef4444' },
  { id: '7', name: 'Transportation', type: 'expense', icon: '🚇', color: '#dc2626' },
  { id: '8', name: 'Shopping', type: 'expense', icon: '🛍️', color: '#f87171' },
  { id: '9', name: 'Entertainment', type: 'expense', icon: '🎬', color: '#f59e0b' },
  { id: '10', name: 'Bills & Utilities', type: 'expense', icon: '💡', color: '#d97706' },
  { id: '11', name: 'Healthcare', type: 'expense', icon: '🏥', color: '#ec4899' },
  { id: '12', name: 'Education', type: 'expense', icon: '📚', color: '#8b5cf6' },
  { id: '13', name: 'Housing', type: 'expense', icon: '🏠', color: '#6366f1' },
  { id: '14', name: 'Personal Care', type: 'expense', icon: '💅', color: '#a855f7' },
  { id: '15', name: 'Other Expense', type: 'expense', icon: '📝', color: '#9ca3af' },
]

export function getCategoryById(id: string): Category | undefined {
  return PREDEFINED_CATEGORIES.find(cat => cat.id === id)
}

export function getCategoriesByType(type: 'income' | 'expense'): Category[] {
  return PREDEFINED_CATEGORIES.filter(cat => cat.type === type)
}
