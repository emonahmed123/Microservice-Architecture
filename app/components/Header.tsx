import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-slate-950 shadow-sm sticky top-0 inset-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-white">Logo</h1>
          </div>

          <div className="flex space-x-8">
            <Link
              href="/"
              className="text-white  px-3 py-2 text-sm font-medium transition-colors"
            >
              Current
            </Link>
            <Link
              href="/next"
              className="text-white  px-3 py-2 text-sm font-medium transition-colors"
            >
              Next
            </Link>
            <Link
              href="/advensis-roadmap"
              className="text-white  px-3 py-2 text-sm font-medium transition-colors"
            >
              Advensis Roadmap
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;