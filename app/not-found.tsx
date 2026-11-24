import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6 py-12">
      <div className="max-w-2xl w-full text-center">
        {/* 404 Illustration */}
        <div className="mb-8">
          <div className="inline-block relative">
            <div className="text-[120px] md:text-[180px] font-bold text-gray-100 leading-none">
              404
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-6xl">🔍</div>
            </div>
          </div>
        </div>

        {/* Error Message */}
        <h1 className="text-3xl md:text-4xl font-bold text-[#071A30] mb-4">
          Page Not Found
        </h1>
        <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto leading-relaxed">
          Sorry, we could not find the page you are looking for. It might have been moved, deleted, or the URL might be incorrect.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-12">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#FF9418] text-white font-medium rounded hover:bg-[#E58110] transition-colors"
          >
            🏠 Go to Homepage
          </Link>
        </div>

        {/* Popular Links */}
        <div className="border-t border-gray-200 pt-8">
          <p className="text-sm text-gray-500 font-medium mb-4">Or explore these popular sections:</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <Link
              href="/embedded"
              className="p-4 border border-gray-200 rounded-lg hover:border-[#FF9418] hover:shadow-md transition-all bg-white"
            >
              <div className="text-3xl mb-2">⚙️</div>
              <p className="text-xs font-medium text-gray-700">Embedded Systems</p>
            </Link>
            <Link
              href="/python"
              className="p-4 border border-gray-200 rounded-lg hover:border-[#FF9418] hover:shadow-md transition-all bg-white"
            >
              <div className="text-3xl mb-2">🐍</div>
              <p className="text-xs font-medium text-gray-700">Python Programming</p>
            </Link>
            <Link
              href="/projects"
              className="p-4 border border-gray-200 rounded-lg hover:border-[#FF9418] hover:shadow-md transition-all bg-white"
            >
              <div className="text-3xl mb-2">🔧</div>
              <p className="text-xs font-medium text-gray-700">Browse Projects</p>
            </Link>
            <Link
              href="/"
              className="p-4 border border-gray-200 rounded-lg hover:border-[#FF9418] hover:shadow-md transition-all bg-white"
            >
              <div className="text-3xl mb-2">📚</div>
              <p className="text-xs font-medium text-gray-700">All Tutorials</p>
            </Link>
          </div>
        </div>

        {/* Search Suggestion */}
        <div className="mt-8 p-4 bg-gray-50 rounded-lg border border-gray-100">
          <p className="text-sm text-gray-600 mb-3">
            <span className="font-medium text-gray-700">💡 Tip:</span> Use the search bar in the header to find tutorials, courses, or articles.
          </p>
          <Link
            href="/"
            className="text-sm font-medium text-[#FF9418] hover:underline"
          >
            Return to LogicEMB Home →
          </Link>
        </div>
      </div>
    </div>
  )
}
