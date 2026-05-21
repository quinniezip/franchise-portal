import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-bold text-xl text-orange-600 hover:text-orange-700 transition-colors">
          <span className="text-2xl">🍵</span>
          <span className="hidden sm:inline">FoodApps Training</span>
          <span className="sm:hidden">Training</span>
        </Link>
        <Link
          to="/"
          className={`text-sm font-medium px-4 py-2 rounded-lg transition-colors ${
            location.pathname === '/'
              ? 'bg-orange-100 text-orange-700'
              : 'text-gray-600 hover:text-orange-600 hover:bg-orange-50'
          }`}
        >
          Trang Chủ
        </Link>
      </div>
    </nav>
  );
}
