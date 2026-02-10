# 家計簿 (Kakeibo) - Personal Finance Tracker

A modern personal finance tracking application built with Next.js and Supabase, inspired by the traditional Japanese budgeting method "Kakeibo" (家計簿).

![Next.js](https://img.shields.io/badge/Next.js-16.1.6-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.0-38B2AC?logo=tailwind-css)
![Supabase](https://img.shields.io/badge/Supabase-Enabled-3ECF8E?logo=supabase)

## 🎯 Features

- **User Authentication** - Secure sign-up and sign-in with Supabase Auth
- **Transaction Management** - Full CRUD operations for income and expenses
- **Smart Categories** - 15 predefined categories with emojis and colors
- **Advanced Filtering** - Filter by date range, category, and transaction type
- **Visual Analytics** - Interactive charts showing:
  - Income vs Expenses comparison
  - Expense breakdown by category
  - Monthly balance overview
- **Responsive Design** - Beautiful, clean UI built with Tailwind CSS
- **Real-time Updates** - Instant data synchronization
- **Protected Routes** - Secure, user-specific data access

## 🚀 Tech Stack

- **Frontend Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Database & Auth**: Supabase
- **Charts**: Recharts
- **Date Handling**: date-fns

## 📋 Prerequisites

- Node.js 20+ installed
- A Supabase account (free tier works great)
- npm or yarn package manager

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/GiacomoSchinco/kakeibo-app.git
   cd kakeibo-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Supabase**
   - Create a new project at [supabase.com](https://supabase.com)
   - Go to Project Settings > API to find your credentials
   - Execute the SQL schema from `DATABASE.md` in the Supabase SQL Editor

4. **Configure environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Then edit `.env.local` with your Supabase credentials:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your-project-url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📱 Usage

1. **Sign Up**: Create a new account
2. **Sign In**: Log in with your credentials
3. **Dashboard**: View your financial overview with charts
4. **Add Transaction**: Click "Add Transaction" to record income/expenses
5. **Filter**: Use filters to analyze specific periods or categories
6. **Edit/Delete**: Manage your transactions from the Transactions page

## 🎨 Categories

**Income Categories** (5):
- 💼 Salary
- 💻 Freelance
- 📈 Investment
- 🎁 Gift
- 💰 Other Income

**Expense Categories** (10):
- 🍜 Food & Dining
- 🚇 Transportation
- 🛍️ Shopping
- 🎬 Entertainment
- 💡 Bills & Utilities
- 🏥 Healthcare
- 📚 Education
- 🏠 Housing
- 💅 Personal Care
- 📝 Other Expense

## 🌐 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Add your environment variables in the Vercel dashboard
4. Deploy!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/GiacomoSchinco/kakeibo-app)

## 📂 Project Structure

```
kakeibo-app/
├── app/                    # Next.js app directory
│   ├── auth/              # Authentication pages
│   │   ├── signin/        # Sign in page
│   │   └── signup/        # Sign up page
│   ├── dashboard/         # Dashboard with charts
│   ├── transactions/      # Transactions management
│   └── page.tsx           # Landing page
├── components/            # React components
│   ├── Header.tsx         # Navigation header
│   ├── TransactionModal.tsx
│   └── FilterBar.tsx
├── lib/                   # Utility functions
│   ├── supabase.ts        # Supabase client
│   └── categories.ts      # Category definitions
├── types/                 # TypeScript types
│   └── index.ts
├── DATABASE.md            # Database schema
└── README.md
```

## 🔒 Security

- Row Level Security (RLS) enabled on all tables
- Users can only access their own data
- Environment variables for sensitive credentials
- Secure authentication with Supabase Auth

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Giacomo Schinco**
- GitHub: [@GiacomoSchinco](https://github.com/GiacomoSchinco)

## 🙏 Acknowledgments

- Inspired by the traditional Japanese Kakeibo budgeting method
- Built as a portfolio project to demonstrate full-stack development skills
- Special thanks to the Next.js and Supabase communities

---

Made with ❤️ and Next.js
