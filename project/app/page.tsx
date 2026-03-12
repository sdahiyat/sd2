export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Quick Sheets
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            AI-Powered Financial Advisory Platform
          </p>
          <div className="space-y-4">
            <p className="text-gray-700">
              Financial advisors upload client documents, receive AI insights, and manage client relationships.
            </p>
            <div className="flex justify-center gap-4">
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Advisor Login
              </button>
              <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors">
                Client Portal
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
