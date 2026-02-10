import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-4">
      <div className="max-w-2xl w-full text-center space-y-8">
        <div>
          <h1 className="text-6xl font-bold text-gray-900 mb-4">家計簿</h1>
          <h2 className="text-4xl font-bold text-gray-800 mb-2">Kakeibo</h2>
          <p className="text-xl text-gray-600">
            Japanese Personal Finance Tracker
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-xl">
          <p className="text-lg text-gray-700 mb-6">
            Track your income and expenses with the traditional Japanese method of mindful spending.
            Visualize your financial journey with beautiful charts and insights.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/auth/signin"
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg font-medium shadow-sm transition-colors"
            >
              Sign In
            </Link>
            <Link
              href="/auth/signup"
              className="bg-white hover:bg-gray-50 text-indigo-600 border-2 border-indigo-600 px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Sign Up
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="text-4xl mb-3">💰</div>
            <h3 className="font-semibold text-gray-900 mb-2">Track Transactions</h3>
            <p className="text-sm text-gray-600">Easily manage your income and expenses</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="text-4xl mb-3">📊</div>
            <h3 className="font-semibold text-gray-900 mb-2">Visual Analytics</h3>
            <p className="text-sm text-gray-600">Beautiful charts and insights</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="text-4xl mb-3">🎯</div>
            <h3 className="font-semibold text-gray-900 mb-2">Mindful Spending</h3>
            <p className="text-sm text-gray-600">Follow the Kakeibo philosophy</p>
          </div>
        </div>
      </div>
    </div>
  )
}
